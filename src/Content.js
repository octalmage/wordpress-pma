import React, { Component } from 'react';
import Posts from './Posts';
import SinglePage from './SinglePage'
import Footer from './Footer'
import Menu from './Menu'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class Content extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Posts}/>
        <Route path='/ableton' component={Footer}/>
        <Route path='/bash' component={Menu}/>
      </Switch>

    );
  }
}

export default Content;
