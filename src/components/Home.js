import React, { useState, useEffect } from 'react';
import picture from "../images/assets/picture.png"
import apollo from "../images/assets/apollo.png"
import apolloFull from "../images/assets/apolloFull.mov"
import apolloMov from "../images/assets/apollo.mov"
import jeopardy from "../images/assets/Inspirational-Jeopardy.png"
import password from "../images/assets/Password.png"
import restaurant from "../images/assets/Restaurant.png"
import appaMov from "../images/assets/appa.mov"

const styles = {
  heading: {
    // marginTop: "8%",
    display: "flex",
    flexDirection: "column",
    // marginLeft: "35vw",
    justifyContent: "center",
    height: "40vh",
    width: "100%",
    fontSize: "60px",
    fontWeight: "bold",
  },
  title: {
    width: "60%"
  },
  ul: {
    display: "flex",
    flexDirection: "row",
  },
  li: {
    display: "flex",
    paddingTop: "1vh",
    width: "30%"
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


function About() {
  return (
    <div className="tabs">
      <div>
        <section>
          <div style={styles.heading}>
            <h1 class="flex justify-center">Full Stack Developer.</h1>
            <h1 class="flex justify-center">Designer.</h1>
            <h1 class="flex justify-center">Coach.</h1>
          </div>
        </section>
      </div>
      <div style={{height: "100vh"}}>
        <video style={{ width: "100%", height: "100vh" }} src={apolloFull} autoPlay muted loop width="1000"></video>
      </div>
      {/* <div style={{ height: "24vh", width: "100vw", marginBottom: "10vh", backgroundColor: "black", color: "white" }}>
        <ul style={styles.ul}>
          <div style={styles.li}>
            <h1 style={{ width: "30%", fontSize: "4rem", color: "green" }}>2:6</h1>
            <h3 style={{ paddingTop: "20px", width: "60%" }} >Owned and Operated two multi six figure companies</h3>
          </div>
          <div style={styles.li}>
            <h1 style={{ width: "45%", fontSize: "4rem", color: "goldenrod" }}>WWW</h1>
            <h3 style={{ paddingTop: "20px", width: "50%" }}>Built and maintained all of my websites and web presences</h3>
          </div>
          <div style={styles.li}>
            <h1 style={{ marginLeft: "3vw", width: "20%", fontSize: "4rem", color: "green" }}>7</h1>
            <h3 style={{ paddingTop: "20px", width: "50%" }}>Director of Logistics for a 7 figure company</h3>
          </div>
          <div style={styles.li}>
            <h1 style={{ width: "40%", fontSize: "4rem", color: "purple" }}>3.75</h1>
            <h3 style={{ paddingTop: "20px", width: "50%" }}>GPA for Full Stack Web Development Bootcamp through University of Washington</h3>
          </div>
        </ul>
      </div> */}
      <div style={{ display: "flex", height: "60vh", paddingLeft: "3vw" }}>
        <div class="w-2/5">
          <img src={picture} style={{ marginLeft: "90px", marginRight: "90px", height: "50rem", borderRadius: "150px" }}></img>
        </div>
        <div class="w-3/5">
          <h1 class="text-5xl" style={{ fontFamily: "Zapfino", fontWeight: 900 }}>Hi I'm Eric Taylor!</h1>
          <br></br>
          <br></br>
          <h1 class="text-5xl w-4/5">
            I'm driven to help people and companies become their best selves through creative design, quality branding, and unparalleled customer service.
            <br />
            <br />
            A recent full stack web developer graduate from the University of Washington. Experienced business operations manager with a track record of driving multiple businesses to successful outcomes.
            <br />
            <br />
          </h1>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", height: "24vh", width: "100vw", backgroundColor: "black", color: "white", marginBottom: "10vh" }}>
        <h1 style={{ alignContent: "center", fontSize: "100px" }}>Projects</h1>
      </div>
      <h1 class="flex justify-center text-5xl" style={{ width: "100%", fontFamily: "Zapfino", fontWeight: 900 }}>Before Bootcamp:</h1>
      <br></br>
      <br></br>
      <br></br>
      <div class="flex justify-center" style={{ display: "flex", height: "100vh" }}>
        {/* <div class="w-1/5">
          <h1 class="text-2xl">Apollo Academy <br></br>Basketball Website</h1>
        </div> */}
        <div class="flex justify-center">
          <video style={{ width: "100%", height: "80vh" }} src={apolloMov} controls width="1000"></video>
        </div>
      </div>
      <h1 class="flex justify-center text-5xl" style={{ width: "100%", fontFamily: "Zapfino", fontWeight: 900 }}>During Bootcamp:</h1>
      <br></br>
      <br></br>
      <br></br>
      <div class="col-2">
        <div class="flex justify-center">
          <div style={{ height: "80vh", width: "60vw", backgroundImage: `url(${jeopardy})` }}>
            <button class="w-60 h-20 text-2xl">Github</button>
            <button>Deployed Link</button>
          </div>
          {/* <img src={jeopardy} style={styles.image}></img> */}
        </div>
        <div style={{ display: "flex", height: "60vh", paddingLeft: "3vw", paddingRight: "1vw" }}>
          <div>
            <h1 style={{ width: "90%" }}>Password Generator</h1>
          </div>
          <div>
            <img src={password} style={styles.image}></img>
          </div>
        </div>
        <div style={{ display: "flex", height: "100vh", paddingLeft: "3vw", paddingRight: "1vw" }}>
          <div>
            <h1 style={{ width: "90%" }}>Restaurant Finder</h1>
          </div>
          <div>
            <img src={restaurant} style={styles.image}></img>
          </div>
        </div>
        <div style={{ display: "flex", height: "100vh", paddingLeft: "3vw", paddingRight: "1vw" }}>
          <div>
            <h1 style={{ width: "90%" }}>Appa's Landing</h1>
          </div>
          <div>
            <video style={{ width: "100%", height: "90vh" }} src={appaMov} controls width="1000"></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
