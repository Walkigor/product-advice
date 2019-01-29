import React from 'react';
import Header from './top/Header';
import LinkItem from './center/LinkItem';
import HelpLinks from './center/HelpLinks';
import UserForm from './center/UserForm';
import Footer from './bottom/Footer';
import './PageLayout.scss';
import LinksTest from './center/LinksArr';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const PageLayout = () => (
    <>
      <Header />
      <HelpLinks />     
      <UserForm />      
      <Footer />
    </>
  );

  export default PageLayout;