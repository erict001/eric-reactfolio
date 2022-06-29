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




function About() {
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
      {/* Add media query to make the size smaller*/}
      <div style={{ height: "110vh" }}>
        <video style={{ width: "100%", height: "100vh" }} src={apolloFull} autoPlay muted loop width="1000"></video>
      </div>
      <div class="flex flex-col">
        <div class="lg:colums-2 md:columns-2 sm:columns-1 pt-20 pb-20 pl-20 w-100">
          <div class="lg:w-5/5 md:w-5/5">
            <img src={picture} style={{ marginLeft: "1rem", marginRight: "1rem", paddingRight: "1rem", height: "50rem", borderRadius: "1rem" }}></img>
          </div>
          <div class="flex flex-col lg:columns-1 md:columns-1 sm:columns-1 lg:w-5/5 md:w-5/5 sm:w-5/5 xs:mt-20 text-black">
            <div>
              <h1 class="lg:text-5xl md:text-4xl sm:text-4xl xs:text-4xl" style={{ fontFamily: "Zapfino", fontWeight: 900 }}>Hi I'm Eric Taylor!</h1>
            </div>
            <br></br>
            <br></br>
            <div>
              <h1 class="text-5xl pr-10 lg:w-4/5 md:4/5">
                I'm driven to help people and companies become their best selves through creative design, quality branding, and unparalleled customer service.
                <br />
                <br />
                A recent full stack web developer graduate from the University of Washington. Experienced business operations manager with a track record of driving multiple businesses to successful outcomes.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div style={{ display: "flex", justifyContent: "center", height: "14vh", width: "100vw", backgroundColor: "black", color: "white" }}>
        <h1 style={{ alignContent: "center", fontSize: "100px" }}>Projects</h1>
      </div>
      <hr></hr>
      <div style={{ color: "black" }}>
        <div>
          <div>
            <h1 class="flex justify-center text-5xl" style={{ width: "100%", fontFamily: "Zapfino", paddingTop: "10vh", fontWeight: 900 }}>Before Bootcamp:</h1>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div class="flex justify-center mb-20" >
            <div class="max-w-5xl rounded overflow-hidden shadow-lg mb-4">
              <img class="w-full" src={apollo} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Apollo Academy Basketball</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <a href="www.apolloacademyhoops.com" target="_blank" id="liveJeopardy"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button></a>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="flex justify-center" style={{ display: "flex", height: "100vh" }}>
        <div class="flex justify-center">
          <video style={{ width: "100%", height: "80vh" }} src={apolloMov} controls width="1000"></video>
        </div>
      </div> */}
        <div>
          <div class="flex content-center" style={{ height: "4rem" }}>
            <h1 class="flex justify-center text-5xl" style={{ width: "100%", fontFamily: "Zapfino", fontWeight: 900 }}>During Bootcamp:</h1>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div class="flex justify-center space-evenly center">
            <div class="lg:columns-2 md:columns-1 sm:columns-1">
              <div class="max-w-5xl rounded overflow-hidden shadow-lg mb-4">
                <img class="w-full" src={jeopardy} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="flex flex-row justify-between font-bold text-xl mb-2">
                    <h1>Inspirational Jeopardy</h1>
                    <h3 style={{ marginRight: "2rem" }}>Project Manager</h3>
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <a href="https://github.com/erict001/inspirational-jeopardy" target="_blank"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</button></a>
                  <a href="https://erict001.github.io/inspirational-jeopardy/" target="_blank" id="liveJeopardy"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button></a>
                </div>
              </div>
              <div class="max-w-5xl rounded overflow-hidden shadow-lg mb-4">
                <img class="w-full" src={password} alt="Password Generator" />
                <div class="px-6 py-4">
                  <div class="flex flex-row justify-between font-bold text-xl mb-2">
                    <h1>Password Generator</h1>
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <a href="https://github.com/erict001/Password-Generator" target="_blank" id="gitPassword"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</button></a>
                  <a href="https://erict001.github.io/Password-Generator/" target="_blank" id="livePlanner"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button></a>
                </div>
              </div>
              <div class="max-w-5xl rounded overflow-hidden shadow-lg mb-4">
                <img class="w-full" src={restaurant} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="flex flex-row justify-between font-bold text-xl mb-2">
                    <h1>Restaurant Finder</h1>
                    <h3 style={{ marginRight: "2rem" }}>Git Manager + FrontEnd Developer</h3>
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <a href="https://github.com/erict001/Restaurant-Finder" target="_blank" id="gitPlanner"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</button></a>
                  <a href="https://roogle-2022.herokuapp.com/" target="_blank" id="livePlanner"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button></a>
                </div>
              </div>
              <div class="max-w-5xl rounded overflow-hidden shadow-lg mb-4">
                <img class="w-full" src={apollo} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="flex flex-row justify-between font-bold text-xl mb-2">
                    <h1>Appa's Landing</h1>
                    <h3 style={{ marginRight: "2rem" }}>Lead Game Developer</h3>
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</button>
                  <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
