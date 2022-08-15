import React, { Component } from 'react';
import Github from "../images/assets/Github.png"
import LinkedIn from "../images/assets/91030.png"
import Resume from "../images/assets/Resume.pdf"
import css from "../images/assets/css.jpg"
import html from "../images/assets/html.png"
import node from "../images/assets/node.jpg"
import express from "../images/assets/express.png"
import sql from "../images/assets/sql.png"
import react from "../images/assets/react.png"
import js from "../images/assets/js.png"

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
    icon: {
        height: "8rem",
        width: "6rem",
        display: "flex",
        marginTop: "1.45rem",
        justifyContent: "start",
        marginLeft: "1rem",
    },
    html: {
        height: "16rem",
        width: "14rem",
        display: "flex",
        justifyContent: "start",
        marginLeft: "1rem",
        marginTop: "-2.6rem"
    },
    node: {
        height: "20rem",
        width: "20rem",
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        marginTop: "-4.6rem"
    },
    express: {
        height: "20rem",
        width: "20rem",
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        marginTop: "-4.6rem",
        marginLeft: "-6rem"
    },
    sql: {
        height: "20rem",
        width: "30rem",
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        marginTop: "-4.6rem",
        marginLeft: "-8rem"
    },
    react: {
        height: "25rem",
        width: "35rem",
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        marginTop: "-6.6rem",
        marginLeft: "-16rem"
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
            <div style={{ display: "flex", height: "12rem", width: "100vw", backgroundColor: "black" }}>
                <div class="flex flex-row justify-around mt-3 mb-3 ml-3" >
                    <img class="scale-150" src={html} style={styles.html}></img>
                    <img class="invert" src={css} style={styles.icon}></img>
                    <img class="scale-150" src={js} style={styles.javascript}></img>
                    <img class="bg-transparent" src={node} style={styles.node}></img>
                    <img class="bg-transparent" src={express} style={styles.express}></img>
                    <img class="bg-transparent" src={sql} style={styles.sql}></img>
                    <img class="bg-transparent" src={react} style={styles.react}></img>
                </div>
            </div>
            <div style={{height: "auto", width: "100vw", backgroundColor: "#d7c25e" }}>
                <div class="flex flex-row justify-center content-center pb-6 ml-3 mr-3">
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