import {
    createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
  import loggingMiddleware from 'redux-logger';
  import thunkMiddleware from 'redux-thunk';
  import { composeWithDevTools } from 'redux-devtools-extension';
  
  import channels from './channels';
  import currentChannel from './currentChannel';
  import messages from './messages';
  import name from './name';
  import newChannelEntry from './newChannelEntry';
  import newMessageEntry from './newMessageEntry';
  
// send shorthand name for modules to combineReducers
  const reducer = combineReducers({
    channels,
    currentChannel,
    messages,
    name,
    newChannelEntry,
    newMessageEntry
  });
  
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      loggingMiddleware
    ))
  );
  
  export default store;
  
  // export action creators
  export * from './channels';
  export * from './currentChannel';
  export * from './messages';
  export * from './name';
  export * from './newChannelEntry';
  export * from './newMessageEntry';