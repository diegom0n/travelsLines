import './Featured.css'
import React from 'react'
import imgMinibus from '../../assets/img/empresas.jpg';
import imgJac from '../../assets/img/minibus.jpg';
import imgSuv from '../../assets/img/suv.jpg';



const Featured = () => {
  return (
    <div className="featuredTitle">
        <h1>Conoce nuestros vehículos</h1>
    <div className='featured'>
        <div className="featuredItem">
            <img src={imgMinibus} alt="" />
        </div>
        <div className="featuredItem">
            <img src={imgJac} alt="" />
        </div>
        <div className="featuredItem">
            <img src={imgSuv} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Featured