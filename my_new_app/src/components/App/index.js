import React, { Component } from 'react';
import Main from '../Main';
import './App.css';
// import Intro from '../Intro';
import 'whatwg-fetch';
import Series from '../../containers/Series';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Tv Series list</h1>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
