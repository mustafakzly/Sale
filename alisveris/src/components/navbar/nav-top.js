import "../../styles/navbar/nav-top.css"
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import Youtube from "../../assets/youtube.png";
import Linkedin from "../../assets/linkedin.png";
import { NavLink } from 'react-router-dom';

function Navtop() {
    return ( 
        <div className = 'communication'>
            <div className = 'communication-left'>
                    <NavLink to="/about">Hakkımızda</NavLink> 
                    <NavLink to="/contact">İletişim</NavLink> 
            </div>
            <div className = 'communication-right'>
                <a href = 'www.facebook.com'><img src = {Facebook} alt = ''/></a>
                <a href = 'www.twitter.com'><img src = {Twitter} alt = ''/></a>
                <a href = 'www.instagram.com'><img src = {Instagram} alt = ''/></a>
                <a href = 'www.youtube.com'><img src = {Youtube} alt = ''/></a>
                <a href = 'www.linkedin.com'><img src = {Linkedin} alt = ''/></a>
            </div>
        </div>
     );
}

export default Navtop;
