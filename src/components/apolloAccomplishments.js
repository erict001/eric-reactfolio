import React, { Component } from "react";
import Apollo from "../images/assets/ApolloB.png"
import CountUp from "react-countup"
import Nike from "../images/assets/Nike.png"
import kids from "../images/assets/kids.png"
import nikeAlternate from "../images/assets/nikeAlternate.png"
import APT from "../images/assets/APT.png"
import SPS from "../images/assets/SPS.png"
import Vice from "../images/assets/Vice.png"


class apolloAccomplishments extends Component {
    render() {
        return (
            < div class="container bg-black ">
                {/* <!-- card --> */}
                <div class="flex flex-col bg-black" style={{ width: "98.7vw" }}>
                    < div class="flex flex-row lg:flex-col lg:columns-2 md:columns-2 sm:columns-1 xs:columns-1 overflow-hidden
                    bg-black rounded-lg shadow-xl h-auto mt-4">
                        {/* <!-- media --> */}
                        <div class="h-max w-1/3 flex flex-col xl:columns-3 lg:columns-2 md:columns-2 sm:columns-1 xs:columns-1">
                            <div class="flex flex-row xl:flex-row lg:columns-2 md:columns-2 sm:columns-1 xs:flex-col xs:columns-1">
                                <div>
                                    <img class="inset-0 h-auto w-cover object-fill object-center" src={Apollo} />
                                </div>
                                <div class="flex flex-col content-center lg:columns-1 md:columns-1 sm:columns-1 xs:columns-1 md:px-4 xs:px-4">
                                    <h1 class="font-semibold text-6xl pt-4 md:text-3xl sm:text-xl xs:text-xl leading-tight text-white truncate">Apollo Basketball</h1>
                                    <h2 class="text-3xl md:text-3xl xs:text-xl text-white">Founder, <br></br>CEO</h2>
                                    <h3 class="text-white md:text-2xl xs:text-lg">November 2018 - February 2022</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!-- content --> */}
                        <div class="w-2/3 pt-4 px-12 text-white text-3xl flex flex-col">
                            <ul class="list-disc md:text-3xl xs:text-2xl">
                                <li class="pt-2"> Managed a group of 10 employees as well as over 130+ student-athletes and families. </li>
                                <li class="pt-2"> Responsible for all customer inquiries and questions, helping to improve functionality to meet organizational needs. </li>
                                <li class="pt-2"> Solved logistic and scheduling constraints while managing space, employee, and family availability. </li>
                                <li class="pt-2"> Built employee and client full training curriculums to ensure program quality. </li>
                                <li class="pt-2"> Created and generated fundraising and revenue reports, invoicing and collecting payments up to $300,000 annually while paying dues on schedule.  </li>
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
                                                <CountUp delay={2} duration={15} end={300000} />
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
                                <div class="flex flex-col h-full justify-between">
                                    <div class="flex flex-row md:justify-around xl:flex-row lg:columns-2 md:columns-2 sm:columns-1 xs:flex-col xs:columns-1 xs:justify-center">
                                        <div class="flex flex-col justify-center pt-16">
                                            <div class="h-240 scale-150 flex justify-center">
                                                <a href="https://nike.com"><img src={nikeAlternate}></img></a>
                                            </div>
                                            {/* <div class="text-2xl flex justify-center md:text-lg">
                                                <h1 >Nike</h1>
                                            </div> */}
                                        </div>
                                        <div class="flex flex-col justify-center pt-16">
                                            <div class="h-240 scale-150 flex justify-center">
                                                <a href="https://www.aptresilience.com"><img src={APT} ></img></a>
                                            </div>
                                            {/* <div class="text-2xl flex justify-center md:text-lg">
                                                <h1 >A.P.T Resilience </h1>
                                            </div> */}
                                        </div>
                                        <div class="flex flex-col justify-center pt-16">
                                            <div class="h-2/3 scale-150 flex justify-center">
                                                <a href="https://www.seattle.gov/parks"><img src={SPS} class="invert"></img></a>
                                            </div>
                                            {/* <div class="text-2xl flex justify-center md:text-lg">
                                                <h1 >City of Seattle Parks and Recreation </h1>
                                            </div> */}
                                        </div>
                                        <div class="flex flex-col justify-center">
                                            <div class="h-240 scale-150 flex justify-center">
                                                <a href="https://viceathletics.com"><img src={Vice} ></img></a>
                                            </div>
                                            {/* <div class="text-2xl flex justify-center md:text-lg">
                                                <h1 >Vice Athletics </h1>
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

export default apolloAccomplishments;
