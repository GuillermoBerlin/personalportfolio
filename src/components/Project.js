import React, { useState } from 'react';
import { Row, Col, Image, Button, Badge } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import useWindowSize from './useWindowSize';
import './Project.css';

const Project = () => {
  
  const [hovered, setHovered] = useState(false);
  const windowSize = useWindowSize();

  const styles = {
    img: {
      filter: hovered && windowSize.width > 700 ? "blur(2px)" : "none",
    },
    buttonContainer: {
      position: "absolute",
    },
    mobileButtonContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "20px",
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
    },
    mobileButton:{
      margin: "12px",
      width: "160px",
      borderRadius: '50px',
      border: "none",
    },
    pills: {
      display: 'flex',
      gap: "10px",
    },
    
    paragraph: {
      lineHeight: "1.5",
      marginTop: "15px",
      marginBottom: "15px",
      lineHeight: "140%",
      fontWeight: 200,
      marginTop: "0px",
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
    }
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
          src="https://wpleaders.com/wp-content/uploads/2021/05/WPBeginner.png"  
        />
        
        {windowSize.width < 700 ? <div style={styles.mobileButtonContainer}>
          <Button variant="outline-dark" className="btn-light" style={styles.mobileButton}>Visit Website</Button>
          <Button variant="outline-dark" className="btn-light" style={styles.mobileButton}><div style={styles.seeTheCode}>See the code <GitHubIcon fontSize="small"/></div></Button>
        </div> :
        <div style={styles.buttonContainer} onMouseEnter={() => setHovered(true)}> 
          <Button variant="outline-dark" className="btn-light" style={styles.button}>Visit Website</Button>
          <Button variant="outline-dark" className="btn-light" style={styles.button}><div style={styles.seeTheCode}>See the code <GitHubIcon fontSize="small"/></div></Button>
        </div>}

      </div>
        
      </Col>
      <Col className='d-flex flex-column  p-0 p-sm-5 pt-0 pb-0 pt-sm-0 pb-sm-0 p-md-4 mt-4 mt-md-0 align-items-center align-items-lg-start info-container'>
        <h4 className='blue-color title'>Dopefolio</h4>
        <p style={styles.paragraph}>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
        </p>
        <div style={styles.pills} className='pills'>
          <Badge pill bg="secondary" className="mt-2 mb-2">React</Badge>
          <Badge pill bg="secondary" className="mt-2 mb-2">Node</Badge>
          <Badge pill bg="secondary" className="mt-2 mb-2">MongoDB</Badge>
        </div>
      </Col>
    </Row>    
  );
};

export default Project;

