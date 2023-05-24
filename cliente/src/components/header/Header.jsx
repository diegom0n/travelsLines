import "./header.css"
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <Link className="link" to ="/servicios">
                        <QuestionMarkRoundedIcon className="hListIcon"/>
                        <span>Conocenos</span>
                    </Link>
                </div>
                <div className="headerListItem">
                    <Link className="link" to ="/servicios">
                        <DirectionsCarIcon className="hListIcon"/>
                        <span>Servicios</span>
                    </Link>
                </div>
                <div className="headerListItem">
                    <Link className="link" to ="/servicios">
                        <LocalPhoneRoundedIcon className="hListIcon"/>
                        <span>Cotización</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header