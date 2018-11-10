import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';


export default class ChannelList extends Component {
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
    const { messages } = this.state;

    return (
      <ul>
        <li>
          <NavLink to='/channels/1' activeClassName="active">
            <span># example_channel</span>
            <span>{ messages.filter(message => message.channelId === 1).length }</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/channels/2' activeClassName="active">
            <span># general</span>
            <span>{ messages.filter(message => message.channelId === 2).length }</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

