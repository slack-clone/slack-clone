import React, { Component } from 'react';
import store, { writeMessage, gotNewMessageFromServer, postMessage } from '../store';
import axios from 'axios';


export default class NewMessageEntry extends Component {
  constructor () {
    super ();
    this.state = store.getState();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleChange (event) {
    const action = writeMessage(event.target.value);
    store.dispatch(action);
  }

  handleSubmit(event) {
    event.preventDefault();
    const content = this.state.newMessageEntry;
    const channelId = this.props.channelId;

    axios.post('/api/messages', { content: content, channelId: channelId })
      .then(res => res.data)
      .then(message => store.dispatch(gotNewMessageFromServer(message)));

    const messageData = {content:content, channelId:channelId};
    store.dispatch(postMessage(messageData));
  }

  render () {
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div>
          <input
            className="form-control"
            type="text"
            value={this.state.NewMessageEntry}
            onChange={this.handleChange}
            placeholder="Type here..."
          />
          <div>
            <button type="submit">Chat</button>
          </div>
        </div>
      </form>
    );
  }
}
