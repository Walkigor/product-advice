import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
        <footer id="footer" style={{position: "absolute", bottom: 0}} align="center">
          <hr></hr>
          <button className="aui-button aui-dropdown2-trigger" aria-controls="lang-selector" style={{background: "#ffff"}}>
            English
          </button>
          <aui-dropdown-menu id="lang-selector">
            <aui-section label="Choose your language">
              <aui-item-link href="https://www.atlassian.com/company/contact/product-evaluator-advice">English</aui-item-link>
              <aui-item-link href="https://ru.atlassian.com/company/contact/product-evaluator-advice">русский</aui-item-link>
            </aui-section>
          </aui-dropdown-menu>
          <label> Copyright &copy; 2019 Atlassian </label> 
        </footer>        
      );
    }
  }
  
  export default Footer; 