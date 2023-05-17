import "./navbar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="../src/assets/logo_texto_800px.png" alt="" className="logoText"/>
        <div className='navContainer'>
            <div className='navItems'>
              <span className="contacto">
              +56 2 2222 2222
              </span>
                <div className="navButton">
                  <Link className="link" to ="/login">
                    <HailRoundedIcon/>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar