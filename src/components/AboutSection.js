import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import css from "../images/assets/css.jpg"
import html from "../images/assets/html.png"
import node from "../images/assets/node.jpg"
import express from "../images/assets/express.png"
import sql from "../images/assets/sql.png"
import react from "../images/assets/react.jpg"
import js from "../images/assets/Javascript1.jpg"

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
        // width: "auto",
        display: "flex",
        justifyContent: "start",
        marginLeft: "1rem",
        marginTop: "-2.6rem"
    },
    javascript: {
        height: "16rem",
        // width: "auto",
        display: "flex",
        justifyContent: "start",
        marginLeft: "1rem",
        marginTop: "-2.2rem",
    },
    node: {
        height: "20rem",
        width: "auto",
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        marginTop: "-4.6rem"
    },
    express: {
        height: "20rem",
        width: "auto",
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        marginTop: "-4.6rem",
        marginLeft: "-6rem"
    },
    sql: {
        height: "20rem",
        width: "auto",
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        marginTop: "-4.6rem",
        marginLeft: "-8rem"
    },
    react: {
        height: "25rem",
        width: "40rem",
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        marginTop: "-6.6rem",
        marginLeft: "-6rem",
    },
    color: {
        color: "black",
        // backgroundColor: "white"
        backgroundColor: "#F3F2F2"
    }
}

const responsive = {
    0: { items: 1},
    568: { items: 2 },
    1024: { items: 5 },
};

const items = [
    //paddingRight and paddingLeft to get width to be 1/3 vw
    <div className="item" data-value="1"><img class="scale-150" src={html} style={styles.html} alt="html"></img></div>,
    <div className="item" data-value="2"><img class="invert" src={css} style={styles.icon} alt="css"></img></div>,
    <div className="item" data-value="3"><img class="scale-50" src={js} style={styles.javascript} alt="javascript"></img></div>,
    <div className="item" data-value="4"><img class="bg-transparent" src={node} style={styles.node} alt="node"></img></div>,
    <div className="item" data-value="5"><img class="bg-transparent" src={express} style={styles.express} alt="express"></img></div>,
    <div className="item" data-value="6"><img class="bg-transparent" src={sql} style={styles.sql} alt="SQL"></img></div>,
    <div className="item" data-value="7"><img class="bg-transparent" src={react} style={styles.react} alt="react"></img></div>,

];

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