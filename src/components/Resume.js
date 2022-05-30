// import './App.css';
import tech from "../images/assets/Resume.pdf"
import image from "../images/assets/Resume.png"

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
    height: "50rem",
  }
}

function Resume() {
  return (
    <div className="tabs" style={styles.margin}>
      <div style={{display:"flex"}}>
      <div id="resume" style={{marginRight:"10%"}}>
        <img src={image} style={styles.resume}></img>
        <a href={tech} download><button id="myResume">Download my Resume</button></a>
      </div>
      <div>
        <h3>Front-End:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Javscript</li>
          <li>React</li>
        </ul>
        <h3>Back-End:</h3>
        <ul>
          <li>Express</li>
          <li>Node</li>
          <li>SQL</li>
          <li>Mongo</li>
          <li>Sequelize</li>

        </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
