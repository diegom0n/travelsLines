import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home';
import List from './pages/list/List';
import Servicio from './pages/Servicio/Servicio';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/servicios" element={<List/>}/>
        <Route path="/servicios/:id" element={<Servicio/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App