import React, { Component } from 'react';
import NewMessageEntry from './NewMessageEntry';
import Message from './Message';
import store, { fetchMessages } from '../store';

export default class MessageList extends Component {

  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    const thunk = fetchMessages();
    store.dispatch(thunk);
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    const channelId = Number(this.props.match.params.channelId);
    const messages = this.state.messages;
    const filteredMessages = messages.filter(message => message.channelId === channelId); // filter msgs by chId
    return (
      // map list of filtered messages
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry />
      </div>
    );
  }
}
