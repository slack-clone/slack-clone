import React, { Component } from 'react';


export default class NewMessageEntry extends Component {

  render () {
    return (
      <form id="new-message-form">
        <div>
          <input
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
