import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from "../src/images/assets/Resume.pdf"
import Contact from './components/Contact'
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Github from "./images/assets/Github.png"
import LinkedIn from "./images/assets/LinkedIn.png"


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
  },
  icons: {
    height: "50px",
    width: "50px",
  },
  item: {
    fontSize: "20px",
    // paddingLeft: "3rem",
    // paddingRight: "75rem",
  },
  items: {
    // border: "solid 1px white",
    // padding: "1rem",
    fontSize: "20px"
  },
  color: {
    color: "white",
    backgroundColor: "#100c08"
  }
}


function App() {
  return (
    <div className="tabs" style={styles.color}>
      <div className="tabs">
        <Tabs>
          <TabList style={styles.header}>
            <Tab class="w-3/5 pl-20" style={styles.item}>Home</Tab>
            <a href="https://github.com/erict001" target="_blank"><button style={styles.items}>Eric's Github</button></a>
            <a href={Resume} download><button style={styles.items}>Download My Resume</button></a>
            <a href="mailto:eric.taylor1012@gmail.com" target="_blank"><button style={styles.items}>Contact Me</button></a>

          </TabList>

          <div>
            <TabPanel>
              <h2><Home /> </h2>
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
          <footer>
            <div class="flex flex-row justify-center mt-9">
              <a href={"https://github.com/erict001?tab=repositories"}><img src={Github} style={styles.icons}></img></a>
              <a href={"https://www.linkedin.com/in/eric-taylor-03181917a/"}><img src={LinkedIn} style={{ height: "50px", width: "50px" }}></img></a>
            </div>
          </footer>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
