import React, { Component } from 'react';
import Main from './Main'
import {
  BrowserRouter
} from 'react-router-dom'
import './App.css';

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    id: '',
    content: [],
  };
}
  // Component has mounted


  render() {
    return (
      // Router. See Main.js for more code.
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
