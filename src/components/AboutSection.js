import React, { Component } from 'react';

class AboutSection extends Component {
    render() {
        return (
            <div>
                <div style={{ height: "auto", width: "100vw", backgroundColor: "#d7c25e" }}>
                    <div class="flex flex-row justify-center content-center pb-6 ml-3 mr-3">
                        <div class="flex flex-row h-full w-full justify-around content-center pt-6">
                            <h1 class="text-3xl text-black w-1/3 flex md:justify-center content-center font-bold">UI/UX DESIGNER</h1>
                            <h1 class="text-3xl text-white w-1/3 flex md:justify-center font-bold">FULL STACK DEVELOPER</h1>
                            <h1 class="text-3xl text-black w-1/3 flex md:justify-center font-bold">BUSINESS ADMINISTRATOR</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutSection