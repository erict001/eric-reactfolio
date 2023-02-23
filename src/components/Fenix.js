import React, { Component } from "react";
import fenix from "../images/assets/Fenix.png"


class Fenix extends Component {
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
                            <div class="w-3/4 md:w-1/2">
                                <img class="h-60 w-fill object-center object-cover invert scale-150" src={fenix} />
                            </div>
                            {/* <!-- content --> */}
                            <div class="w-2/3 pt-4 px-12 text-white flex flex-col">
                                <h1 class="font-semibold text-2xl leading-tight truncate pt-4">Fenix Basketball</h1>
                                <h2 class="text-xl">Co-Founder, <br></br>Vice President</h2>
                                <h3>March 2016 - November 2018</h3>
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

export default Fenix;
