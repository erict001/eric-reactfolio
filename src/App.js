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
import Navbar from './components/Navbar';
import Icons from './components/Icons'
import Images from './components/Carousel'

const styles = {
  color: {
    color: "black",
    // backgroundColor: "white"
    backgroundColor: "#F3F2F2",
    height: "auto"
  }
}


function App() {

  return (
    <div style={styles.color}>
      <Icons />
      <Navbar />
      {/* <Images /> */}
      {/* <footer>
        <div class="flex flex-row justify-center mt-9" >
          <a href={"https://github.com/erict001"}><img src={Github} style={styles.icons}></img></a>
          <a href={"https://www.linkedin.com/in/eric-taylor-03181917a/"}><img src={LinkedIn} style={{ marginLeft: "2rem", height: "50px", width: "50px", backgroundColor: "#F3F2F2" }}></img></a>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
