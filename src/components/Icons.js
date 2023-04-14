import React from 'react';
import Github from "../images/assets/Github.webp"
import LinkedIn from "../images/assets/91030.webp"
import Logo from "../images/assets/logos.webp"
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
    logo: {
        height: "55px",
        width: "55px",
        display: "flex",
        justifyContent: "start",
        marginTop: "1px",
        marginLeft: "1rem",
    },
    color: {
        color: "black",
        // backgroundColor: "white"
        backgroundColor: "#F3F2F2"
    }
}

function Icons() {
    return (
        <div style={{ display: "flex", height: "50px", width: "100vw", backgroundColor: "#d7c25e" }}>
            <div class="flex flex-row justify-start mb-3 ml-3" >
                <a href={"/"}><img class="invert" src={Logo} style={styles.logo} alt="eric taylor logo"></img></a>
                <a href={"https://github.com/erict001"}><img class="invert  mt-3" src={Github} style={styles.icons} alt="github icon"></img></a>
                <a href={"https://www.linkedin.com/in/eric-taylor-03181917a/"}><img class="scale-110  mt-3" src={LinkedIn} style={styles.icons} alt="linkedin icon"></img></a>
            </div>
            <div class="flex w-full justify-end content-center">
                <a href={Resume} download><button class="text-xl font-bold uppercase text-black py-3 pl-12 pr-12">Download My Resume</button></a>
            </div>
        </div>
    )
}

export default Icons