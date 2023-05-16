import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReservationForm from '../reservationForm/ReservationForm';
import "./Slider.scss"

const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    "https://cdn.discordapp.com/attachments/981382192271859775/1106463924985024573/alternative-transportation-2178317_1280.jpg",
    "https://i.pinimg.com/originals/3e/2a/f6/3e2af664e061013a3d05aa99fa20c1d4.jpg",
    "https://the-vet.co/wp-content/uploads/2012/10/Pet-travel-touch-up.jpg",
    "https://wallpapercave.com/wp/wp10653831.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };


  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIosIcon />
        </div>
      </div>
      <div className="icons">
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider