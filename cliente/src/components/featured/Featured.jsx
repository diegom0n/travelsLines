import './Featured.css'
import React from 'react'
import imgMinibus from '../../assets/img/vehiculo1.2.png';
import imgMinibus2 from '../../assets/img/vehiculo3.png';
import imgMinibus3 from '../../assets/img/vehiculo4.png';
import imgJac from '../../assets/img/minibus.jpg';
import imgSuv from '../../assets/img/suv.jpg';



const Featured = () => {
  return (
    <div className="featuredTitle">
        <h1>Conoce nuestros vehículos</h1>
    <div className='featured'>
        <div className="featuredItem">
            <img src={imgMinibus} alt="" className='featuredImg1'/>
        </div>
        <div className="featuredItem">
            <img src={imgMinibus2} alt="" className='featuredImg2'/>
        </div>
        <div className="featuredItem">
            <img src={imgMinibus3} alt="" className='featuredImg3'/>
        </div>
    </div>
    </div>
  )
}

export default Featured;