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

  const nameField = document.getElementById("name")
  const emailField = document.getElementById("email")
  const messageField = document.getElementById("message")

  const submitBtn = document.getElementById("submit")

  function fields() {
    if (nameField === null) {
      window.alert("Fill out your name")
    } else if (emailField === null) {
      window.alert("Fill out your email")
    } else if (messageField === null) {
      window.alert("Fill out a message")
    } else {
      window.alert("Your form got submitted!")
    }
  }

  return (
    <div style={{ marginTop: "10vh", marginLeft: "10vw" }}>
      <h2>Let's chat!</h2>
      <p>Fill out the form below or email me at <a href="mailto:eric.taylor1012@gmail.com">eric.taylor1012@gmail.com</a></p>
      <form style={styles.header}>
        <label >
          Name:
          <br></br>
          <input id="name" placeholder="Enter your name" type="text" name="name" style={styles.label}/>
        </label>
        <label style={{paddingTop: "1rem"}}>
          Email Address:
          <br></br>
          <input id="email" placeholder="Enter your email address" type="text" name="email" style={styles.label} />
        </label>
        <label style={{paddingTop: "1rem"}}>
          Message:
          <br></br>
          <input id="message" placeholder="Enter your message" type="text" name="message" rows="5" style={{ height: "10rem", width: "30rem" }} />
        </label>
        <button onClick={fields} style={{ width: "10rem", marginTop: "2vh" }}>Submit</button>
      </form>
    </div>
  );
}
export default Contact;
