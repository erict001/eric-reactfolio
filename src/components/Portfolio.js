// import './App.css';
import jeopardy from "../images/assets/Inspirational-Jeopardy.png"
import password from "../images/assets/Password.png"
import restaurant from "../images/assets/Restaurant.png"


const styles = {
  header: {
    height: "40vh",
    justifyContent: "center",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "40%",
    fontSize: "35px"
  },
  image: {
    // position: "absolute",
    height: "80vh",
    width: "40rem",
    marginTop: "-15%",
    marginLeft: "45%",
    marginRight: "40%"
  },
  margin: {
    marginTop: "5%",

    marginRight: "40%"
  }
}


function Portfolio() {
  return (
    <div>
      <section class="MERN" style={styles.header}>
        <h1>From Building games to 
          <br></br>fetching API's</h1>
      </section>
      <section class="MERN" style={{marginLeft:"50px"}}>
        <h2 >Inspirational Jeopardy</h2>
        <p >Materialize/Javascript/JQuery</p>
        <div style={{display:"flex", marginRight:"10px", listStyle:"none"}}>
            <a href="https://github.com/erict001/inspirational-jeopardy" target="_blank"><button id="gitJeopardy">Click here to view my Github repository</button></a>
         </div>
         <div>
            <a href="https://erict001.github.io/inspirational-jeopardy/" target="_blank" id="liveJeopardy"><button>Click here to view my deployed link</button></a>
        </div>
        <div >
        <img src={jeopardy} style={styles.image}></img>
        </div>
      </section>
      <br></br>
      <section class="MERN" style={{marginLeft:"50px"}}>
        <h2 >Generate Password</h2>
        <p >HTML/JavaScript/CSS</p>
        <div style={{display:"flex", marginRight:"10px", listStyle:"none"}}>
            <a href="https://github.com/erict001/Password-Generator" target="_blank"><button id="gitJeopardy">Click here to view my Github repository</button></a>
         </div>
         <div>
            <a href="https://erict001.github.io/Password-Generator/" target="_blank" id="liveJeopardy"><button>Click here to view my deployed link</button></a>
        </div>
        <div >
        <img src={password} style={styles.image}></img>
        </div>
      </section>
      <br></br>
      <section class="MERN" style={{marginLeft:"50px"}}>
        <h2 >Restaurant Finder</h2>
        <p >HTML/JavaScript/CSS/Node/Express</p>
        <div style={{display:"flex", marginRight:"10px", listStyle:"none"}}>
            <a href="https://github.com/erict001/Restaurant-Finder" target="_blank"><button id="gitJeopardy">Click here to view my Github repository</button></a>
         </div>
         <div>
            <a href="https://roogle-2022.herokuapp.com/" target="_blank" id="liveJeopardy"><button>Click here to view my deployed link</button></a>
        </div>
        <div >
        <img src={restaurant} style={styles.image}></img>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
