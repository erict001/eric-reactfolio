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
    dropdown: {
      display: "flex",
      width: "98%",
      marginLeft: "1vw",
      paddingLeft: "2vw",
      borderLeft: "1px solid black",
      borderRight: "1px solid black"
    },
    content: {
      padding: "2vh 1vw 2vh 1vw"
    },
    button: {
      border: "1px solid black",
      padding: "5px",
      backgroundColor: "#ECECEC",
      textDecoration: "bold"
    }
  }

  return (
    <div className="accordion-item">
      <div className="accordion-title" style={styles.accordions} onClick={() => setIsActive(!isActive)}>
        <div class="max-w w-full flex max-w-full">
          <div class="flex w-1/5 xs:w-1/3">
            <img class="inset-0 h-auto w-full object-fill object-center" src={image} alt="denali logo"/>
          </div>
          <div class="border-r border-b border-l border-gray-400 w-full lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <h1 class="text-gray-900 font-bold text-xl mb-2">{title}</h1>
              <h3 class="text-gray-700 font-bold text-lg mb-1 text-base">{company}</h3>
              <h5 class="text-gray-600">{duration}</h5>
            </div>
            <div>
              <button style={styles.button}>{isActive ? '-' : 'Learn More'}</button>
            </div>
          </div>
        </div>
      </div>
        <div style={styles.dropdown} class="w-full bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col w-11/12 justify-center text-lg">
          {isActive && <div className="accordion-content" style={styles.content}>• {description1}</div>}
          {isActive && <div className="accordion-content" style={styles.content}>• {description2}</div>}
          {isActive && <div className="accordion-content" style={styles.content}>• {description3}</div>}
        </div>
    </div>
  );
};

export default Accordion;