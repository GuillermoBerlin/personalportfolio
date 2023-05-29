import React, { useState } from 'react';
import { Row, Col, Image, Button, Badge } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';

const Project = () => {
  
  const [hovered, setHovered] = useState(false);

  const styles = {
    img: {
      width: "400px",
      height: "300px",
      filter: hovered ? "blur(2px)" : "none",
    },
    imgContainer: {
      position: "relative",
      display: "inline-block",
      textAlign: "right",
    },
    buttonContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", 
    },
    colLeft: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      marginRight: "20px",
    },
    colRight: {
      marginLeft: "20px",
    },
    button: {
      display: hovered ? "block" : "none",
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
      maxWidth: "400px",
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
      <Col  style={styles.colLeft}>

      <div style={styles.imgContainer}
           onMouseEnter={() => setHovered(true)}
           onMouseLeave={() => setHovered(false)} 
            >

        <Image 
          style={styles.img} 
          src="https://wpleaders.com/wp-content/uploads/2021/05/WPBeginner.png"  
        />
        
        <div style={styles.buttonContainer} onMouseEnter={() => setHovered(true)}> 
        <Button variant="outline-dark" className="btn-light" style={styles.button}>Visit Website</Button>
        <Button variant="outline-dark" className="btn-light" style={styles.button}><div style={styles.seeTheCode}>See the code <GitHubIcon fontSize="small"/></div></Button>
        </div>
      </div>
        
      </Col>
      <Col style={styles.colRight}>
        <h4>Dopefolio</h4>
        <p style={styles.paragraph}>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
        </p>
        <div style={styles.pills}>
          <Badge pill bg="secondary" className="mt-2 mb-2">React</Badge>
          <Badge pill bg="secondary" className="mt-2 mb-2">Node</Badge>
          <Badge pill bg="secondary" className="mt-2 mb-2">MongoDB</Badge>
        </div>
      </Col>
    </Row>    
  );
};

export default Project;

