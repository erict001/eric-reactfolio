import React from 'react';
// import { Link } from "react-router-dom";
// import About from './components/About'

const styles = {
  margin: {
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "40%"
  }
}

function About() {
  return (
    <div className="tabs" style={styles.margin}>
        <div>
          <h2>Hi, I'm Eric Taylor.</h2>
          <br></br>
          <h1>Full Stack Developer. Designer. Coach.</h1>
          <p>
            I'm driven to help people and companies become their best selves through creative design, quality branding, and unparalleled customer service.
            <br />
            <br />
            Currently a full stack web developer student from University of Washington. Experienced business operations manager with a track record of driving multiple businesses to successful outcomes. 
            <br />
            <br />
          </p>
        </div>
    </div>
  );
}

export default About;