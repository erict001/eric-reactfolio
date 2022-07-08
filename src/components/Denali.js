import React, { Component } from "react";
import denali from "../images/assets/Denali.png"


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



class Denali extends Component {
    render() {
        return (
            <div class="mt-10 mb-12">
                <div id="card">
                    {/* <!-- container for all cards --> */}
                    <div>
                        {/* <!-- card --> */}
                        <div class="flex justify-center
                                        bg-black rounded-lg shadow-xl h-60 mt-4 w-full hover:bg-gray-600">
                            {/* <!-- media --> */}
                            <div class="h-auto w-3/4 md:w-3/4">
                                <img class="inset-0 h-40 w-fill object-cover justify-center mt-7 object-center" src={denali} />
                            </div>
                            {/* <!-- content --> */}
                            <div class="w-2/3 pt-4 text-white flex flex-col content-center">
                                <h1 class="font-semibold text-2xl leading-tight truncate">Denali Fitness</h1>
                                <h2 class="text-xl">Personal Trainer, <br></br>Front Desk Associate</h2>
                                <h3>September 2013 - November 2018</h3>
                                <br></br>
                                <button class="btn w-max pr-5 pl-5 bg-white text-black">Learn More...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Denali;