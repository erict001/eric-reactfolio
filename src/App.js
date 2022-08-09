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
    // paddingLeft: "3rem",
    // paddingRight: "75rem",
  },
  items: {
    // border: "solid 1px white",
    // padding: "1rem",
    fontSize: "20px",
    color: "white"
  },
  color: {
    color: "black",
    // backgroundColor: "white"
    backgroundColor: "#F3F2F2"
  }
}


function App() {

  return (
    <div className="tabs" style={styles.color}>
      <Icons />
      <Navbar />
    </div>
  );
}

export default App;
