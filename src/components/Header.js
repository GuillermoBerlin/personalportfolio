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

  return (
    <div className='text-center text-lg-start main-div'>
      <h3>Hi, my name is</h3>
      <h1>Guillermo Lescano</h1>
      <h1>I'm a Full Stack Developer.</h1>
      <p>I´m a software developer based in Berlin, Germany.</p>
      <p>Currently, I’m focused on building responsive web and mobile applications.</p>
      <div className='icons-container'>
        <a href="https://www.linkedin.com/in/guillermo-lescano/" target="_blank" rel='noreferrer' >
          <LinkedInIcon className='header-icon'/>
        </a>
        <a href="https://github.com/GuillermoBerlin" target="_blank" rel='noreferrer' >
          <GitHubIcon className='header-icon'/>
        </a>
        <EmailIcon onClick={handleEmailClick} className='header-icon'/>
      </div>
    </div>
  );
}
