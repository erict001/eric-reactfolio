import logo from './logo.svg';
// import './App.css';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Github from "./images/assets/Github.png"
import LinkedIn from "./images/assets/LinkedIn.png"


const styles = {
  header: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-around",
  },
  icons: {
    height: "50px",
    width: "50px",
    marginLeft: "40%"
  }
  // item: {
  //   width: "4rem",
  //   listStyle: "none"
  // }
}
function App() {
  return (
    <div className="tabs">
      <Tabs>
        <TabList style={styles.header}>
          <Tab style={styles.item}>Home</Tab>
          <Tab style={styles.item}>About</Tab>
          <Tab style={styles.item}>Portfolio</Tab>
          <Tab style={styles.item}>Resume</Tab>
          <Tab style={styles.item}>Contact</Tab>
        </TabList>

        <div>
          <TabPanel>
            <h2><Home /> </h2>
            {/* <Link to = {value="1"}><h2>Learn More</h2></Link> */}
          </TabPanel>
          <TabPanel>
            <h2><About /></h2>
          </TabPanel>
          <TabPanel>
            <h2><Portfolio /></h2>
          </TabPanel>
          <TabPanel>
            <h2><Resume /></h2>
          </TabPanel>
          <TabPanel>
            <h2><Contact /></h2>
          </TabPanel>

        </div>
      </Tabs>
      <footer>
        <a href={"https://github.com/erict001?tab=repositories"}><img src={Github} style={styles.icons}></img></a>
        <a href={"https://www.linkedin.com/in/eric-taylor-03181917a/"}><img src={LinkedIn} style={{height:"50px", width: "50px"}}></img></a>

      </footer>
    </div>
  );
}

export default App;
