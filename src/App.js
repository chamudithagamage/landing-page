import React, { useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


const App = () => {
  let heroData = [
    {text1:"Dive into", text2:"Immersive Travel Experience"},
    {text1:"Indulge", text2:"Your Dream Tour"},
    {text1:"Give into", text2:"you passion"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

   return (
    <div>
      <Background heroCount = {heroCount} playStatus = {playStatus}/>
      <Navbar/>
      <Hero 
        setPlayStatus = {setPlayStatus}
        heroData = {heroData}
        heroCount = {heroCount}
        setHeroCount = {setHeroCount}
        playStatus = {playStatus}
      />
    </div>
  )
}

export default App
