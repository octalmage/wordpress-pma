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
        <Route exact path='/:slug' params=':slug' component={SinglePage}/>

      </Switch>

    );
  }
}

export default Content;
