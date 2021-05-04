import React from 'react';
import Menu from './Menu';

// Functional Components with Anonymous Functions 
const Footer = function(){

  // ideal place for us to have variables
  let copyrightYear = 2021;

  return(
    <footer>
      <hr></hr>
      <Menu />
      <p className="greyText">Copyright - Arun | {copyrightYear}</p>
    </footer>
  )
}

export default Footer;