import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Home from './pages/home/Home';
import List from './pages/list/List';
import Servicio from './pages/Servicio/Servicio';
import Cotiza from './pages/cotiza/cotiza';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/servicio" element={<List/>}/>
        <Route path="/servicios" element={<Servicio/>}/>
        <Route path="/cotiza" element={<Cotiza/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
