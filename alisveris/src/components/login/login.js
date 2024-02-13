import '../../styles/login/login.css'
import { NavLink } from 'react-router-dom';
import Loginlog from '../../assets/logo.png';
function Login() {
    return (
        <div className='login'>
            <NavLink to="/">
                <img src={Loginlog} alt='' />
            </NavLink>
            <form className='form'>
                <h1>Giriş Yap</h1>
                <div className='log'>
                    <input type='email'  placeholder='E-mail'/>
                    <input type='password' placeholder='Password' />
                </div>
                <div className='re'>
                    <div className='remember'>
                        <input type='checkbox' />
                        <span>Beni Hatırla</span>
                    </div>
                    <div className='reset'>
                        <NavLink to="">
                            Sifremi Unuttum
                        </NavLink>
                    </div>
                </div>

                <div className='login-btn'>
                    <button>Giriş Yap</button>
                </div>
                <div className='signup'>
                <h1>Henüz Üye Değil Misiniz?</h1>
                <NavLink to="/signup">
                    <button>Hemen Üye Ol</button>
                </NavLink>
            </div>
            </form>
            
        </div>
    );
}

export default Login;