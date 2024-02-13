import '../../styles/signup/signup.css';
import SignupLogo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
function Signup() {
    return (
        <div className='signups'>
            <NavLink to="/">
                <img src={SignupLogo} alt='' />
            </NavLink>
            <form className='signup-form'>
                <h1>Yeni Üyelik</h1>
                <div className='items'>
                    <div>
                        <span>Adı</span>
                    </div>
                    <div>
                        <input type='text' />
                    </div>
                </div>
                <div className='items'>
                    <div>
                        <span>Soyadı</span>
                    </div>
                    <div>
                        <input type='text' />
                    </div>

                </div>
                <div className='items'>
                    <div>
                        <span>Email</span>
                    </div>
                    <div>
                        <input type='email' />
                    </div>

                </div>
                <div className='items'>
                    <div>
                        <span>Şifre</span>
                    </div>
                    <div>
                        <input type='password' />
                    </div>

                </div>
                <div className='items2'>
                    <div>
                        <span>Cinsiyet</span>
                    </div>
                    <div className='gender'>
                        <input type='radio' id='erkek' name="sec" value='Erkek' />
                        <label for="erkek">Erkek</label>
                        <input type='radio' id='kadın' name="sec" value='Kadın' />
                        <label for="kadın">Kadın</label>
                        <input type='radio' id='belirsiz' name="sec" value='Belirsiz' />
                        <label for="belirsiz">Belirtmek istemiyorum.</label>
                    </div>

                </div>
                <div className='items'>
                    <div>
                        <span>Cep Telefonu</span>
                    </div>
                    <div>
                        <input type='phone' placeholder='(5XX) XXX XX XX' />
                    </div>
                </div>
                <div className='items2'>
                    <div>
                        <input type='checkbox'/>
                        <span>Üyelik sözleşmesini kabul ediyorum.</span>
                    </div>
                </div>
                <div className='signup-btn'>
                    <div><button className='cancel'>İptal</button></div>
                    <div><button className='accept'>Kayıt Ol</button></div>
                </div>
            </form>
        </div>
    );
}

export default Signup;