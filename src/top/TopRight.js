import React, { Component } from 'react';

class TopRight extends Component {
    render() {
      return (
        <div align="right">
          <button className="aui-button aui-button-primary"><a href='/try'>
            <text style={{color: '#ffff'}}>Try free</text>
          </a></button>
          <button className="aui-button aui-button-secondary" style={{background: "#ffff"}}><a href='/buy'>
            <text style={{color: '#0052cc'}}>Buy now</text>             
          </a></button>
          <a className="aui-icon aui-icon-small aui-iconfont-search" href='#'></a>
          <button className="aui-button aui-button-link" style={{background: "#ffff"}} resolved="/login">
            Login
          </button>  
        </div>     
      );
    }
  }
  
  export default TopRight; 