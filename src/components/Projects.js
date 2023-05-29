import React from 'react';
import Project from './Project';
import { Row, Col } from 'react-bootstrap';

const styles = {

  texts: {  
    marginTop: "30px",
    marginBottom: "30px",
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
  }
}

export default function Projects() {
  return (
    <>
      <div style={styles.texts}>
        <h2>Projects</h2>
        <div style={styles.line}></div>
        <p style={styles.subHeader}>Here you will find some of the personal and clients projects that I created</p>
      </div>
      <div>
        <Row>
          <Col>
            <Project/>  
            <Project/> 
            <Project/> 
          </Col>
        </Row>    
      </div>
    </>
  );
}

