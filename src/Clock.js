import React, { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

export default function Clock() {
    let d=new Date().toLocaleTimeString();
    let[r,setabc]=useState(d);
    let xyz=()=>{
        let y=new Date().toLocaleTimeString();
        setabc(y)
    }
    setInterval(xyz,1000)

    let date=new Date().toLocaleDateString();
    let msg=" "
    let h=new Date().getHours();
    if(h>=1 && h<=12)
    {
        msg="Good Morning"
    }
    else if(h>=13 && h<=17)
    {
        msg="Good AfterNoon"
    }
    else if(h>=18 && h<=21)
    {
        msg="Good Evening"
    }
    else{
        msg="Good Night"
    }
  return (
    <div>
        <Navbar/>
        <br/><br/><br/><br/><h1 style={{textAlign:"center",fontSize:"35px",fontWeight:"bolder",fontFamily:'cursive'}}>Digital Clock</h1>
        <br/><br/><div style={{height:"300px",width:"500px",backgroundColor:"#61dbfb",borderRadius:"10px",textAlign:"center",marginLeft:"500px"}}>
           <br/><br/> <h2  style={{fontSize:"35px",fontWeight:"bolder",fontFamily:'cursive'}}>{date}</h2>
           <br/><br/><h2 style={{fontSize:"55px",fontWeight:"bolder",fontFamily:'cursive'}}>{r}</h2>
           <br/><br/> <h1 style={{fontSize:"35px",fontWeight:"bolder",fontFamily:'cursive'}}>{msg}</h1>
        </div>
        {/* <Footer/> */}
    </div>
  )
}
