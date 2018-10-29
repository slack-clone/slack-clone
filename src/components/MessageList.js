import React, { Component } from 'react';


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
    return (
      <div>
      </div>
    );
  }
}
