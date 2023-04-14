import React from 'react';

function AboutSection() {

    const styles = {
        headers: { height: "auto", width: "100vw", backgroundColor: "#d7c25e" }
    }

    return (
        <div>
            <div style={styles.headers}>
                <div class="flex flex-row justify-center content-center pb-6 ml-3 mr-3">
                    <div class="flex md:flex-row justify-center h-full w-full justify-around content-center pt-6 xs:flex-col">
                        <h1 class="text-2xl text-black md:w-1/3 flex md:justify-center font-bold xs:w-screen xs:justify-center">UI/UX DESIGNER</h1>
                        <h1 class="text-2xl text-white md:w-1/3 flex md:justify-center font-bold xs:w-screen xs:justify-center">FULL STACK DEVELOPER</h1>
                        <h1 class="text-2xl text-black md:w-1/3 flex md:justify-center font-bold xs:w-screen xs:justify-center">BUSINESS ADMINISTRATOR</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSection