import React, { Component } from 'react';
const axios = require('axios');

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
    const messages = this.state.messages;
    // get messages from state then filter by channelId for appropriate channel? -> map list of these messages
    return (
      <div>
      </div>
    );
  }
}
