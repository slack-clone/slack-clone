import React, { Component } from 'react';
import axios from 'axios';
import NewMessageEntry from './NewMessageEntry';
import Message from './Message';

export default class MessageList extends Component {

  constructor () {
    super();
    this.state = { messages: [] };
  }

  componentDidMount () {
    axios.get('/api/messages')
      .then(res => res.data)
      .then(messages => this.setState({ messages }));
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
