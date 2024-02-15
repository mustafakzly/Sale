import "../../styles/navbar/nav-bottom.css";
import { NavLink } from 'react-router-dom';

function Navbottom() {
    return ( 
        <div className="navbar-bottom">
            <NavLink to='/jewelry'>
                Takı
            </NavLink>
            <NavLink to='/market'>
                Market
            </NavLink>
            <NavLink to='/electronic'>
                Elektronik
            </NavLink>
            <NavLink to='/stationary'>
                Kırtasiye
            </NavLink>
            <NavLink to='/toy'>
                Oyuncak
            </NavLink>
            <NavLink to='/shoe'>
                Ayakkabı
            </NavLink>
            <NavLink to='/textile'>
                Tekstil
            </NavLink>
            <NavLink to='/appliances'>
                Beyaz Eşya
            </NavLink>
            <NavLink to='/furniture'>
                Mobilya
            </NavLink>
            <NavLink to='/sport'>
                Spor
            </NavLink>
            <NavLink to='/cosmetic'>
                Kozmetik
            </NavLink>
        </div>
     );
}

export default Navbottom;
