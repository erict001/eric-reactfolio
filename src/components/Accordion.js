import React, { useState } from 'react';

const Accordion = ({ title, company, duration, image, description1, description2, description3 }) => {
  const [isActive, setIsActive] = useState(false);

  const styles = {
    accordions: {
      display: "flex",
      width: "98%",
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
        <div class="max-w w-full flex max-w-full">
          <div class="flex">
            {/* <img class="inset-0 h-auto w-conver object-fill object-center" src={image} alt="denali logo"/> */}
            <div style={{backgroundImage: `url(${image})`, "background-size": "cover", "background-position": "center", "height": "10vh", "width": "10vw"}}></div>
          </div>
          <div class="border-r border-b border-l border-gray-400 w-full lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <h1 class="text-gray-900 font-bold text-xl mb-2">{title}</h1>
              <h3 class="text-gray-700 font-bold text-lg mb-1 text-base">{company}</h3>
              <h5 class="text-gray-600">{duration}</h5>
            </div>
            <div>{isActive ? '-' : 'Learn More'}</div>
          </div>
        </div>
      </div>
      {isActive && <div className="accordion-content">• {description1}</div>}
      {isActive && <div className="accordion-content">• {description2}</div>}
      {isActive && <div className="accordion-content">• {description3}</div>}
    </div>
  );
};

export default Accordion;