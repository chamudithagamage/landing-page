import React from 'react'
import './Background.css'
import video1 from '../../Assets/beach2.mp4'
import image1 from '../../Assets/beach.jpg'
import image2 from '../../Assets/trees.jpg'
import image3 from '../../Assets/surf.jpg'
import image4 from '../../Assets/hawai.jpg'

const Background = ({playStatus,heroCount}) => {
  if(playStatus){
    return(
      <video className = 'background' autoplay loop muted>
        <source src = {video1} type='video/mp4'/>
      </video>
        )
    }
    else if(heroCount === 0)
      {
      return <img src = {image1} className='background' alt=''/>
      }
      else if(heroCount === 1)
      {
      return <img src = {image2} className='background' alt=''/>
      }
      else if(heroCount === 2)
      {
        return <img src = {image3} className='background' alt=''/>
      }
      else if(heroCount === 3)
      {
        return <img src = {image4} className='background' alt=''/>
      }
      
    }
export default Background
