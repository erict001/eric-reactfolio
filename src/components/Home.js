import React, { Component } from 'react';
import picture from "../images/assets/picture.png"
import appa from "../images/assets/appa.png"
import apollo from "../images/assets/apollo.png"
import apolloFull from "../images/assets/apolloFull.mov"
// import apolloMov from "../images/assets/apollo.mov"
import jeopardy from "../images/assets/Inspirational-Jeopardy.png"
import password from "../images/assets/Password.png"
import restaurant from "../images/assets/Restaurant.png"
// import appaMov from "../images/assets/appa.mov"
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'
import Resume from './Resume'
import Headers from './Headers'
import Carousel from './Carousel'
import BackgroundSlider from 'react-background-slider'

const image1 = "../images/assets/Nike.png"

const styles = {
  heading: {
    // marginTop: "8%",
    // marginBottom: "8%",
    display: "flex",
    flexDirection: "column",
    // marginLeft: "35vw",
    justifyContent: "center",
    height: "90vh",
    width: "100vw",
    fontSize: "6rem",
    fontWeight: "bold",
    // backgroundImage: `url(${jeopardy})`,
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
            <div style={styles.font}>
              <Carousel />
            </div>
            <div>

            </div>
          </section>
        </div>
        <div style={{ height: "110vh" }}>
          <video style={{ width: "100%", height: "100vh" }} src={apolloFull} autoPlay muted loop width="1000" alt="Eric Apollo Academy Media"></video>
        </div>
        <About />
        <Portfolio />
        <Headers />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default Home;
