import React, { useState } from 'react';
import "../../styles/navbar/nav-bottom.css";
import { NavLink } from 'react-router-dom';
import MenuIcon from '../../assets/menu.png';
import CloseIcon from '../../assets/close.png';

function Navbottom() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);
    return (
        <div>
            <div className={isOpen ? "navbar-overlay" : "navbar-bottom"}>
            {isOpen && (
                    <button className="close-btn" onClick={toggleMenu}>
                        <img src={CloseIcon} alt="Close"/>
                    </button>
                )}
                <NavLink to='/jewelry'onClick={closeMenu}>Takı</NavLink>
                <NavLink to='/market' onClick={closeMenu}>Market</NavLink>
                <NavLink to='/electronic' onClick={closeMenu}>Elektronik</NavLink>
                <NavLink to='/stationary' onClick={closeMenu}>Kırtasiye</NavLink>
                <NavLink to='/toy' onClick={closeMenu}>Oyuncak</NavLink>
                <NavLink to='/shoe' onClick={closeMenu}>Ayakkabı</NavLink>
                <NavLink to='/textile' onClick={closeMenu}>Tekstil</NavLink>
                <NavLink to='/appliances' onClick={closeMenu}>Beyaz Eşya</NavLink>
                <NavLink to='/furniture' onClick={closeMenu}>Mobilya</NavLink>
                <NavLink to='/sport' onClick={closeMenu}>Spor</NavLink>
                <NavLink to='/cosmetic' onClick={closeMenu}>Kozmetik</NavLink>
                
            </div>
            <div className="navbar-bottom-display">
                <button onClick={toggleMenu}><img src={MenuIcon} alt="Menu"/></button>
            </div>
        </div>
    );
}

export default Navbottom;
