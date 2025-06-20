import React from 'react'

const Careosal = () => {

  let products = [
    {name: 'Car Collection', description: 'Create a React website with React Router DOM for private routing to protect authenticated pages. Use Redux for state management to handle user authentication state, integrating signup and signin APIs for secure access. Implement Multer for file uploads, allowing users to upload profile pictures or other files during registration or profile updates.' , images:"./images/1.png"},
    {name: 'LMS', description: 'Develop an LMS with React Router DOM for private routing, securing student/admin dashboards, and use Redux to manage authentication and user data, integrating signup/signin APIs. Implement Multer for file uploads and allow secure viewing of marks for students.' , images:"./images/2.png"},
    {name: 'Doctor-Appointnment', description: 'Develop an appointment booking system with React Router DOM for navigation, where patients can securely book appointments with doctors. Use Redux to manage user authentication and store patient details' , images:"./images/3.png"}
  ]






  return (
 <div>
       <div className='caresalokoset mt-5'>
        <div className='m-auto  container innerconta'>
      <h1 className=' careosethead'  data-aos="fade-right"><span>Hi, I'm </span>Abdullah Azmat</h1>
      {/* <p className='pharaset'>I am a <b>MERN</b> Stack Developer with <b><i class="fa-solid fa-n"></i>EXT. JS</b></p> */}
        <p class="hero-subtitle">
      I build modern and responsive websites for <b>businesses</b> and <b>startups</b>.
      Let’s create something awesome together.
    </p>
    </div>

    </div>

    <section>
<h1 className='projectheader' data-aos="fade-up">Projects</h1>
<div className='lineatprohead' data-aos="fade-up"></div>
<div className='container'>
    <div className='row'>
 {
    products.map((ele)=>{
        return(
            <>
                   <div className='col-lg-4 col-md-6 col-12 col-sm-12 mt-4' data-aos="fade-up" >
<div className=" project-card shadow-sm">
  <div className="position-relative">
    <img src={ele.images} className="card-img-top project-image" alt="Project 1" />
    <div className="card-overlay">
      <a href="https://github.com/abdullahAzmat-art" className="text-white me-2"><i class="fa-brands fa-github"></i></a>
      <a href="#" className="text-white"><i className="bi bi-box-arrow-up-right" ></i></a>
    </div>
  </div>
  <div className="card-body">
    <h5 className="card-title fw-bold mb-1">{ele.name}</h5>
    <p className="text-muted small mb-3">Full Stack <b>MERN</b> Application</p>
    <p className="card-text">{ele.description}.</p>
    <div className="mt-3">
      <span className="badge bg-primary me-1 tech-badge">React</span>
      <span className="badge bg-success me-1 tech-badge">Node.js</span>
      <span className="badge bg-info me-1 tech-badge">MongoDB</span>
      <span className="badge bg-secondary tech-badge">Express</span>
    </div>
  </div>
</div>

        </div>
            </>
        )
    })
 }
    </div>
</div>



</section>
 </div>


  )
}

export default Careosal
