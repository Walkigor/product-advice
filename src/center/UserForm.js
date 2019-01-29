import React, { Component } from 'react';
//import $ from 'jquery';
//import globalize from '@atlassian/aui/src/js/aui/internal/globalize';
//import '@atlassian/aui/src/js/aui/form-validation/basic-validators';
import './UserForm.css';

  const Title = () => (
    <h1 style={{fontSize: 42}} align="center">Have a question for us?</h1>
  );

  const EmailGrp = () => (
    <div className="field-group">
      <div align="left">
        <label for="email" text-align="left"> Your work email address </label>
      </div>
      <div align="left">
        <input id="email" className="text long-field" type="text" data-aui-validation-field 
          data-aui-validation-pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
          placeholder="name@company.com" data-aui-validation-pattern-msg="Invalid Email address"/>  
      </div>
    </div>
  );

  const ProductList = () => (
    <aui-dropdown-menu id="product-list" style={{display: "block"}}>
      <ul style={{width: "40%"}}>
        <li className="group"> Plan, track, support </li>
        <li> <a href="#" rel="stage" data-fake-select-value="jira_software">Jira Software</a> </li>
        <li> <a href="#" rel="stage" data-fake-select-value="jira_service_desk">Jira Service Desk</a> </li>
        <li> <a href="#" rel="stage" data-fake-select-value="jira_core">Jira Core</a> </li>
        <li> <a href="#" rel="stage" data-fake-select-value="jira_portfolio">Portfolio for Jira</a> </li>
        <li> <a href="#" rel="stage" data-fake-select-value="jira_ops">Jira Ops</a> </li>
  
        <li className="group"> Code, build, ship </li> 
        <li> <a href="#" rel="stage" data-fake-select-value="bitbucket">Bitbucket</a> </li>
        <li> <a href="#" rel="sourcetree_stage" data-fake-select-value="sourcetree">Sourcetree</a> </li>
        <li> <a href="#" rel="stage" data-fake-select-value="bamboo">Bamboo</a> </li>
        <li> <a href="#" rel="stage" data-fake-select-value="fisheye">Fisheye</a> </li>
        <li> <a href="#" rel="stage" data-fake-select-value="crucible">Crucible</a> </li>
      </ul>
  
      <ul style={{width: "60%"}}>
        <li className="group"> Collaborate &amp; Chat </li> 
        <li> <a href="#" rel="stage" data-fake-select-value="confluence">Confluence</a> </li> 
        <li> <a href="#" rel="stage" data-fake-select-value="hipchat">Hipchat</a> </li>
        <li> <a href="#" rel="stage" data-fake-select-value="stride">Stride</a> </li>
  
        <li classNames="group"> Enterprise </li> 
        <li> <a href="#" rel="enterprise_stage" data-fake-select-value="atlassian_stack">Atlassian Stack</a> </li> 
        <li> <a href="#" rel="enterprise_stage" data-fake-select-value="priority_support">Priority Support</a> </li>
        <li> <a href="#" rel="enterprise_stage" data-fake-select-value="premier_support">Premier Support</a> </li> 
        <li> <a href="#" rel="enterprise_stage" data-fake-select-value="tam">Technical Account Manager</a> </li> 
  
        <li className="group"> Identity &amp; Security </li>
        <li> <a href="#" rel="stage" data-fake-select-value="atlassian_access">Atlassian Access</a> </li> 
        <li> <a href="#" rel="stage" data-fake-select-value="crowd">Crowd</a> </li> 
      </ul>
  
      <ul className="semi-col" className="other">
        <li> <a href="#" rel="unsure" data-fake-select-value="none">I'm not sure which products are right for me</a> </li>
      </ul>
    </aui-dropdown-menu>
   ); 

  const ProductGrp = () => (
    <div className="field-group">
      <div align="left">
        <label for="product"> Which product would you like advice on? </label>
      </div>

      <button className="aui-button aui-dropdown2-trigger long-field" aria-controls="product-list" style={{display: "block"}}>
          <ProductList />
      </button>
    </div>
  ); 

  const QuestionGrp = () => (
    <div className="field-group">
      <div align="left">
        <label for="question"> Your question </label>
      </div>
      
      <div align="left">
        <textarea style={{width: 1000}} className="textarea long-field" id="product" rows="5"  name="question-input"></textarea>
      </div>

      <div id="solvvy-disclaimer" className="subtle-message"> 
        <em>Your session will be monitored for training purposes to ensure we are <br></br>
          providing the most useful and helpful answers. Please do not include <br></br>
          personal information in the body of your question.</em>
      </div>
    </div>
  ); 

  const ButtonsGrp = () => (
    <div className="buttons-container">
      <input className="aui-button aui-button-primary submin" type="submit" value="Send" id="send-button" />
    </div> 
  );      
  

 


class UserForm extends Component {

  render() {
    return ( 
      <>
      <Title />
      <form className="aui">      
        <EmailGrp />    
        <ProductGrp />
        <QuestionGrp />
        <ButtonsGrp />
      </form>
</>
    );
  }
}

export default UserForm;