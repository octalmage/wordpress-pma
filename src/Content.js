import React, { Component } from 'react';
import Posts from './Posts';
import SinglePage from './SinglePage';
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
        <Route path=':slug' component={SinglePage}/>
      </Switch>

    );
  }
}

export default Content;
