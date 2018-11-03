import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MessageList from './MessageList';

export default class Main extends Component {

  render () {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
          <Switch>
            <Route path="/channels/:channelId" component={MessageList} />
            <Redirect to="/channels/1" />
          </Switch>
        </main>
      </div>
    );
  }
}
