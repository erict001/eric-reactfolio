import React, { Component } from "react";
import city from "../images/assets/City.png"


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



class City extends Component {
    render() {
        return (
            <div class="mt-10 mb-12">
                <div id="card">
                    {/* <!-- container for all cards --> */}
                    <div >
                        {/* <!-- card --> */}
                        <div class="flex flex-row bg-black rounded-lg shadow-xl h-60 mt-4 w-full hover:bg-gray-600">
                            {/* <!-- media --> */}
                            <div class="h-auto w-1/3 md:w-1/3">
                                <img class="inset-0 h-full w-conver object-fill object-center invert" src={city} />
                            </div>
                            {/* <!-- content --> */}
                            <div class="w-2/3 pt-4 px-12 text-white flex flex-col">
                                <h1 class="font-semibold text-2xl leading-tight truncate">City Baseball</h1>
                                <h2 class="text-xl">Director of Operations, <br></br>Sports Performance Director</h2>
                                <h3>September 2013 - November 2018</h3>
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
