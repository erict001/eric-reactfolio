import React, { Component } from 'react';
import Github from "../images/assets/Github.webp"
import LinkedIn from "../images/assets/91030.webp"
import Resume from "../images/assets/Resume.pdf"


const styles = {
    rootStyle: {
        height: '100vh',
        color: "white",
    },
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

class Icons extends Component {
    render() {
        return (
            <div style={{ display: "flex", height: "auto", width: "100vw", backgroundColor: "#d7c25e" }}>
                <div class="flex flex-row justify-start mt-3 mb-3 ml-3" >
                    <a href={"https://github.com/erict001"}><img class="invert" src={Github} style={styles.icons} alt="github icon"></img></a>
                    <a href={"https://www.linkedin.com/in/eric-taylor-03181917a/"}><img class="scale-110" src={LinkedIn} style={styles.icons} alt="linkedin icon"></img></a>
                </div>
                <div class="flex w-full justify-end content-center">
                <a href={Resume} download><button class="text-xl font-bold uppercase text-black py-3 pl-12 pr-12">Download My Resume</button></a>
                </div>
            </div>
        )
    }
}

export default Icons