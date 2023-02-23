import React, { Component } from "react";
import Apollo from "../images/assets/uw-logo.png"
import CountUp from "react-countup"
import kids from "../images/assets/kids.png"
import Tallus from "../images/assets/Tallus.png"
import APT from "../images/assets/APT.png"
import SPS from "../images/assets/BGCKC.png"
import sportsStadium from "../images/assets/sportsStadium.png"
import threeD from "../images/assets/threeD.png"

class washingtonAccomplishments extends Component {
    render() {
        return (
            < div class="container bg-black ">
                {/* <!-- card --> */}
                <div class="flex flex-col bg-black" style={{ width: "98.7vw" }}>
                    < div class="flex flex-row lg:flex-col lg:columns-2 md:columns-2 sm:columns-1 xs:columns-1 overflow-hidden
                    bg-black rounded-lg shadow-xl h-auto mt-4 mr-1">
                        {/* <!-- media --> */}
                        <div class="h-max w-1/3 flex flex-col xl:columns-3 lg:columns-2 md:columns-2 sm:columns-1 xs:columns-1">
                            <div class="flex flex-row xl:flex-row lg:columns-2 md:columns-2 sm:columns-1 xs:flex-col xs:columns-1">
                                <div>
                                    <img class="mt-8 inset-0 h-auto w-cover scale-150 object-fill object-center invert" src={Apollo} alt="Apollo Academy Basketball"/>
                                </div>
                                <div class="flex flex-col content-center lg:columns-1 md:columns-1 sm:columns-1 xs:columns-1 md:px-4 xs:px-4">
                                    <h1 class="font-semibold text-6xl pt-4 md:text-3xl sm:text-xl xs:text-xl leading-tight text-white truncate">University of Washington</h1>
                                    <h2 class="text-3xl md:text-3xl xs:text-xl text-white">Full Stack Software Developer <br></br>Teaching Assistant</h2>
                                    <h3 class="text-white md:text-2xl xs:text-lg">August 2022 - Present</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!-- content --> */}
                        <div class="w-2/3 pt-4 px-12 text-white text-3xl flex flex-col">
                            <ul class="list-disc md:text-3xl xs:text-2xl">
                                <li class="pt-2"> Successfully built our brand identity in the Seattle area focusing on social media and traditional marketing efforts to help grow our program to be the second largest youth sports program in Seattle, grossing over $180,000 in our first year with a 10% increase in our second fiscal year.  </li>
                                <li class="pt-2"> Operated areas of the company which include: communications, short-term and long-term planning, project management, financial planning and budgeting, community outreach strategy, and customer relationships. </li>
                                <li class="pt-2"> Scheduled, programmed, and managed our entire program’s holistic curriculum along with additional community programming. </li>
                            </ul>
                        </div>
                    </div >
                    <div class="text-white mb-12 ml-10 mr-10 ">
                        <div class="flex flex-col">
                            <div>
                                <div class="mt-8 mb-8 ">
                                    <h1 class="text-3xl">Accomplishments:</h1>
                                    <hr></hr>
                                </div>
                                <div class="flex flex-col h-full">
                                    <div class="flex flex-row md:justify-around xl:flex-row lg:columns-2 md:columns-2 sm:columns-1 xs:flex-col xs:columns-1 xs:justify-center">
                                        <div class="text-7xl pt-14">
                                            <div class="flex justify-center pt-10 text-green md:text-7xl">
                                                <CountUp delay={2} duration={10} end={180000} />
                                            </div>
                                            <div class="pt-32 flex justify-center">
                                                <h1 class="text-2xl md:text-3xl md:px-2">Built the company from scratch to multiple  <br></br> 6 figures in annual revenue in under 2 years.</h1>
                                            </div>
                                        </div>
                                        <div class="h-full">
                                            <div class="flex justify-center pt-6">
                                                <img src={sportsStadium} class="scale-150 animate-in zoom-in-0 duration-1000"></img>
                                            </div>
                                            <div class="flex justify-center pt-12">
                                                <h1 class="text-2xl md:text-3xl md:px-2">Built and pitched an all-inclusive sports complex, <br></br> which ultimately raised over $800,000 in seed money.</h1>
                                            </div>
                                        </div>
                                        <div class="h-1/2">
                                            <div class="flex justify-center h-72">
                                                <img src={kids} class="scale-150 animate-bounce "></img>
                                            </div>
                                            <div class="flex justify-center">
                                                <h1 class="text-2xl md:text-3xl md:px-2">Created a very highly regarded, positive culture <br></br>around helping kids reach their maximum <br></br>potential athletically, academically, and socially.</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex flex-row justify-center pt-24 animate-in slide-in-from-top duration-700 md:text-4xl">
                                                <h1 class="text-8xl">3</h1>
                                                <h1 class="text-3xl">rd</h1>
                                            </div>
                                            <div class="pt-24">
                                                <h1 class="text-2xl md:text-3xl md:px-2 flex justify-center">Partnered with industry leaders across many <br></br>different business organizations within Seattle.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-white mb-12 ml-10 mr-10">
                        <div class="flex flex-col">
                            <div >
                                <div class="mb-8">
                                    <h1 class="text-3xl">Partnerships:</h1>
                                    <hr></hr>
                                </div>
                                <div class="flex flex-col h-full justify-between">
                                    <div class="flex flex-row md:justify-around xl:flex-row lg:columns-2 md:columns-2 sm:columns-1 xs:flex-col xs:columns-1 xs:justify-center">
                                        <div class="flex flex-col justify-center pt-16">
                                            <div class="h-240 scale-150 flex justify-center">
                                                <a href="https://talluscapital.com"><img src={Tallus}></img></a>
                                            </div>
                                        </div>
                                        <div class="flex flex-col justify-center pt-16">
                                            <div class="h-240 scale-150 flex justify-center">
                                            <a href="https://www.aptresilience.com"><img src={APT} ></img></a>
                                            </div>
                                        </div>
                                        <div class="flex flex-col justify-center pt-24">
                                            <a href="https://positiveplace.org"><div class="h-40 flex justify-center">
                                                <img src={SPS} class="invert"></img>
                                            </div></a>
                                            {/* <div class="text-2xl flex justify-center md:text-lg">
                                                <a href="https://positiveplace.org"><h1 >Boys and Girls Club of King County </h1></a>
                                            </div> */}
                                        </div>
                                        <div class="flex flex-col justify-center pt-10">
                                            <div class="h-240 scale-75 flex justify-center">
                                                <a href="https://viceathletics.com"><img src={threeD}></img></a>
                                            </div>
                                            {/* <div class="text-2xl flex justify-center md:text-lg">
                                                <a href="https://viceathletics.com"><h1 >3D Total Health </h1></a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
};

export default washingtonAccomplishments;
