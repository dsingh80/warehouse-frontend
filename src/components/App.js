import { hot } from 'react-hot-loader';
import React, {Component, Fragment} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <p>Hello, World!</p>
      </Fragment>
    );
  }
}

export default hot(module)(App);