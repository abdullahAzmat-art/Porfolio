import React from 'react'

const About = () => {
  return (
    <>
      <div className='container'>
        <h1 className='aboutkoset'>About Me</h1>
      <div className='row'>
        <div className='col-lg-8 col-md-6 col-sm-12 col-12'>
        <p className='pharaset'  data-aos="fade-right">
        I completed my matriculation from Unique School with a score of 76%, which laid the foundation for my academic journey. Afterward, I pursued FSc (Medical) at Punjab College, where I developed a keen interest in science and technology. Currently, I am pursuing a BSc in Computer Science (BSCS) at NUML, where I am in my second semester. I achieved a 3.3 GPA in my first semester, reflecting my dedication and hard work.

In addition to my academic achievements, I have completed a MERN Stack course at PNY, which gave me hands-on experience in full-stack web development. This course helped me gain practical skills in MongoDB, Express, React, and Node.js, preparing me for a future in software development. I am passionate about technology and continuously strive to improve my skills to stay ahead in the ever-evolving field of computer science.

This version adds more context to your education and goals! Let me know if you'd like any further changes.
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
