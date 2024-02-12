import "../../styles/navbar/nav-bottom.css";
import { NavLink } from 'react-router-dom';

function Navbottom() {
    return ( 
        <div className="navbar-bottom">
            <NavLink to='/'>
                Takı
            </NavLink>
            <NavLink to='/'>
                Market
            </NavLink>
            <NavLink to='/'>
                Elektronik
            </NavLink>
            <NavLink to='/'>
                Kırtasiye
            </NavLink>
            <NavLink to='/'>
                Oyuncak
            </NavLink>
            <NavLink to='/'>
                Ayakkabı
            </NavLink>
            <NavLink to='/'>
                Tekstil
            </NavLink>
            <NavLink to='/'>
                Beyaz Eşya
            </NavLink>
            <NavLink to='/'>
                Mobilya
            </NavLink>
            <NavLink to='/'>
                Spor
            </NavLink>
            <NavLink to='/'>
                Kozmetik
            </NavLink>
            <NavLink to='/'>
                Popüler Kampanyalar
            </NavLink>
        </div>
     );
}

export default Navbottom;
