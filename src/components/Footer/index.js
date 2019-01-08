/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Data
import footerText from './../../data/footer'

// Components

// Styles
import './footer.scss';

/**
 * Code
 */
const Footer = ({ changeLanguage, language }) => (
  <div id="footer">
    <div className="footer-language">
      <img onClick={changeLanguage} src="http://www.icône.com/images/icones/3/8/flag-fr.png" alt="fr"/>
      <img onClick={changeLanguage} src="http://www.icône.com/images/icones/3/8/flag-gb.png" alt="en"/>
    </div>
    <div className="footer-text">Gabriel De Moura &#169; 2019</div>
    <div className="footer-text">Tel: +336 21 06 63 25</div>
    <div className="footer-text">Email: gabrielmouracanto@hotmail.com</div>
    <div className="footer-text">{footerText[language]}</div>
  </div>
);

/**
 * Export
 */
export default Footer;
