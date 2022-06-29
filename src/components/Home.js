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
        <section class="flex justify-center">
          <div style={styles.heading} class="flex content-center">
            <h1 class="flex justify-center">Full Stack Developer.</h1>
            <h1 class="flex justify-center">Designer.</h1>
            <h1 class="flex justify-center">Coach.</h1>
          </div>
        </section>
      </div>
      {/* Add media query to make the size smaller*/}
      <div style={{ height: "110vh" }}>
        <video style={{ width: "100vw", height: "100vh" }} src={apolloFull} autoPlay muted loop width="1000"></video>
      </div>
      <div style={{ display: "flex", height: "80vh", paddingLeft: "3vw" }}>
        <div class="w-2/5">
          <img src={picture} style={{ marginLeft: "1rem", marginRight: "1rem", height: "50rem", borderRadius: "1rem" }}></img>
        </div>
        <div class="w-3/5">
          <h1 class="lg:text-5xl md:text-3xl sm:text-3xl" style={{ fontFamily: "Zapfino", fontWeight: 900 }}>Hi I'm Eric Taylor!</h1>
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
      <div class="flex justify-center mb-20" >
        <div class="max-w-5xl rounded overflow-hidden shadow-lg mb-4">
          <img class="w-full" src={apollo} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>

      </div>
      {/* <div class="flex justify-center" style={{ display: "flex", height: "100vh" }}>
        <div class="flex justify-center">
          <video style={{ width: "100%", height: "80vh" }} src={apolloMov} controls width="1000"></video>
        </div>
      </div> */}
      <div>
        <div class= "flex content-center" style={{ height: "4rem"}}>
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
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
            <div class="max-w-5xl rounded overflow-hidden shadow-lg mb-4">
              <img class="w-full" src={password} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
            <div class="max-w-5xl rounded overflow-hidden shadow-lg mb-4">
              <img class="w-full" src={restaurant} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
            <div class="max-w-5xl rounded overflow-hidden shadow-lg mb-4">
              <img class="w-full" src={apollo} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          </div>
          {/* <div class="bg-cover w-1/2 group hover:opacity-75 flex justify-center items-center" style={{ height: "50vh", width: "45vw", backgroundImage: `url(${jeopardy})` }}>
            <button style={{ height: "80px", width: "300px", fontSize: "25px" }} class="hidden group-hover:block group-hover:bg-white group-hover:text-black-500">Github</button>
            <button style={{ height: "80px", width: "300px", fontSize: "25px" }} class="hidden group-hover:block group-hover:bg-white group-hover:text-black-500">Deployed Link</button>
          </div>
          <div class="bg-cover w-1/2 group hover:opacity-75 flex justify-center items-center" style={{ height: "50vh", width: "45vw", backgroundImage: `url(${password})` }}>
            <button style={{ height: "80px", width: "300px", fontSize: "25px" }} class="hidden group-hover:block group-hover:bg-white group-hover:text-black-500">Github</button>
            <button style={{ height: "80px", width: "300px", fontSize: "25px" }} class="hidden group-hover:block group-hover:bg-white group-hover:text-black-500">Deployed Link</button>
          </div>
          <div class="bg-cover w-1/2 group hover:opacity-75 flex justify-center items-center" style={{height: "50vh", width: "45vw",  backgroundImage: `url(${restaurant})` }}>
            <button style={{ height: "80px", width: "300px", fontSize: "25px" }} class="hidden group-hover:block group-hover:bg-white group-hover:text-black-500">Github</button>
            <button style={{ height: "80px", width: "300px", fontSize: "25px" }} class="hidden group-hover:block group-hover:bg-white group-hover:text-black-500">Deployed Link</button>
          </div>
          <div class="bg-cover w-1/2 group hover:opacity-75 flex justify-center items-center" style={{height: "50vh", width: "45vw",  backgroundImage: `url(${apollo})` }}>
            <button style={{ height: "80px", width: "300px", fontSize: "25px" }} class="hidden group-hover:block group-hover:bg-white group-hover:text-black-500">Github</button>
            <button style={{ height: "80px", width: "300px", fontSize: "25px" }} class="hidden group-hover:block group-hover:bg-white group-hover:text-black-500">Deployed Link</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
