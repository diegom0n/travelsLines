import "./HeaderTop.css"
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from "react-router-dom";


const HeaderTop = () => {
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                <QuestionMarkRoundedIcon className="hListIcon"/>
                    <Link className="headLink" to ="/servicios">
                        <span>Conocenos</span>
                    </Link>
                </div>
                <div className="headerListItem">
                <DirectionsCarIcon className="hListIcon"/>
                    <Link className="headLink" to ="/servicios">
                        <span>Servicios</span>
                    </Link>
                </div>
                <div className="headerListItem">
                <ArticleIcon className="hListIcon"/>
                    <Link className="headLink" to ="/servicios">
                        <span>Cotización</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop