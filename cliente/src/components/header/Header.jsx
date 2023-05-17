import "./header.css"
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';


const Header = () => {
  return (
    <div className="header">
        <div className='logo'>´
            <img src="../src/assets/logo_flecha_800px.png" alt="" className="imgLogo"/>
        </div>
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