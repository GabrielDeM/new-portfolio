/**
 * NPM import
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components
// Styles
import './competences.scss';

/**
 * Code
 */

class Competence extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    niv: PropTypes.number.isRequired,
  };

  componentWillMount(name, niv) {
    const div = [];

    for (let i = 0; i < 11; i += 1) {
      div.push(<div className={`competence-level competence-level-${niv}`} key={name + i}>{i}</div>);
    }

    return div;
  }

  render() {
    const { name, niv } = this.props;

    return (
      <div id="competence">
        <h2 className="competence-name">{name}</h2>
        <div className="competence-level_div">
          {this.componentWillMount(name, niv)}
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default Competence;
