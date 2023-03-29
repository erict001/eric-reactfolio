import React, { useState } from 'react';

const Accordion = ({ title, company, description1, description2, description3 }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{company}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{description1}</div>}
      {isActive && <div className="accordion-content">{description2}</div>}
      {isActive && <div className="accordion-content">{description3}</div>}
    </div>
  );
};

export default Accordion;