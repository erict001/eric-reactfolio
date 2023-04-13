import './App.css';
import Navbar from './components/Navbar';
import Icons from './components/Icons'

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
      {/* <NewNav /> */}
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
