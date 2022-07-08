import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import City from "./City"
import Fenix from "./Fenix"
import Apollo from "./Apollo"
import Denali from "./Denali"
import Accomplishments from "./Accomplishments"
// import 'react-tabs/style/react-tabs.css'
// import Contact from "./Contact"
// import Portfolio from "./Portfolio"


const styles = {
  margin: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "40%"
  },
  download: {
    display: "flex",
    justifyContent: "end"
  },
  resume: {
    border: "2px solid black",
    justifyContent: "center",
    height: "90vh",
    width: "55vw"
  }
}

class Resume extends Component {
  render() {
    return (
      <div className="tabs" >
      <Tabs>
        <TabList class="xl:columns-4 lg:columns-2 md:columns-1 sm:columns-1" style={{display: "flex", listStyle: "none", justifyContent: "space-evenly"}} >
          <Tab ><Apollo/></Tab>
          <Tab ><Fenix/></Tab>
          <Tab ><City/></Tab>
          <Tab ><Denali/></Tab>
        </TabList>

        <div>
          <TabPanel>
            <Accomplishments/>
          </TabPanel>
          <TabPanel>
            <h2>Director of Logistics and Director of Sports Performance</h2>
          </TabPanel>
          <TabPanel>
            <h2>Co-Founder / COO</h2>
          </TabPanel>
          <TabPanel>
            <h2>Founder / CEO</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
    );
  }
};

export default Resume;