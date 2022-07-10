import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import City from "./City"
import Fenix from "./Fenix"
import Apollo from "./Apollo"
import Denali from "./Denali"
import ApolloAccomplishments from "./apolloAccomplishments"
import FenixAccomplishments from "./fenixAccomplishments"
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
  },
  tabs:{
    border: "2px solid white",
    height: "100%"
  },
}

class Resume extends Component {
  render() {
    return (
      <div className="tabs">
      <Tabs>
        <TabList className="tab" class="flex flex-row xl:columns-4 lg:columns-2 md:columns-1 sm:columns-2 xs:columns-2" style={{display: "flex", listStyle: "none", justifyContent: "space-around"}} >
          <Tab style={styles.tabs}><Apollo/></Tab>
          <Tab style={styles.tabs}><Fenix/></Tab>
          <Tab style={styles.tabs}><City/></Tab>
          <Tab style={styles.tabs}><Denali/></Tab>
        </TabList>
        <div class="mt-20 mx-4">
          <TabPanel style={styles.tabs}>
            <ApolloAccomplishments/>
          </TabPanel>
          <TabPanel>
            <FenixAccomplishments/>
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