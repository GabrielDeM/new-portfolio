/**
 * NPM import
 */
import React from 'react';
import Parser from 'html-react-parser';
import {
  FaCode,
  FaReact,
  FaPlane,
} from 'react-icons/fa';
/**
 * Local import
 */
// data
import textData from '../../data/biographie';
// Components
import Retour from '../../components/Retour';
// Styles
import './biographie.scss';

/**
 * Code
 */
const Biographie = ({ language }) => (
  <div id="biographie">
    <Retour language={language} />
    <div className="div-img">
      <img src="https://i.imgur.com/kIniG8c.jpg" alt="Gabriel" className="img-biographie" />
    </div>
    <div className="bio-img">
      <ul>
        <li><span className="span-bio_img">{language === 'fr' ? 'Âge:' : 'Age:'}</span> {textData[language].age}</li>
        <li><span className="span-bio_img">{language === 'fr' ? 'Ville:' : 'City:'}</span> {textData[language].city}</li>
        <li><span className="span-bio_img">Tel:</span> {textData[language].tel}</li>
        <li><span className="span-bio_img">Email:</span> {textData[language].email}</li>
      </ul>
    </div>
    <p className="bio-p">
      <FaCode className=" bio-icon code-icon" />
      {Parser(textData[language].code)}
    </p>
    <p className="bio-p">
      <FaReact className=" bio-icon react-icon" />
      {Parser(textData[language].react)}
    </p>
    <p className="bio-p">
      <FaPlane className=" bio-icon plane-icon" />
      {Parser(textData[language].voyage)}
    </p>
  </div>
);

/**
 * Export
 */
export default Biographie;
