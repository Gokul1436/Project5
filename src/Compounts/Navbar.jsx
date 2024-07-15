import React from 'react'
import './Navbar.css'
import{Link} from "react-router-dom"

const Navbar = () => {
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <img src='src/assets/logf.png' className='logo' />
   <h5 className='logo-head'>DEZZO JEWELS</h5>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/App.jsx'>Home</Link>
        </li>
        <li class="nav-item">
        <Link to='/Topselling.jsx'>Topselling</Link>
        </li>
        
        <li class="nav-item">
        <Link to='/Womens.jsx'>Categories</Link>
        </li>
        <li className="nav-item" >
          <Link to="/About.jsx">About Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
   </>
  )
}

export default Navbar