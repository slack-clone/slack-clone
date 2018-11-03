import React, { Component } from 'react';
import ChannelList from './ChannelList';

export default class Sidebar extends Component {

  render () {
    return (
      <section >
        <div>
          <h3 href="#">
            <div>Slack</div>
          </h3>
        </div>
        <h5>channels</h5>
        <ChannelList />
      </section>
    );
  }
}
