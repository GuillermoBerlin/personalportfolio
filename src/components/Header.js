import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
  
  const handleEmailClick = () => {
    const email = '3.guillermo.lescano@gmail.com';
    const subject = '';
    const body = '';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const styles = {
    mainDiv: {
      marginTop: '100px',
      borderRadius: 'solid 1px red',
      marginLeft: '220px',
    },
    subHeader: {
      fontWeight: 200,
      fontSize: '20px',
      marginBottom: '0px',
    },
    icons: {
      marginTop: '30px',
      marginLeft: '0px',
    },
    icon: {
      fontSize: '30px',
      marginRight: '17px',
      color: 'black', // Establece el color en negro
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.mainDiv}>
      <h3>Hi, my name is</h3>
      <h1>Guillermo Lescano</h1>
      <h1>I'm a Full Stack Developer.</h1>
      <p style={styles.subHeader}>I´m a software developer based in Berlin, Germany.</p>
      <p style={styles.subHeader}>Currently, I’m focused on building responsive web and mobile applications.</p>
      <div style={styles.icons}>
        <a href="https://www.linkedin.com/in/guillermo-lescano/" target="_blank">
          <LinkedInIcon style={{ ...styles.icon, color: 'black' }} />
        </a>
        <a href="https://github.com/GuillermoBerlin" target="_blank">
          <GitHubIcon style={{ ...styles.icon, color: 'black' }} />
        </a>
        <EmailIcon style={styles.icon} onClick={handleEmailClick} />
      </div>
    </div>
  );
}
