import React from 'react'
// import CardArray from './CardArray'

export default function Skill(props) {
  
    return (
      <div id="skill">
        {/* <div id="skill">
        <h1 className='skill1' style={{marginTop:"600px",backgroundColor:"#61dbfb"}}>Technical Skills</h1>
        <div className='skill2' id='skill'>
          <img className='card-img-top' src='props.i' alt='card image'/>
          <div className='card-body'>
            <h4 className='card-title'>{props.name}</h4>
            <p className='card-text'>{props.para}</p>
            <a href={props.link} className='btn btn-primary'>See Profile</a>
          </div>
        </div> 
        </div> */}
        <div className='cardarr'>
        <div className="card"  style={{width:"300px"}}>
    <img className="card-img-top" src={props.i} alt="LOGO" style={{width:"100%"}} />
    <div className="card-body">
      <h4 className="card-title">{props.name}</h4>
      <p className="card-text" style={{fontSize:"18px",fontWeight:"bold"}}>{props.para}</p>
      <a href={props.link} className="btn btn-primary">See Profile</a>
    </div>
    </div>
      </div>
      </div>
    )
  }

