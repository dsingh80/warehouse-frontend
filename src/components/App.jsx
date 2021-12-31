import { hot } from 'react-hot-loader';
import React, {Component, Fragment} from 'react';
import './App.css';
import SearchForm from './SearchForm';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <SearchForm />
      </Fragment>
    );
  }
}

export default hot(module)(App);