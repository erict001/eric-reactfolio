import React, { Component } from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import appa from "../images/assets/appa.png"
import apollo from "../images/assets/apollo.png"
import laptop from "../images/assets/code.jpg"
import jeopardy from "../images/assets/Inspirational-Jeopardy.png"
import password from "../images/assets/Password.png"
import restaurant from "../images/assets/Restaurant.png"
import mojave from "../images/assets/mojave.png"
import united from "../images/assets/uwmqt.png"

class Portfolio extends Component {
  render() {
    return (
      <div style={{ height: "auto" }}>
        <div style={{ display: "flex", justifyContent: "center", height: "20rem", width: "100vw", color: "white", backgroundColor: "black" }}>
          <ParallaxProvider>
            <ParallaxBanner
              layers={[
                { image: laptop, speed: -20 },
                { image: '/static/banner-foreground.png', speed: -10 },
              ]}
              className="aspect-[2/1]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl text-white font-bold">How I can help you!</h1>
              </div>
            </ParallaxBanner>
          </ParallaxProvider>
          {/* <h1 style={{ alignContent: "center", fontSize: "100px" }}>Projects</h1> */}
        </div>
        <hr></hr>
        <div style={{ color: "black" }}>
          <div>
            <div>
              <h1 class="flex justify-center text-5xl text-black" style={{ width: "100%", fontFamily: "Zapfino", paddingTop: "10vh", fontWeight: 900 }}>Professional Projects:</h1>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div class="flex justify-center mb-20" >
              <div class="max-w-5xl rounded overflow-hidden shadow-2xl mb-4 border-solid border-2 border-black">
                <img class="w-full" src={apollo} alt="Apollo Academy website" />
                <div class="px-6 py-4">
                  <div class="flex flex-row justify-between font-bold text-xl mb-4">
                    <h1>Apollo Academy Basketball</h1>
                    <h3 style={{ marginLeft: "2rem" }}>FrontEnd Engineer <br/> UI/UX Designer</h3>
                  </div>
                  <p class="text-gray-700 text-base">
                    This website was built to support my former basketball company, Apollo Academy Basketball. This application was built using Elementor and deployed to Wordpress. I loved the creativity and freedom that coding provides and sparked my interest in software development.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <a href="https://www.apolloacademyhoops.com" target="_blank" id="apolloacademyhoops" rel="noreferrer"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button></a>
                </div>
              </div>
            </div>
            <div class="flex justify-center mb-20" >
              <div class="max-w-5xl rounded overflow-hidden shadow-2xl mb-4 border-solid border-2 border-black">
                <img class="w-full" src={mojave} alt="Apollo Academy website" />
                <div class="px-6 py-4">
                  <div class="flex flex-row justify-between font-bold text-xl mb-4">
                    <h1>Mojave Desert Land Trust</h1>
                    <h3 style={{ marginLeft: "2rem" }}>FrontEnd Engineer</h3>
                  </div>
                  <p class="text-gray-700 text-base">
                    This website was built to help raise awareness and increase financial donations to support the Mojave Desert Land Trust. I built custom CSS into the Squarespace platform to generate custom features throughout the website. 
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <a href="https://www.mdlt.org" target="_blank" id="apolloacademyhoops" rel="noreferrer"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button></a>
                </div>
              </div>
            </div>
            <div class="flex justify-center mb-20" >
              <div class="max-w-5xl rounded overflow-hidden shadow-2xl mb-4 border-solid border-2 border-black">
                <img class="w-full" src={united} alt="Apollo Academy website" />
                <div class="px-6 py-4">
                  <div class="flex flex-row justify-between font-bold text-xl mb-4">
                    <h1>United Way of Marquette County</h1>
                    <h3 style={{ marginLeft: "2rem" }}>FrontEnd Engineer <br/> UI/UX Designer</h3>
                  </div>
                  <p class="text-gray-700 text-base">
                    This website was built to help increase web traffic and awarenesss for the United Way of Marquette County. I built themes and blocks into the Wordpress platform to generate custom features throughout the website. 
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <a href="https://www.mdlt.org" target="_blank" id="apolloacademyhoops" rel="noreferrer"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button></a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex content-center" style={{ height: "4rem" }}>
              <h1 class="flex justify-center text-5xl text-black" style={{ width: "100%", fontFamily: "Zapfino", fontWeight: 900 }}>Full Stack Projects:</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div class="flex flex-wrap justify-center space-evenly center">
              <div class="xl:columns-4 lg:columns-1 md:columns-1 sm:columns-1 xl:ml-4">
                <div class="max-w-5xl rounded overflow-hidden shadow-2xl mb-10 border-solid border-2 border-black">
                  <img class="w-full" src={jeopardy} alt="Inspirational Jeopardy" />
                  <div class="px-6 py-4">
                    <div class="flex flex-row justify-between font-bold text-xl mb-4">
                      <h1>Inspirational Jeopardy</h1>
                      <h3 class="ml-1 sm:ml-0" >Project Manager<br></br>FrontEnd Engineer</h3>
                    </div>
                    <p class="text-gray-700 text-base">
                      We created a jeopardy style game, which displays like a jeopardy game board, that fetches past Jeopardy questions and answers to generate categories with progressively harder questions corresponding to the category and difficulty. If the user answers correctly, the user's score increases with the corresponding score amount. If the user guesses incorrectly, the user receives an inspirational quote.
                      <br></br>
                      <br></br>
                      The Inspirational Jeopardy API fetches data from the jService API to gather questions from the past 30 years of Jeopardy questions, answers, and their corresponding categories. For incorrect answers, we fetched the inspirational quotes from Zen Quotes API. My role as project manager was to provide guidance and leadership to keep our team pointed in the same direction and appoint teammates to positions where they would be the most successful.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <a href="https://github.com/erict001/inspirational-jeopardy" target="_blank" rel="noreferrer"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</button></a>
                    <a href="https://erict001.github.io/inspirational-jeopardy/" target="_blank" id="liveJeopardy" rel="noreferrer"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button></a>
                    <button class="inline-block bg-yellow rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2">People's Choice Award</button>
                  </div>
                </div>
                <div class="max-w-5xl rounded overflow-hidden shadow-2xl mb-4 border-solid border-2 border-black">
                  <img class="w-full" src={appa} alt="Appa's Landing" />
                  <div class="px-6 py-4">
                    <div class="flex flex-row justify-between font-bold text-xl mb-4">
                      <h1>Appa's Landing</h1>
                      <h3 style={{ marginLeft: "2rem" }}>Lead Game Engineer</h3>
                    </div>
                    <p class="text-gray-700 text-base">
                      We created a 2D scroller game API that allows the user to login and choose from a list of characters from the Nickelodeon show "Avatar the Last Airbender". The user then gets to play with their selected character and weave their way through 3 levels of increasing difficulty before reachign the boss level. Each level is themed with a new obstacle in addition to enemies shooting at the user's player.
                      <br></br>
                      <br></br>
                      The Appa's Landing API is built using React, Node.js, Express, and the npm package Matter.js to handle collisions and provide a physics game engine. I was responsible for adding the majority of the game functionality using React and Matter.js </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <a href="https://github.com/erict001/project-3" target="_blank" id="gitPlanner" rel="noreferrer"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</button></a>
                    <a href="https://mysterious-anchorage-31370.herokuapp.com/" target="_blank" id="livePlanner" rel="noreferrer"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button></a>
                    <button class="inline-block bg-yellow rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">People's Choice Award</button>
                  </div>
                </div>
                <div class="max-w-5xl rounded overflow-hidden shadow-2xl mr-4 border-solid border-2 border-black">
                  <img class="w-full" src={restaurant} alt="Restaurant Finder" />
                  <div class="px-6 py-4">
                    <div class="flex flex-row justify-between font-bold text-xl mb-4">
                      <h1>Restaurant Finder</h1>
                      <h3 style={{ marginLeft: "1rem" }}>Git Manager <br></br>FrontEnd Engineer</h3>
                    </div>
                    <p class="text-gray-700 text-base">
                      We created an app that allows the user to generate a restaurant search based on search parameters then save their favorite restaurants to view the menu, call the restaurant, and make a reservation.
                      <br></br>
                      <br></br>
                      The Restaurant Finder app fetches data from the Yelp Fusion API to generate restaurant searches where the user saves the restaurant into their database. When the user logs in, the database displays their favorite restaurants. The user will have quicker access to their favorite restaurants to view changes and make a reservation.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <a href="https://github.com/erict001/Restaurant-Finder" target="_blank" id="gitPlanner" rel="noreferrer"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</button></a>
                    <a href="https://roogle-2022.herokuapp.com/" target="_blank" id="livePlanner" rel="noreferrer"><button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Deployed Link</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default Portfolio;
