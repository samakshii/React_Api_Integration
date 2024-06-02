import React from 'react'
// import Navbar from './Navbar'
import './App.css'
// import Footer from './Footer'
import Home from './Home'
// import Skill from './Skill'
import Clock from './Clock'
import {Routes,Route} from "react-router-dom"
// import { Link } from 'react-router-dom'
import SearchApi from './SearchApi'
// import Skill from './Skill'

export default function App() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Footer/> */}
      {/* <Home/> */}
      {/* <Skill/> */}
      {/* <Clock/> */}
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/Skill' element={<Skill/>}></Route> */}
          <Route path='/Clock' element={<Clock/>}></Route>
          <Route path='/SearchApi' element={<SearchApi/>}></Route>

      </Routes>


      
    </div>
  )
}
