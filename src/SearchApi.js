// import React, { useState } from 'react'
// import Navbar from './Navbar'
// // import Footer from './Footer'
// import axios from "axios"


// export default function SearchApi() {
//     const[a,setimg]= useState("");
//     const[r,setabc]= useState([]);

//     let Searchimg=()=>{
//         axios 
//         .get(
//             `https://api.unsplash.com/search/collections?page=1&query=${a}&client_id=oYpGfOyfPG5Gy8DL_6fdn7YgBTTyyxw0xYeMYoDRgC8`
//         )
//         .then((response)=>{
//             console.log(response);
//             setabc(response.data.results)
//         }
//       )
//     }
//   return (
//     <div>
//         <Navbar/>
//         <br/><br/><h1 style={{textAlign:"center"}}>Search Image</h1>
//         <input type="text" className="form-control mt-3" placeholder="" onChange={(e)=>{setimg(e.target.value)}} style={{height:"60px", width:"500px",marginLeft:"480px",border:"2px solid black"}}/> 
//         <br/><button className='btn btn-primary' onClick={Searchimg} style={{height:"60px",width:"100px",fontSize:"25px",marginLeft:"690px"}}>Save</button>
       
//         {r.map((s)=>{
//             console.log(r)
//                 return(
//                       <img src={s.urls.full} alt='images'/>
//                 )
//             })}
        
        
//         {/* <h1>{a}</h1> */}
//         {/* <Footer/> */}
//     </div>
//   )
// }


import React from "react";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from './Navbar'

const SearchApi = () => {
  const [p, setphoto] = useState("");
  const [results, setResult] = useState([]);

  let Changephoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${p}&client_id=BNPwD8SFKkW822U4y2iC5JOCaL2-At2BZbx6ae-6P9M`
      )
      .then((response) => {
        console.log(response);
        setResult(response.data.results);
      });
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: "7rem 0 10rem 0",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <h1 style={{textAlign:"center"}}>Search Image</h1>
        <input type="text" className="form-control mt-3" placeholder="" onChange={(e)=>{setphoto(e.target.value)}} style={{height:"60px", width:"500px",marginLeft:"20px",border:"2px solid black"}}/> 
        <br/><button className='btn btn-primary' onClick={Changephoto} style={{height:"60px",width:"100px",fontSize:"25px",marginLeft:"-10px"}}>Save</button><br/>

        <ul
          style={{
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {results.map((val) => {
            return (
              <motion.li
                whileHover={{
                  rotate: 360,
                  scale: 1.5,
                  transition: { duration: 1 },
                }}
                style={{ display: "inline-block" }}
              >
                <img src={val.urls.small} height={200} width={200} alt="xyz" />
              </motion.li>
            );
          })}
        </ul>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default SearchApi;

