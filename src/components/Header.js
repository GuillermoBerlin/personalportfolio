import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {

  const styles = {
    mainDiv:{
      marginTop:"100px"
    },

    subHeader: {
      fontWeight: 200,
      fontSize: "20px",
      marginBottom: "0px"
    },

    icons:{
      marginTop: "30px",
      marginLeft: "0px",
      
    },
  }

  return (
    <div style={styles.mainDiv}>
      <h3>Hi, my name is</h3>
      <h1>Guillermo Lescano</h1>
      <h1>I'm a Full Stack Developer.</h1>
      <p style={styles.subHeader}>I´m a software developer based in Berlin, Germany.</p>
      <p style={styles.subHeader}>Currently, I’m focused on building responsive web and mobile applications.</p>
      <div style={styles.icons}>
      <LinkedInIcon style={{fontSize:"40px",  marginRight: "13px"}}/>
      <GitHubIcon style={{fontSize:"34px",  marginRight: "13px"}}/>
      <EmailIcon style={{fontSize:"40px",  marginRight: "13px"}}/>
      </div>
    </div>
  )
}
