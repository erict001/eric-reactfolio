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
import StickyBox from "react-sticky-box";

const styles = {
  heading: {
    // marginTop: "8%",
    display: "flex",
    flexDirection: "column",
    // marginLeft: "35vw",
    justifyContent: "center",
    height: "60vh",
    width: "100vw",
    fontSize: "6rem",
    fontWeight: "bold",
  },
  title: {
    width: "60vw"
  },
  ul: {
    display: "flex",
    flexDirection: "row",
  },
  li: {
    display: "flex",
    paddingTop: "1vh",
    width: "30vw"
  },
  button: {
    marginLeft: "7vw",
    marginBottom: "1vh",
    height: "5vh",
    width: "15vw",
    borderRadius: "15px",
    backgroundColor: "skyblue",
    fontSize: "20px"
  }
}





class Home extends Component {
  render() {
    return (
      <div className="tabs">
        <div>
          <section class="flex justify-center content-center">
            <div class="xs:mt-20 ml-20" style={styles.heading}>
              <h1 class="flex justify-center">Full Stack Developer.</h1>
              <h1 class="flex justify-center">Designer.</h1>
              <h1 class="flex justify-center">Coach.</h1>
            </div>
          </section>
        </div>
        <StickyBox>
          Sidebar
          <div>Main Content</div>
        </StickyBox>
        <div style={{ height: "110vh" }}>
          <video style={{ width: "100%", height: "100vh" }} src={apolloFull} autoPlay muted loop width="1000" alt="Eric Apollo Academy Media"></video>
        </div>
        <div style={{ display: "flex", justifyContent: "center", height: "auto", width: "100vw", backgroundColor: "black", color: "white" }}>
          <h1 style={{ alignContent: "center", fontSize: "100px" }}>About Me</h1>
        </div>
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default Home;
