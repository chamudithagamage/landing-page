import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
// import About from './Components/Pages/About';
import About from './Components/Pages/About'
import Pricing from './Components/Pages/Pricing';
import Explore from './Components/Pages/Explore';
import Contact from './Components/Pages/Contact';




const App = () => {
  let heroData = [
    {text1:"Dive Into", text2:"Immersive Travel Experience"},
    {text1:"Indulge In", text2:"Your Dream Tour"},
    {text1:"Give Into", text2:"You Passion"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=> {
    setInterval(()=> {
      setHeroCount((count)=> {return count===2?0:count+1})
    }, 5000)
  },[])

   return (
    <div>
      <Background heroCount = {heroCount} playStatus = {playStatus}/>
        <Router>
          <Navbar/>
            <Routes>
              <Route path="./Components/Pages/About.jsx" element={<About/>} />
              {/* <Route path="./Components/Pages/Pricing.jsx" element={<Pricing/>} /> */}
              <Route path="./Components/Pages/Explore.jsx" element={<Explore/>} />
              <Route path="./Components/Pages/Contact.jsx" element={<Contact/>} />
            </Routes>
        </Router> 
      <Hero 
        setPlayStatus = {setPlayStatus}
        heroData = {heroData[heroCount]}
        heroCount = {heroCount}
        setHeroCount = {setHeroCount}
        playStatus = {playStatus}
      />
    </div>
  )
}

export default App
