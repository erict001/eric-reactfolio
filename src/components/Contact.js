// import './App.css';

const styles = {
  header: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    justifyContent: "space-around",
  },
  label: {
    width: "30rem",
  }
}

function Contact() {
  return (
    <div style={{marginTop: "10vh", marginLeft: "10vw"}}>
      <h2>Let's chat!</h2>
      <p>Fill out the form below or email me at <a href="mailto:eric.taylor1012@gmail.com">eric.taylor1012@gmail.com</a></p>
    <form style={styles.header}>
      <label >
        Name:
        <br></br>
        <input type="text" name="name" style={styles.label}/>
      </label>
      <label>
        Email Address:
        <br></br>
        <input type="text" name="email" style={styles.label}/>
      </label>
      <label>
        Message:
        <br></br>
        <input type="text" name="message" rows="5" style={{height: "20rem", width:"30rem"}}/>
      </label>
      <button style={{width: "10rem", marginTop:"2vh"}}>Submit</button>
    </form>
    </div>
  );
}

export default Contact;
