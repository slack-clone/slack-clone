import React, { Component } from 'react';
import store from '../store';


export default class NewMessageEntry extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    return (
      <form id="new-message-form">
        <div>
          <input
            className="form-control"
            type="text"
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
