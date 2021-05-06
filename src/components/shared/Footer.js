import React from 'react';
import Menu from './Menu';

// Functional Components with Anonymous Functions 
const Footer = function(){

  // ideal place for us to have variables
  let copyrightYear = 2021;

  return(
    <>
      <footer>
        <hr></hr>
        <Menu />
      </footer>
      <p className="greyText">Copyright - Arun | {copyrightYear}</p>
    </>
  )
}

export default Footer;