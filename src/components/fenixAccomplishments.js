import React, { Component } from "react";
import Apollo from "../images/assets/Fenix.png"
import CountUp from "react-countup"
import Nike from "../images/assets/Nike.png"
import kids from "../images/assets/kids.png"
import nikeAlternate from "../images/assets/nikeAlternate.png"
import APT from "../images/assets/APT.png"
import SPS from "../images/assets/SPS.png"
import Vice from "../images/assets/Vice.png"

const styles = {
    header: {
        display: "flex",
        flexDirection: "column",
        listStyle: "none",
        justifyContent: "space-around",
    },
    label: {
        width: "30rem",
    }
}



class fenixAccomplishments extends Component {
    render() {
        return (
            < div class="container mx-10 xs:mx-4 bg-black ">
                {/* <!-- card --> */}
                <div class="flex flex-col bg-black" style={{ width: "97.2vw" }}>
                    < div class="flex flex-row lg:flex-col lg:columns-2 md:columns-2 sm:columns-1 xs:columns-1 overflow-hidden
                    bg-black rounded-lg shadow-xl h-auto mt-4 mr-1">
                        {/* <!-- media --> */}
                        <div class="h-max w-1/3 flex flex-col xl:columns-3 lg:columns-2 md:columns-2 sm:columns-1 xs:columns-1">
                            <div class="flex flex-row xl:flex-row lg:columns-2 md:columns-2 sm:columns-1 xs:flex-col xs:columns-1">
                                <div>
                                    <img class="inset-0 h-auto w-conver object-fill object-center invert" src={Apollo} />
                                </div>
                                <div class="flex flex-col content-center lg:columns-1 md:columns-1 sm:columns-1 xs:columns-1 md:px-4 xs:px-4">
                                    <h1 class="font-semibold text-6xl pt-4 md:text-3xl sm:text-xl xs:text-xl leading-tight text-white truncate">Fenix Basketball</h1>
                                    <h2 class="text-3xl md:text-3xl xs:text-xl text-white">Co-Founder, <br></br>CEO</h2>
                                    <h3 class="text-white md:text-2xl xs:text-lg">November 2018 - February 2022</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!-- content --> */}
                        <div class="w-2/3 pt-4 px-12 text-white text-3xl flex flex-col">
                            <ul class="list-disc md:text-3xl xs:text-2xl">
                                <li class="pt-2"> Successfully built our brand identity in the Seattle area focusing on social media and traditional marketing efforts to help grow our program to be the second largest youth sports program in Seattle, grossing over $250,000 in our first year with a 10% increase in our second.  </li>
                                <li class="pt-2"> Operated areas of the company which include: communications, short-term and long-term planning, project management, financial planning and budgeting, community outreach strategy, and customer relationships. </li>
                                <li class="pt-2"> Scheduled, programmed, and managed our entire program’s holistic curriculum along with additional community programming. </li>
                                <li class="pt-2"> Built and pitched a large-scale youth sports complex ultimately raising over $800,000</li>
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
                                    <div class="flex flex-row justify-around xl:flex-row lg:columns-2 md:columns-2 sm:columns-1 xs:flex-col xs:columns-1 xs:justify-center">
                                        <div class="text-7xl pt-14">
                                            <div class="flex justify-center pt-10 md:text-7xl">
                                                <CountUp delay={2} duration={10} end={150000} />
                                            </div>
                                            <div class="pt-32 flex justify-center">
                                                <h1 class="text-2xl md:text-3xl md:px-2">Built the company from scratch to multiple  <br></br> 6 figures in annual revenue in under 2 years.</h1>
                                            </div>
                                        </div>
                                        <div class="h-full">
                                            <div class="flex justify-center pt-16">
                                                <img src={Nike} class="scale-150 animate-in zoom-in-0 duration-1000"></img>
                                            </div>
                                            <div class="flex justify-center pt-20">
                                                <h1 class="text-2xl md:text-3xl md:px-2">Partnered with the world's largest <br></br> sporting goods company in my 2nd year.</h1>
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
                                                <h1 class="text-2xl md:text-3xl md:px-2 flex justify-center">Built Seattle's 3rd largest basketball <br></br>company in under 2 years.</h1>
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
                                <div class="flex flex-col h-full">
                                    <div class="flex flex-row justify-around xl:flex-row lg:columns-2 md:columns-2 sm:columns-1 xs:flex-col xs:columns-1 xs:justify-center">
                                    <div class="h-240 scale-150 flex justify-center">
                                                <img src={nikeAlternate} ></img>
                                            </div>
                                            <div class="text-2xl flex justify-center md:text-lg">
                                                <h1 >Nike</h1>
                                            </div>
                                        <div class="h-240 scale-150 flex justify-center">
                                                <img src={APT} ></img>
                                            </div>
                                            <div class="text-2xl flex justify-center md:text-lg">
                                                <h1 >A.P.T. Resilience</h1>
                                            </div>
                                        <div class="flex flex-col justify-center pt-16">
                                        <div class="h-240 scale-150 flex justify-center">
                                                <img src={SPS} class="invert"></img>
                                            </div>
                                            <div class="text-2xl flex justify-center md:text-lg">
                                                <h1 >City of Seattle Parks and Recreation </h1>
                                            </div>
                                        </div>
                                        <div class="flex flex-col justify-center">
                                            <div class="h-240 scale-150 flex justify-center">
                                                <img src={Vice} ></img>
                                            </div>
                                            <div class="text-2xl flex justify-center md:text-lg">
                                                <h1 >Vice Athletics </h1>
                                            </div>
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

export default fenixAccomplishments;
