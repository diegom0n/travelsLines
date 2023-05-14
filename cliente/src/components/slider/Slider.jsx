import React, { useState } from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    "https://i.pinimg.com/originals/3e/2a/f6/3e2af664e061013a3d05aa99fa20c1d4.jpg",
    "https://the-vet.co/wp-content/uploads/2012/10/Pet-travel-touch-up.jpg",
    "https://wallpapercave.com/wp/wp10653831.jpg",
  ];


  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
      </div>
    </div>
  )
}

export default Slider