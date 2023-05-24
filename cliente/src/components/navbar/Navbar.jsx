import "./navbar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <Link className="link" to ="/">
          <span className="logoText">TRAVELSLINES</span>
        </Link>
      </div>
        <div className='navContainer'>
            <div className='navItems'>
              <span className="contacto">
              +56 9 5347 0232 | +56 9 7449 2861
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