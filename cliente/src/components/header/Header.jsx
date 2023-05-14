import "./header.css"
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

const Header = () => {
  return (
    <div className="header">
        <span className='logo'>
            <img className="imgLogo" src="./src/assets/logo.png" alt="Travels Lines" />
        </span>
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <QuestionMarkRoundedIcon className="hListIcon"/>
                    <span>Conocenos</span>
                </div>
                <div className="headerListItem">
                    <HailRoundedIcon className="hListIcon"/>
                    <span>Solicitar Servicio</span>
                </div>
                <div className="headerListItem">
                    <LocalPhoneRoundedIcon className="hListIcon"/>
                    <span>Contacto</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header