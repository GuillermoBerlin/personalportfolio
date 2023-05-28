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
        display: "inlineBlock",
        textAlign: "right",
        //border: '1px solid red'
      },
      
      buttonContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", 
        //border: '1px solid red',
        
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
      width: "150px",
      borderRadius: '50px'
      
    },

    pills: {
      display: 'flex',
      gap: "10px"
    },

    paragraph: {
      lineHeight: "1.5",
      maxWidth: "400px",
      marginTop: "15px",
      marginBottom: "15px",
    }

  };

  return (
    <Row className="d-flex align-items-center">
      <Col  style={styles.colLeft}>

      <div style={styles.imgContainer}
           onMouseEnter={() => setHovered(true)}
           onMouseLeave={() => setHovered(false)} 
            >

        <Image 
          style={styles.img} 
          src="https://play-lh.googleusercontent.com/bvDutfn9Rcf8_38yAIRuwg-ivbSSe2NCrNS3AnFtOIFYEKPgEvx8yL_8_btZFaAsyTwR"  
        />
        
        <div style={styles.buttonContainer} onMouseEnter={() => setHovered(true)}> 
        <Button variant="outline-dark" className="btn-light" style={styles.button}>Visit Website</Button>
        <Button variant="outline-dark" className="btn-light" style={styles.button}>See the code <GitHubIcon fontSize="small"/></Button>
        </div>
        </div>
        
      </Col>
      <Col style={styles.colRight}>
        <h3>Dopefolio</h3>
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

