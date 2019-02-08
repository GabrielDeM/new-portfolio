/**
 * NPM import
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
/**
 * Local import
 */
// Components
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Biographie from '../../components/Biographie';
import Competences from '../../components/Competences';
import NotFound from '../../components/NotFound';
// Styles
import './app.scss';

/**
 * Code
 */
class App extends Component {
	render() {
		const { language, fetchLanguage } = this.props;
		return (
			<Router>
				<div id="app">
					<Header />
					<Switch>
						{/* Homepage */}
						<Route exact path="/" render={() => <Nav language={language} />} />
						{/* Bio */}
						<Route
							exact
							path="/bio"
							render={() => <Biographie language={language} />}
						/>
						{/* Compétences */}
						<Route
							exact
							path="/skills"
							render={() => <Competences language={language} />}
						/>
						{/* Page not found */}
						<Route render={() => <NotFound language={language} />} />
					</Switch>
					<Footer language={language} fetchLanguage={fetchLanguage} />
				</div>
			</Router>
		);
	}
}

function mapStateToPros({ language }) {
	return {
		language
	};
}

/**
 * Export
 */
export default connect(
	mapStateToPros,
	actions
)(App);
