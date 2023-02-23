import React, { Component } from "react";
import city from "../images/assets/City.png"



class City extends Component {
    render() {
        return (
            <div>
                <div id="card">
                    {/* <!-- container for all cards --> */}
                    <div >
                        {/* <!-- card --> */}
                        <div class="flex flex-row bg-black rounded-lg shadow-xl h-60 w-full hover:bg-gray-600">
                            {/* <!-- media --> */}
                            <div class="h-auto w-1/3 md:w-1/3">
                                <img class="inset-0 h-full w-conver object-fill object-center invert" src={city} alt="city baseball"/>
                            </div>
                            {/* <!-- content --> */}
                            <div class="w-2/3 pt-4 px-12 text-white flex flex-col">
                                <h1 class="font-semibold text-2xl leading-tight truncate pt-4">City Baseball</h1>
                                <h2 class="text-xl">Director of Operations, <br></br>Sports Performance Director</h2>
                                <h3>September 2014 - March 2017</h3>
                                <br></br>
                                <button class="btn bg-white text-black">Learn More...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default City;
