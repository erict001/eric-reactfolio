import React, { Component } from 'react';

class AboutSection extends Component {
    render() {
        return (
            <div>
                <div style={{ height: "auto", width: "100vw", backgroundColor: "#d7c25e" }}>
                    <div class="flex flex-row justify-center content-center pb-6 ml-3 mr-3">
                        <div class="flex md:flex-row justify-center h-full w-full justify-around content-center pt-6 xs:flex-col">
                            <h1 class="text-3xl text-black md:w-1/3 flex md:justify-center font-bold xs:w-screen xs:justify-center">UI/UX DESIGNER</h1>
                            <h1 class="text-3xl text-white md:w-1/3 flex md:justify-center font-bold xs:w-screen xs:justify-center">FULL STACK DEVELOPER</h1>
                            <h1 class="text-3xl text-black md:w-1/3 flex md:justify-center font-bold xs:w-screen xs:justify-center">BUSINESS ADMINISTRATOR</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutSection