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
                <NavLink to='/1/Market' onClick={closeMenu}>Market</NavLink>
                <NavLink to='/2/Takı'onClick={closeMenu }>Takı</NavLink>
                <NavLink to='/3/Elektronik' onClick={closeMenu}>Elektronik</NavLink>
                <NavLink to='/4/Kırtasiye' onClick={closeMenu}>Kırtasiye</NavLink>
                <NavLink to='/5/Oyuncak' onClick={closeMenu}>Oyuncak</NavLink>
                <NavLink to='/6/Ayakkabı' onClick={closeMenu}>Ayakkabı</NavLink>
                <NavLink to='/7/Tekstil' onClick={closeMenu}>Tekstil</NavLink>
                <NavLink to='/8/Beyaz-Eşya' onClick={closeMenu}>Beyaz Eşya</NavLink>
                <NavLink to='/9/Mobilya' onClick={closeMenu}>Mobilya</NavLink>
                <NavLink to='/10/Spor' onClick={closeMenu}>Spor</NavLink>
                <NavLink to='/11/Kozmetik' onClick={closeMenu}>Kozmetik</NavLink>
                
            </div>
            <div className="navbar-bottom-display">
                <button onClick={toggleMenu}><img src={MenuIcon} alt="Menu"/></button>
            </div>
        </div>
    );
}

export default Navbottom;
