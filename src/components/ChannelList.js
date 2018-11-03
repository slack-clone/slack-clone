import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ChannelList extends Component {

  render () {
    return (
      <ul>
        <li>
          <NavLink to='/channels/1' activeClassName="active">
            <span># example_channel</span>
            <span>0</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/channels/2' activeClassName="active">
            <span># general</span>
            <span>0</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}
