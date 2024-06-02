import React from 'react'
import a from './images/favicon.ico'

export default function Footer() {
  return (
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom" style={{margin:"0px"}}>
  <div class="container-fluid">
    <img src={a} alt='React Logo' height={100} />
    <span style={{color:"#61dbfb",marginLeft:"-10px",fontSize:"25px",fontWeight:"bold"}}>React Task</span>
    <span style={{color:"#61dbfb",marginLeft:"900px",fontSize:"20px"}}>Copyright &copy; 2019. All Rights Reserved</span>
  </div>
</nav>
    </div>
  )
}
