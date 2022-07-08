import React, { Component } from "react";
import fenix from "../images/assets/Fenix.png"


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



class Fenix extends Component {
    render() {
        return (
            <div class="pt-6 pb-12">
                <div id="card">
                    {/* <!-- container for all cards --> */}
                    <div class="container w-96 mx-auto">
                        {/* <!-- card --> */}
                        <div class="flex flex-col md:flex-row overflow-hidden
                                        bg-black rounded-lg shadow-xl h-60 mt-4 w-max mx-2 hover:bg-gray-600">
                            {/* <!-- media --> */}
                            <div class="w-2/3 md:w-1/2">
                                <img class="h-60 w-fill object-center object-cover invert" src={fenix} />
                            </div>
                            {/* <!-- content --> */}
                            <div class="w-2/3 pt-4 px-6 text-white flex flex-col">
                                <h1 class="font-semibold text-2xl leading-tight truncate">Fenix Basketball</h1>
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
