// import './App.css';
import tech from "../Resume.pdf"

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
    height: "90vh",
    width: "55vw"
  }
}

function Resume() {
  return (
    <div className="tabs" style={styles.margin}>
      <div style={{display: "flex"}}>
        <div id="resume" style={{ marginRight: "10%" }}>
        <iframe style={styles.resume} src="https://docs.google.com/document/d/e/2PACX-1vQ4LDdMgbePtH9dOSw-6ZGox3ufWntAkRsJbPsjoQomyVNQmU_yPeNmWrPicBva9LM3MQ-Ly6CkDLhM/pub?embedded=true"></iframe>
          <br></br>
          <a href={tech} download><button id="myResume">Download my Resume</button></a>
        </div>
        <div>
            <h3>FrontEnd:</h3>
            <ul style={{ fontSize: "20px" }}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javscript</li>
              <li>React</li>
            </ul>
          </div>
          <br></br>
          <br></br>
          <div>
            <h3>BackEnd:</h3>
            <ul style={{ fontSize: "20px" }}>
              <li>Express</li>
              <li>Node</li>
              <li>SQL</li>
              <li>Mongo</li>
              <li>Sequelize</li>
            </ul>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
