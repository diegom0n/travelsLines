import "./Footer.css"
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Trans Lines</li>
                <li className="fListItem">Conócenos</li>
                <li className="fListItem">Contacto</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Trans Lines</li>
                <li className="fListItem">Conócenos</li>
                <li className="fListItem">Contacto</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Trans Lines</li>
                <li className="fListItem">Conócenos</li>
                <li className="fListItem">Contacto</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Trans Lines</li>
                <li className="fListItem">Conócenos</li>
                <li className="fListItem">Contacto</li>
            </ul>
            
        </div>
        <div className="bottom">
        <div className="left">
            <div className="fText">Copyright © 2023 Trans Lines.</div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}

export default Footer