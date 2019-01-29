import React, { Component } from 'react';
import Logo from '@atlassian/aui/dist/aui/images/atlassian-horizontal-blue.svg';

class TopLeft extends Component {
    render() {
      return (
        <div align="left">
          <img src="https://wac-cdn.atlassian.com/dam/jcr:616e6748-ad8c-48d9-ae93-e49019ed5259/Atlassian-horizontal-blue-rgb.svg?cdnVersion=kw" 
          alt="Atlassian logo" style={{width: 193, height: 24, position: 'relative', top: 4}}/>
          <button className="aui-button aui-dropdown2-trigger" aria-controls="#" style={{background: "#ffff"}}>
            Products
          </button>
          <button className="aui-button aui-dropdown2-trigger" aria-controls="#" style={{background: "#ffff"}}>
            For teams
          </button>
          <button className="aui-button aui-dropdown2-trigger" aria-controls="#" style={{background: "#ffff"}}>
            Support
          </button>          
        </div>
      );
    }
  }
  
  export default TopLeft; 