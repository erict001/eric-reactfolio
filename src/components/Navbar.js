import React from "react";
import Home from '../components/Home'
import MyStory from '../components/MyStory'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Github from "../images/assets/Github.webp"
import LinkedIn from "../images/assets/LinkedIn.webp"

const styles = {
    rootStyle: {
        height: '100vh',
        color: "white",
    },
    header: {
        display: "flex",
        listStyle: "none",
        justifyContent: "space-around",
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
    },
    icons: {
        height: "50px",
        width: "50px",
        backgroundColor: "#F3F2F2",
        borderRadius: "2rem"
    },
    item: {
        fontSize: "20px",
    },
    items: {
        fontSize: "20px",
        color: "white"
    },
    color: {
        color: "black",
        backgroundColor: "#F3F2F2"
    }
}

function Nav() {
    return (
        <div className="tabs" style={styles.color}>
            <div className="tabs">
                <Tabs>
                    <TabList style={styles.header}>
                        <Tab class="w-3/5 pl-20" style={styles.item}>Home</Tab>
                        <Tab class="w-3/5 pl-20" style={styles.item}>My Story</Tab>
                        <a href="mailto:eric.taylor1012@gmail.com" target="_blank" rel="noreferrer"><button style={styles.items}>Contact Me</button></a>
                    </TabList>
                    <div>
                        <TabPanel>
                            <Home />
                        </TabPanel>
                        <TabPanel>
                            <MyStory />
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
            <footer>
                <div class="flex flex-row justify-center mt-9" >
                    <a href={"https://github.com/erict001"} rel="noreferrer"><img src={Github} style={styles.icons} alt="github icon"></img></a>
                    <a href={"https://www.linkedin.com/in/eric-taylor-03181917a/"} rel="noreferrer"><img src={LinkedIn} alt="github icon" style={{ marginLeft: "2rem", height: "50px", width: "50px", backgroundColor: "#F3F2F2" }}></img></a>
                </div>
            </footer>
        </div>
    )
}

export default Nav