import React, { Component } from 'react';
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'
import Resume from './Resume'
import Headers from './Headers'
import Carousel from './Carousel'
import AboutSection from './AboutSection'
import BuildAccordion from './BuildAccordion';

const styles = {
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "90vh",
    width: "100vw",
    fontSize: "6rem",
    fontWeight: "bold",
    opacity: "50%"
  },
  font: {
    opacity: "100%"
  }
}

class Home extends Component {
  render() {
    return (
      <div className="tabs">
        <div>
          <section class="flex justify-center content-center" style={styles.heading}>
            <div>
              <Carousel />
            </div>
          </section>
          <div class="mt-5">
            <AboutSection />
          </div>
        </div>
        <About />
        <Portfolio />
        <Headers />
        <BuildAccordion />
        <Contact />
\      </div>
    );
  }
}

export default Home;
