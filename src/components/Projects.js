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
    border: '1px solid black',
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
        <div style={styles.line}></div>
        <p style={styles.subHeader}>Here you will find some of the personal and client projects that I created</p>
      </div>
      <div className='project-container'>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </>
  );
}

