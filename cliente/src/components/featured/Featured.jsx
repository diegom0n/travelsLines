import './Featured.css'
import React from 'react'


const Featured = () => {
  return (
    <div className="featuredTitle">
        <h1>Conoce nuestros vehículos</h1>
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1559050695-edde77c73609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="featuredImg" />
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1559050695-edde77c73609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="featuredImg" />
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1559050695-edde77c73609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" className="featuredImg" />
        </div>
    </div>
    </div>
  )
}

export default Featured