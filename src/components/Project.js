import React, { useState } from 'react';
import { Row, Col, Image, Button, } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import useWindowSize from './useWindowSize';
import './Project.css';
import BadgePill from './BadgePill';

const Project = (props) => {
  
  const [hovered, setHovered] = useState(false);
  const windowSize = useWindowSize();

  const styles = {
    img: {
      filter: hovered && windowSize.width > 700 ? "blur(2px)" : "none",
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
      width: "160px",
      borderRadius: '50px',
      border: "none",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    },
    pills: {
      display: 'flex',
      gap: "10px",
    },
    
    paragraph: {
      //marginTop: "15px",
      lineHeight: "180%",
      fontWeight: 200,
      marginBottom: "35px",
    },
    row: {
      marginBottom: "50px"
    },
    seeTheCode: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px"
    },
   
  };

  return (
    <Row style={styles.row} className="d-flex align-items-center">
      <Col  style={styles.colLeft} className='justify-content-center justify-content-lg-start'>

      <div
           onMouseEnter={() => setHovered(true)}
           onMouseLeave={() => setHovered(false)}
           className='img-container'
            >

        <Image 
          style={styles.img} 
          src={props.image}  
        />
        
        {windowSize.width < 700 ? <div className='mobile-button-container'>
          <Button variant="outline-dark" className="btn-light" style={styles.mobileButton}>Visit Website</Button>
          <Button variant="outline-dark" className="btn-light" style={styles.mobileButton}><div style={styles.seeTheCode}>See the code <GitHubIcon fontSize="small"/></div></Button>
        </div> :

        <div className='button-container' onMouseEnter={() => setHovered(true)}> 
          <Button variant="outline-dark" className="btn-light" style={styles.button}>Visit Website</Button>
          <Button variant="outline-dark" className="btn-light" style={styles.button}><div style={styles.seeTheCode}>See the code <GitHubIcon fontSize="small"/></div></Button>
        </div>}

      </div>
        
      </Col>
      <Col className='d-flex flex-column  p-0 p-sm-5 pt-0 pb-0 pt-sm-0 pb-sm-0 p-md-4 mt-4 mt-md-0 align-items-center align-items-lg-start info-container'>
        <h4 className='blue-color title'>{props.title}</h4>
        <p style={styles.paragraph}>{props.text}</p>
        <div style={styles.pills} className='pills'>
          {props.badgePills.map(pill => 
            <BadgePill
              label={pill}
            />
          )}
        </div>
      </Col>
    </Row>    
  );
};

export default Project;

