import React, { Component } from 'react';
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
          <MessageList />
        </main>
      </div>
    );
  }
}
