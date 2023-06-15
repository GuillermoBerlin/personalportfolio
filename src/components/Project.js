import React, { useState } from 'react';
import { Row, Col, Image, Button, } from 'react-bootstrap';
import useWindowSize from './useWindowSize';
import './Project.css';
import Pill from './Pill';

const Project = (props) => {
  
  const [hovered, setHovered] = useState(false);
  const windowSize = useWindowSize();

  const styles = {
    img: {
      filter: hovered && windowSize.width > 700 ? "blur(2px)" : "none",
      transition: "filter 0.5s ease",
    },
    colLeft: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    button: {
      display: hovered ? "block" : "none",
      margin: "12px",
      width: "160px",
      borderRadius: '50px',
      border: "none",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    },
    mobileButton:{
      margin: "12px",
      padding: "5px 15px",
      borderRadius: '50px',
      border: "none",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    },
    row: {
      marginBottom: "50px"
    }, 
  };

  return (
    <Row style={styles.row} className="d-flex align-items-center">
      <Col  style={styles.colLeft} className='justify-content-center justify-content-lg-start'>

      <div
           onMouseEnter={() => setHovered(true)}
           onMouseLeave={() => setHovered(false)}
           className='project-image-container'
            >

        <img
          className='project-image' 
          style={styles.img} 
          src={props.image}  
        />
        
        {windowSize.width < 700 ? <div className='mobile-button-container'>
          <Button href={props.page} target="_blank"variant="outline-dark" className="btn-light" style={styles.mobileButton}>Visit Website</Button>
          <Button href={props.code} target="_blank"variant="outline-dark" className="btn-light" style={styles.mobileButton}>See the code</Button>
        </div> :

        <div className='button-container' onMouseEnter={() => setHovered(true)}> 
          <Button href={props.page} target="_blank" variant="outline-dark" className="btn-light" style={styles.button}>Visit Website</Button>
          <Button href={props.code} target="_blank"variant="outline-dark" className="btn-light" style={styles.button}>See the code</Button>
        </div>}

      </div>
        
      </Col>
      <Col className='project-text-container'>
        <h4 className='project-title'>{props.title}</h4>
        <p className='project-paragraph'>{props.text}</p>
        <div className='pill-container'>
          {props.pills.map(pill => 
            <Pill
              label={pill}
            />
          )}
          
        </div>
      </Col>
    </Row>    
  );
};

export default Project;

