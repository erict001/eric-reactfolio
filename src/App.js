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
      <Navbar />
    </div>
  );
}

export default App;
