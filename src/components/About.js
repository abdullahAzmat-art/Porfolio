import React from 'react'

const About = () => {
  return (
    <>
      <div className='container'>
        <h1 className='aboutkoset'>About Me</h1>
      <div className='row'>
        <div className='col-lg-8 col-md-6 col-sm-12 col-12'>
        <p className='pharaset'  data-aos="fade-right">
       I completed my matriculation from Unique School with a score of 76%, which laid the foundation for my academic journey. I then pursued FSc (Pre-Medical) at Punjab College, where I developed a strong interest in science and technology.<br/>

Currently, I am enrolled in the BS Computer Science program at NUML and am in my second semester. I achieved a 3.3 GPA in my first semester, reflecting my commitment to academic excellence and hard work.<br/>

Alongside my studies, I completed a MERN Stack development course at PNY, gaining hands-on experience in full-stack web development using MongoDB, Express.js, React, and Node.js.<br/> 

I am passionate about building modern web applications and continuously strive to expand my skills to stay ahead in the ever-evolving tech landscape.
        </p>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 col-12' data-aos="fade-left">
            <img src='./images/4.jpg' className='imgsetinabout'/>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
