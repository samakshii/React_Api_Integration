import React, { Component } from 'react'
import a from './images/react.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import Skill from './Skill'
import CardArray from './CardArray'
export default class Home extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div id='home'>
        
        <div className='div1' style={{textAlign:"center"}}>
            <h1 className='ani'style={{lineHeight:"40px",marginTop:"100px",color:"#61dbfb",fontWeight:"bolder"}}>Welcome ! ! !</h1>
            <h3 style={{lineHeight:"40px"}}>I'm Interested In</h3>
            <h1 className='ani'style={{lineHeight:"40px",color:"#61dbfb",fontWeight:"bolder"}}>Front End Developer</h1>
            <h3 style={{lineHeight:"40px"}}>Speacialize in <span style={{color:"#61dbfb"}}>"React JS"</span></h3>
        </div>
        <div className='div2'>
          <img src={a} width={750} height={500} alt='React'/>
        </div>
        <h1 className='skill1'>Technical Skills</h1>
        
      </div>
      <div id='skill'>
        {CardArray.map((v)=>{
          return(
            <div>
              <Skill i={v.logo} name={v.title} para={v.description} link={v.link}/>
            </div>
          )
        })}
      </div>
        <Footer/>
      </>
    )
  }
}
