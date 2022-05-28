// import './App.css';

const styles = {
  header: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    justifyContent: "space-around",
  },
  label: {
    width: "3rem",
  }
}

function Contact() {
  return (
    <div>
      
    <section class="contact-us">
              <a id="contact"></a><h3>Contact Me</h3>
              <ul>
                <a href=""><li>206.372.4315</li></a>
                <a href="mailto:eric.taylor1012@gmail.com"><li>eric.taylor1012@gmail.com</li></a>
                <a href="https://github.com/erict001/"><li>GitHub</li></a>
                <a href="https://www.linkedin.com/in/eric-taylor-03181917a/"><li>LinkedIn</li></a>
              </ul>
            </section>
    <form style={styles.header}>
      <label style={styles.label}>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email Address:
        <input type="text" name="email" />
      </label>
      <label>
        Message:
        <input type="text" name="message" rows="5" />
      </label>
    </form>
    </div>
  );
}

export default Contact;
