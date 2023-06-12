import React from 'react';
import Project from './Project';
import './Projects.css';


export default function Projects() {
  return (
    <>
      <div className='text-container'>
        <h2>Projects</h2>
        <div className='line'></div>
        <p>Here you will find some of the personal and client projects that I created</p>
      </div>
      <div className='project-container'>
        <Project 
          title={"Vocal Coach Portfolio"} 
          text={"React Portfolio with CSS Animations and EmailJS integration, designed for a vocal coach. Showcasing her work and teaching approach, allowing potential students to explore her talent and expertise."}
          image={require('../images/Component 7.png')}
          badgePills={["React", "Tailwind CSS"]}
        />
        <Project 
          title={"MERN Ecommerce Project"} 
          text={"This project is an ecommerce website built using the MERN stack. It includes features for user authentication and login, allowing both administrators and regular users to access their respective accounts. "}
          image={require('../images/Imagen_rolonode.png')}
          badgePills={["React", "Node", "Express", "MongoDB", "Bootstrap"]}
        />    
      </div>
    </>
  );
}

