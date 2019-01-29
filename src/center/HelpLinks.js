import React, { Component } from 'react';
import LinksArr from './LinksArr';

class HelpLinks extends Component {
  render() {
    return ( 
      <div align="center"> 
        <h1 style={{fontSize: 42}} className="text-center">Product advice</h1>
        <div className="grid grid-5 vertical-gutters-standard vertical-padding-standard" style={{width: 800}}> 
          <LinksArr />
        </div>
      </div>
    );
  }
}

export default HelpLinks;