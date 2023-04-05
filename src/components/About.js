import React, { Component } from 'react';
import picture from "../images/assets/picture.png"

const styles = {
  margin: {
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "40%"
  },
  text: {
    color: "white",
    textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
    fontFamily: "Impact", 
    letterSpacing: ".5rem"
  }
}


class About extends Component {
  render() {
    return (
      <div>
        <hr></hr>
        <div class="flex flex-col">
          <div class="xl:columns-2 lg:flex lg:flex-col md:columns-1 sm:columns-1 xs:columns-1 h-min pt-20 pb-20 lg:pl-20 pr-20 w-100">
            {/* <div class="lg:columns-1 md:columns-1 lg:w-4/5 md:w-4/5 sm:w-4/5 ">
              <img src={picture} class="border-2 rounded-xl" style={{ marginLeft: "8rem", marginRight: "1rem", height: "50rem", borderRadius: "80rem" }} alt="Eric Taylor"></img>
            </div> */}
            <div class="flex lg:columns-1 md:columns-1 sm:columns-1 xs:columns-1 lg:w-5/5 md:w-5/5 sm:w-5/5 xs:mt-20 xs:w-5/5 text-black">
              <br></br>
              <br></br>
              <div>
                <h1 class="xl:text-4.2xl lg:text-5xl md:text-3xl sm:text-5xl xs:text-3xl pr-10 lg:w-4/5 md:4/5 xs:ml-20">
                  I'm driven to help people and companies become their best selves through creative design, quality branding, and unparalleled customer service.
                  <br />
                  <br />
                  Knowledgeable in the entirety of the software development life cycle; bringing forth expertise in design, installation, testing and maintenance of various software applications. 
                  <br/>
                  <br/>
                  I am an effective self starter, able to manage multiple projects simultaneously, as well as a collaborative and productive team member.
                </h1>
                <br></br>
                {/* <button class="w-1/4 h-10 bg-black text-white">Education</button>
              <button class="w-1/4 h-10 bg-black text-white ml-1">Technologies</button>
              <button class="w-1/4 h-10 bg-black text-white ml-1">Career</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
