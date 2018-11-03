import React, { Component } from 'react';


export default class NewChannelEntry extends Component {

  render () {
    return (
      <form>
        <div>
          <label>Create a Channel</label>
          <input
            type="text"
            name="channelName"
            placeholder="Enter channel name"
          />
        </div>
        <div>
          <button type="submit">Create Channel</button>
        </div>
      </form>
    );
  }
}
