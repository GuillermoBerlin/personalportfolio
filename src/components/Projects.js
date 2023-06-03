import React from 'react';
import Project from './Project';
import './Projects.css';

const styles = {
  texts: {
    marginTop: "60px",
    marginBottom: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    border: '1px solid',
    width: "30px",
    margin: "6px",
  },
  subHeader: {
    fontWeight: 200,
    fontSize: "20px",
    textAlign: "center",
  },
  row: {
    marginBottom: "50px",
    marginLeft: "0",
  },
};

export default function Projects() {
  return (
    <>
      <div style={styles.texts}>
        <h2 className='blue-color'>Projects</h2>
        <div className='blue-color' style={styles.line}></div>
        <p style={styles.subHeader}>Here you will find some of the personal and client projects that I created</p>
      </div>
      <div className='project-container'>
        <Project 
          title={"Vocal Coach Portfolio"} 
          text={"React Portfolio with CSS Animations and EmailJS integration, designed for a vocal coach. Showcasing her work and teaching approach, allowing potential students to explore her talent and expertise."}
          image={require('../images/Component 7.png')}
          badgePills={["React", "Node"]}
        />  
      </div>
    </>
  );
}

