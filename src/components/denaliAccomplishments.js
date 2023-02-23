import React, { Component } from "react";
import Apollo from "../images/assets/ApolloB.png"
import CountUp from "react-countup"


class apolloAccomplishments extends Component {
    render() {
        return (
            < div class="container mx-10 bg-black ">
                {/* <!-- card --> */}
                <div class="flex flex-col bg-black" style={{ width: "97.2vw" }}>
                    < div class="flex flex-row lg:flex-col lg: columns-1 overflow-hidden
                    bg-black rounded-lg shadow-xl h-auto mt-4 mr-1">
                        {/* <!-- media --> */}
                        <div class="h-max w-1/3 flex flex-row">
                            <img class="inset-0 h-auto w-conver object-fill object-center" src={Apollo} />
                            <div class="flex flex-col content-center">
                                <h1 class="font-semibold text-4xl leading-tight text-white truncate">Apollo Basketball</h1>
                                <h2 class="text-3xl text-white">Founder, <br></br>CEO</h2>
                                <h3 class="text-white">November 2018 - February 2022</h3>
                            </div>
                        </div>
                        {/* <!-- content --> */}
                        <div class="w-2/3 pt-4 px-12 text-white text-3xl flex flex-col">
                            <ul class="list-disc">
                                <li class="pt-2"> Manages a group of 10 employees as well as over 130+ student-athletes and families. </li>
                                <li class="pt-2"> Responsible for all customer inquiries and questions, helping to improve functionality to meet organizational needs. </li>
                                <li class="pt-2"> Solves logistic and scheduling constraints while managing space, employee, and family availability. </li>
                                <li class="pt-2"> Built employee and client full training curriculums to ensure program quality. </li>
                                <li class="pt-2"> Created and generated fundraising and revenue reports, invoicing and collecting payments up to $300,000 annually while paying dues on schedule.  </li>
                            </ul>
                        </div>
                    </div >
                    <div class="text-white mb-12 ml-10 mr-10">
                        <div class="flex flex-col">
                            <div >
                                <div class="mt-8 mb-8 ">
                                    <h1 class="underline text-3xl">Accomplishments:</h1>
                                </div>
                                <div class="flex flex-row" style={{ justifyContent: "space-between" }}>
                                    <div class="text-6xl">
                                        <CountUp delay={2} duration={10} end={230000} />
                                        <h1 class="text-2xl">Built the company from scratch to multiple  <br></br> 6 figures in annual revenue in under 2 years.</h1>
                                    </div>
                                    <div>
                                        <h1 class="text-2xl">Partnered with the world's largest <br></br> sporting goods company in my 2nd year.</h1>
                                    </div>
                                    <h1 class="text-2xl">Created a very highly regarded, positive culture <br></br>around helping kids reach their maximum <br></br>potential athletically, academically, and socially.</h1>
                                    <h1 class="text-2xl">Built Seattle's 3rd largest basketball <br></br>company in under 2 years.</h1>
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
                                <div class="flex flex-row" style={{ justifyContent: "space-between" }}>
                                    <h1 class="text-3xl">Nike</h1>
                                    <h1 class="text-3xl">APT Resilience Training</h1>
                                    <h1 class="text-3xl">City of Seattle Parks and Recreation </h1>
                                    <h1 class="text-3xl">Vice Athletics</h1>
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
