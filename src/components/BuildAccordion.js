import React from 'react';
import Accordion from './Accordion.js';
import { accordionData } from '../utils/accordionData.js';

const BuildAccordion = () => {
  return (
    <div>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, company, description1, description2, description3 }) => (
          <Accordion title={title} company={company} description1={description1} description2={description2} description3={description3}/>
        ))}
      </div>
    </div>
  );
};

export default BuildAccordion;