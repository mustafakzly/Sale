import '../../styles/footer/footer-top.css';
import Logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
function Footertop() {
    return ( 
        <div className='footer-top'>
            <NavLink to="/">
             <img src={Logo} alt=''/>
            </NavLink>
        </div>
     );
}

export default Footertop;