import React from "react";
import { accordionData } from "../utils/accordionData";
import Accordion from "./Accordion.js"

const BuildAccordion = () => {
 
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, company, description1, description2, description3 }) => (
          <Accordion title={title} company={company} description1={description1} description2={description2} description3={description3}/>
        ))}
      </div>
    </div>
  );
}

export default BuildAccordion;