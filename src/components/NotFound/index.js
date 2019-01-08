/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Retour from '../../components/Retour';
// Styles
import './notfound.scss';

/**
 * Code
 */
const NotFound = ({ language }) => (
  <div id="notfound">
    <Retour />
    <div className="flex-div">
      <div className="error-text">{language === 'fr' ? 'Page non trouvée :/' : 'Page not found :/'}</div>
    </div>
  </div>
);

/**
 * Export
 */
export default NotFound;
