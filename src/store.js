import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import socket from './socket';

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';

const initialState = {
  messages: [],
  newMessageEntry: ''
};

export function gotMessagesFromServer(messages) {
  return {
    type: GOT_MESSAGES_FROM_SERVER,
    messages
  };
}

export function writeMessage(inputContent) {
  return {
    type: WRITE_MESSAGE,
    newMessageEntry: inputContent
  };
}

export function gotNewMessageFromServer(message) {
  return {
    type: GOT_NEW_MESSAGE_FROM_SERVER,
    message: message
  };
}

export function fetchMessages() {

  return function thunk(dispatch) {
    return axios.get('/api/messages')
      .then(res => res.data)
      .then(messages => {
        const action = gotMessagesFromServer(messages);
        dispatch(action);
    });
  }
}

export function postMessage(message) {

  return function thunk(dispatch) {
    return axios.post('/api/messages', message)
      .then(res => res.data)
      .then(newMessage => {
        const action = gotNewMessageFromServer(newMessage);
        dispatch(action);
        socket.emit('new-message', newMessage);
      })
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return Object.assign({}, state, { messages: action.messages });

    case WRITE_MESSAGE:
      return { ...state, newMessageEntry: action.newMessageEntry }

    case GOT_NEW_MESSAGE_FROM_SERVER:
      return { ...state, messages:[ ...state.messages, action.message ] }

    default:
      return state;
  }
}

const res = applyMiddleware(loggerMiddleware, thunkMiddleware);
const store = createStore(reducer, res);
export default store;
