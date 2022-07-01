// import './App.css';
import jeopardy from "../images/assets/Inspirational-Jeopardy.png"
import password from "../images/assets/Password.png"
import restaurant from "../images/assets/Restaurant.png"


const styles = {
  header: {
    height: "50vh",
    justifyContent: "center",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "40%",
  },
  image: {
    // position: "absolute",
    height: "60vh",
    width: "80%",
  },
  margin: {
    marginTop: "5%",
    marginRight: "40%"
  },
  button: {
    fontSize: "1.2rem",
    marginLeft: "6rem"
  },
  title: {
    fontSize: "45px",
    fontWeight: 600,
    marginLeft:"20%"
  }
}


function Portfolio() {
  return (
    <div>
      <section style={styles.header}>
        <h1 style={{fontSize: "45px"}}>From Building games to 
          <br></br>fetching API's</h1>
      </section>
      <br></br>
      <br></br>
      <section style={{marginLeft:"20%"}}>
        <div>
        <h2 style={styles.title}>Inspirational Jeopardy</h2>
        <p style={{marginLeft:"25%"}}>Materialize/Javascript/JQuery</p>
        <div >
        <img src={jeopardy} style={styles.image}></img>
        </div>
        <div>
            <a href="https://github.com/erict001/inspirational-jeopardy" target="_blank"><button style={styles.button}>Click here to view my Github repository</button></a>
            <a href="https://erict001.github.io/inspirational-jeopardy/" target="_blank" id="liveJeopardy"><button style={styles.button}>Click here to view my deployed link</button></a>
        </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <section style={{marginLeft:"20%"}}>
        <div>
        <h2 style={styles.title}>Generate Password</h2>
        <p style={{marginLeft:"25%"}}>HTML/JavaScript/CSS</p>
        </div>
        <div >
        <img src={password} style={styles.image}></img>
        </div>
        <div>
            <a href="https://github.com/erict001/Password-Generator" target="_blank"><button style={styles.button}>Click here to view my Github repository</button></a>
            <a href="https://erict001.github.io/Password-Generator/" target="_blank" id="liveJeopardy"><button style={styles.button}>Click here to view my deployed link</button></a>
        </div>
      </section>
      <br></br>
      <br></br>
      <section style={{marginLeft:"20%"}}>
        <div>
        <h2 style={styles.title}>Restaurant Finder</h2>
        <p style={{marginLeft:"18%"}}>HTML/JavaScript/CSS/Node/Express</p>
        <div >
        <img src={restaurant} style={styles.image}></img>
        </div>
        <div>
            <a href="https://github.com/erict001/Restaurant-Finder" target="_blank"><button style={styles.button}>Click here to view my Github repository</button></a>
            <a href="https://roogle-2022.herokuapp.com/" target="_blank"><button style={styles.button}>Click here to view my deployed link</button></a>
        </div>
        </div >
      </section>
    </div>
  );
}

export default Portfolio;
