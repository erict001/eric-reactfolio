import React from 'react';
import { Link } from "react-router-dom";

const styles = {
  margin: {
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "40%"
  }
}


function About() {
  return (
    <div className="tabs" style={styles.margin}>
      <p>I am currently a student in the University of Washington full-stack web development coding bootcamp.
        <br></br>
        <br></br>
        Prior to this course, I spent 7 years owning and operating several, multiple 6 figure and 7 figure companies in athletics.
        <br></br>
        <br></br>
        I have strong leadership acumen with proven results in multi-department collaboration to achieve goals in both start-up and corporate environments. Enthusiastic team lead with a passion for marketing, mentorship, and project management. I earned a Full-Stack Web Development from the University of Washington where I developed expertise in both frontend and backend programming languages. Throughout this course I have planned and orchestrated the social media strategy for a local client, resulting in a 25% increase in website traffic. Excited to bring a solid foundation in designing and delivering targeted campaigns across email, web, and social channels.
        <br></br>
        <br></br>
        I graduated Saint Martin's University in 2013 with a Biology degree while receiving a 4 year basketball scholarship.</p>

    </div>
  );
}

export default About;
