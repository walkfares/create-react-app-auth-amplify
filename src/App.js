import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import Entry from "./games/S-01/Entry"
import 'bootstrap/dist/css/bootstrap.min.css';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Entry />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
