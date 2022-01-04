import { hot } from 'react-hot-loader';
import React, {Component, Fragment} from 'react';
import './App.css';
import CubeSearchForm from './CubeSearchForm';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <React.StrictMode>
          <CubeSearchForm />
        </React.StrictMode>
      </Fragment>
    );
  }
}

export default hot(module)(App);