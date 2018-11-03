import React, { Component } from 'react';
import axios from 'axios';

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
      </div>
    );
  }
}
