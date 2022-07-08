import React, { Component } from "react";
import ApolloB from "../images/assets/ApolloB.png"


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



class Apollo extends Component {
    render() {
        return (
            <div class="mt-10 mb-12">
                <div id="card">
                    {/* <!-- container for all cards --> */}
                    <div class="container" >
                        {/* <!-- card --> */}
                        <div class="flex flex-col md:flex-row overflow-hidden
                                        bg-black rounded-lg shadow-xl h-60 mt-4 w-full mx-2 hover:bg-gray-600">
                            {/* <!-- media --> */}
                            <div class="h-auto w-1/3 md:w-1/2">
                                <img class="inset-0 h-40 w-fill object-cover justify-center mt-7 object-center" src={ApolloB} />
                            </div>
                            {/* <!-- content --> */}
                            <div class="w-2/3 pt-4 px-12 text-white flex flex-col">
                                <h1 class="font-semibold text-2xl leading-tight truncate">Apollo Basketball</h1>
                                <h2 class="text-xl">Founder, <br></br>CEO</h2>
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

export default Apollo;