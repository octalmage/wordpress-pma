import React, { Component } from 'react';
import WPHeader from './WPHeader'
import Menu from './Menu'
import Content from './Content'
import Footer from './Footer'

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
