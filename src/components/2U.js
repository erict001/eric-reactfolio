import React, { Component } from "react";
import uw from "../images/assets/uw-logo.webp"



class TWOU extends Component {
    render() {
        return (
            <div >
                <div id="card">
                    {/* <!-- container for all cards --> */}
                    <div class="container">
                        {/* <!-- card --> */}
                        <div class="flex flex-col md:flex-row overflow-hidden
                                        bg-black rounded-lg shadow-xl h-60 w-full hover:bg-gray-600">
                            {/* <!-- media --> */}
                            <div class="w-1/3 md:w-1/3">
                                <img class="h-60 object-center object-contain w-auto invert scale-150" src={uw} alt="university of washington"/>
                            </div>
                            {/* <!-- content --> */}
                            <div class="w-2/3 pt-4 px-12 text-white flex flex-col">
                                <h1 class="font-semibold text-2xl leading-tight truncate pt-4">University of Washington</h1>
                                <h2 class="text-xl">Full Stack Software Developer<br></br>Teaching Assistant</h2>
                                <h3>August 2022 - Present</h3>
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

export default TWOU;