import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Header.css';

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
      color: 'black', // Establece el color en negro
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.mainDiv} className='text-center text-lg-start main-div'>
      <h3>Hi, my name is</h3>
      <h1 className='blue-color'>Guillermo Lescano</h1>
      <h1 className='blue-color'>I'm a Full Stack Developer.</h1>
      <p style={styles.subHeader}>I´m a software developer based in Berlin, Germany.</p>
      <p style={styles.subHeader}>Currently, I’m focused on building responsive web and mobile applications.</p>
      <div style={styles.icons} className='icons-container'>
        <a href="https://www.linkedin.com/in/guillermo-lescano/" target="_blank" rel='noreferrer' className='linkedin-icon icon'>
          <LinkedInIcon style={{ ...styles.icon, color: 'black' }} />
        </a>
        <a href="https://github.com/GuillermoBerlin" target="_blank" rel='noreferrer' className='github-icon icon'>
          <GitHubIcon style={{ ...styles.icon, color: 'black' }} />
        </a>
        <EmailIcon style={styles.icon} onClick={handleEmailClick} className='email-icon icon'/>
      </div>
    </div>
  );
}
