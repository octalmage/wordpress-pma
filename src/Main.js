import React, { Component } from 'react';
import WPHeader from './WPHeader'
import Menu from './Menu'
import SinglePage from './SinglePage';
import Posts from './Posts'
import Content from './Content'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Main extends Component {
  render(){
    return(
      <div>
      <WPHeader />
      <Menu />
      <Content />
      <Footer />
      </div>
    );
  }
}

export default Main;
