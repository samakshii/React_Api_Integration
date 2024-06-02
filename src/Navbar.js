import React from 'react'
import a from './images/favicon.ico'
import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'


export default function Navbar() {
  return (
    <>
   
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
   <h1 style={{color:"#61dbfb"}}> 
    <Link className="navbar-brand" to="/"><img src={a} alt='React Logo' height={100} style={{marginTop:"-30px"}}/></Link>
    React Js
   </h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav" >
        <li className="nav-item">
          <Scroll
      activeClass="active" 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={-130} 
      duration={500} 
      aria-current="page"
      className="nav-link" id='span' style={{marginLeft:"850px"}}>Home</Scroll>

        </li>
        <li className="nav-item">
        <Scroll
      activeClass="active" 
      to="skill" 
      spy={true} 
      smooth={true} 
      offset={30} 
      duration={500} 
      aria-current="page"
      
     className="nav-link" id='span' >Skills</Scroll>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#" id='span'>Link</a>
        </li>   */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" id='span'>Project</Link>
          <ul className="dropdown-menu" style={{backgroundColor:"#61dbfb"}}>
            <li><Link className="dropdown-item" to="/Clock" style={{fontSize:"22px",borderBottom:"2px solid gray"}}>Clock</Link></li>
            <li><Link className="dropdown-item" to="/SearchApi"style={{fontSize:"22px"}}>Search Api</Link></li>
            {/* <li><a className="dropdown-item" href="#">A third link</a></li> */}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}
