import logo from './logo.svg';
// import './App.css';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const styles = {
  header: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-around",
  },
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

        <body>
          <TabPanel>
            <h2><Home /></h2>
          </TabPanel>
          <TabPanel>
            <h2><About /></h2>
          </TabPanel>
          <TabPanel>
            <h2><Portfolio /></h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2><Contact /></h2>
          </TabPanel>

        </body>
      </Tabs>
    </div>
  );
}

export default App;
