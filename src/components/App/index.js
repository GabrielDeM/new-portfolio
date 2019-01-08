/**
 * NPM import
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

  state = {
    language: 'fr'
  }

  changeLanguage = event => {
    this.setState({
      language: event.target.alt
    })
  }

  render() {

    const { language } = this.state

    return (
      <Router>
        <div id="app">
          <Header />
          <Switch>
            {/* Homepage */}
            <Route exact path="/" render={() => <Nav language={language} />} />
            {/* Bio */}
            <Route exact path="/bio" render={() => <Biographie language={language} />} />
            {/* Compétences */}
            <Route exact path="/skills" render={() => <Competences language={language} />} />
            {/* Page not found */}
            <Route render={() => <NotFound language={language} />} />
          </Switch>
          <Footer language={language} changeLanguage={this.changeLanguage} />
        </div>
      </Router>
    )
  }
};

/**
 * Export
 */
export default App;
