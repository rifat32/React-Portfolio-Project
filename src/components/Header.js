import React from 'react'
import { Link } from "react-router-dom";
function Header() {
    return (
      <div>
          <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
          <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img style={{height:'130px'}} src="assets/img/profile-img.jpg" alt="Me" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">RIFAT AL-ASHWAD</a></h1>
        <div className="social-links mt-3 text-center">
          <a rel="noopener noreferrer" href="https://www.facebook.com/masterrifatalashwad/" target='_blank' className="twitter"><i className="bx bxl-twitter"></i></a>
          <a rel="noopener noreferrer" href="https://www.facebook.com/masterrifatalashwad/"  target='_blank' className="facebook"><i className="bx bxl-facebook"></i></a>
          <a rel="noopener noreferrer" href="https://www.facebook.com/masterrifatalashwad/" target='_blank' className="instagram"><i className="bx bxl-instagram"></i></a>
          <a rel="noopener noreferrer" href="https://www.facebook.com/masterrifatalashwad/" target='_blank' className="google-plus"><i className="bx bxl-skype"></i></a>
          <a rel="noopener noreferrer" href="https://www.facebook.com/masterrifatalashwad/" target='_blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
          <li className="active"><Link to="/#hero"><i className="bx bx-home"></i> <span>Home</span></Link></li>
          <li><Link to="/#about"><i className="bx bx-user"></i> <span>About</span></Link></li>
          <li><Link to="/#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
          <li><Link to="/#portfolio"><i className="bx bx-book-content"></i> Portfolio</Link></li>
          <li><Link to="/#services"><i className="bx bx-server"></i> Services</Link></li>
          <li><Link to="/#contact"><i className="bx bx-envelope"></i> Contact</Link></li>

        </ul>
      </nav>
      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

    </div>
  </header>
      </div>
        
    )
}

export default Header
