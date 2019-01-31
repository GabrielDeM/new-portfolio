/**
 * NPM import
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';
/**
 * Local import
 */
// Components

// Styles
import './header.scss';

/**
 * Code
 */
const Header = () => (
	<div id="header">
		<a
			href="https://twitter.com/GabrielMouraJS"
			className="social-icons twitter-icon"
		>
			<FaTwitter className="" />
		</a>
		<a
			href="https://www.facebook.com/gabrielmouracanto"
			className="social-icons facebook-icon"
		>
			<FaFacebookF className="" />
		</a>
		<Link to="/" className="link-header">
			<h1 className="title">Gabriel De Moura</h1>
			<span className="slider" />
			<h2 className="sub-title">Full-Stack JS Developer</h2>
		</Link>
		<a
			href="https://www.linkedin.com/in/gabriel-de-moura/"
			className="social-icons linkedin-icon"
		>
			<FaLinkedin className="" />
		</a>
		<a
			href="https://github.com/GabrielDeM"
			className="social-icons github-icon"
		>
			<FaGithub className="" />
		</a>
	</div>
);

/**
 * Export
 */
export default Header;
