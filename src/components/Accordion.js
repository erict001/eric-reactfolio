import React, { useState } from 'react';

const Accordion = ({ title, company, description1, description2, description3 }) => {
  const [isActive, setIsActive] = useState(false);

  const styles = {
    accordions: {
      display: "flex",
      width: "98.8%",
      margin: "0 2vw 0 1vw",
      border: "1px solid black",
    },
    header: {
      display: "flex",
      alignItems: "center"
    }
  }

  return (
    <div className="accordion-item">
      <div className="accordion-title" style={styles.accordions} onClick={() => setIsActive(!isActive)}>
        <div class="max-w w-full lg:max-w-full lg:flex">
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
                Members only
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">{title}</div>
              <p class="text-gray-700 text-base">{company}</p>
            </div>
            <div>{isActive ? '-' : 'Learn More'}</div>
          </div>
        </div>
      </div>
      {isActive && <div className="accordion-content">{description1}</div>}
      {isActive && <div className="accordion-content">{description2}</div>}
      {isActive && <div className="accordion-content">{description3}</div>}
    </div>
  );
};

export default Accordion;