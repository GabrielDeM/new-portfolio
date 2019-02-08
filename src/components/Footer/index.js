/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Data
import footerText from './../../data/footer';
import frenchFlag from './../../data/images/flag-fr.png';
import britainFlag from './../../data/images/flag-gb.png';

// Components

// Styles
import './footer.scss';
/**
 * Code
 */
const Footer = ({ language, fetchLanguage }) => (
	<div id="footer">
		<div className="footer-language">
			<img
				onClick={event => fetchLanguage(event.target.alt)}
				src={frenchFlag}
				alt="fr"
			/>
			<img
				onClick={event => fetchLanguage(event.target.alt)}
				src={britainFlag}
				alt="en"
			/>
		</div>
		<div className="footer-text">Gabriel De Moura &#169; 2019</div>
		<div className="footer-text">
			Tel: {language === 'fr' ? '06 21 06 63 25' : '+336 21 06 63 25'}
		</div>
		<div className="footer-text">Email: gabrielmouracanto@hotmail.com</div>
		<div className="footer-text">{footerText[language]}</div>
	</div>
);

export default Footer;
