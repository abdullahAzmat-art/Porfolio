import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <nav className="navbar container navbar-expand-lg  addthecolro">
  <div className="container">
    <a className="navbar-brand navrlogo" href="/">Porfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars ionskoset"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active tagskoset" aria-current="page" href='/' >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active tagskoset"  href='/about'  >About-us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active tagskoset"  href='/project'  >Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active tagskoset"  href='/contact'  >Contact-Us</a>
        </li>
   
      </ul>

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
