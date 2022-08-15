import React, { Component } from 'react';
import Github from "../images/assets/Github.png"
import LinkedIn from "../images/assets/91030.png"
import Resume from "../images/assets/Resume.pdf"


const styles = {
    header: {
        display: "flex",
        listStyle: "none",
        justifyContent: "space-around",
        paddingTop: "2vh",
        paddingBottom: "2vh",
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
    },
    icons: {
        height: "30px",
        width: "30px",
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "start",
        marginLeft: "1rem",
    },
    color: {
        color: "black",
        // backgroundColor: "white"
        backgroundColor: "#F3F2F2"
    }
}

class AboutSection extends Component {
    render() {
        return (
            <div>
            <div style={{ display: "flex", height: "5rem", width: "100vw", backgroundColor: "black" }}>
                <div class="flex flex-row justify-start mt-3 mb-3 ml-3" >
                    <a href={"https://github.com/erict001"}><img class="invert" src={Github} style={styles.icons}></img></a>
                    <a href={"https://www.linkedin.com/in/eric-taylor-03181917a/"}><img class="scale-110" src={LinkedIn} style={styles.icons}></img></a>
                </div>
            </div>
            <div style={{height: "5rem", width: "100vw", backgroundColor: "#d7c25e" }}>
                <div class="flex flex-row justify-center content-center ml-3 mr-3">
                    <div class="flex flex-row h-full w-full justify-around content-center pt-6">
                        <h1 class="text-3xl text-black w-1/3 flex justify-center content-center font-bold">UI/UX DESIGNER</h1>
                        <h1 class="text-3xl text-white w-1/3 flex justify-center font-bold">FULL STACK DEVELOPER</h1>
                        <h1 class="text-3xl text-black w-1/3 flex justify-center font-bold">BUSINESS ADMINISTRATOR</h1>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default AboutSection