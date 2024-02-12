import '../../styles/footer/footer-center.css';
import { NavLink } from 'react-router-dom';
function Footercenter() {
    return (
        <div className='footer-center'>
            <div className='item'>
                <h2>Kurumsal</h2>
                <NavLink to="/">
                    İletişim
                </NavLink>
                <NavLink to="/">
                    Havale Bildirim Formu
                </NavLink>
                <NavLink to="/">
                    Sipariş Sorgula
                </NavLink>
                <NavLink to="/">
                    Kargo Takibi
                </NavLink>
            </div>
            <div className='item'>
            <h2>Yardım</h2>
                <NavLink to="/">
                    Yardım Merkezi
                </NavLink>
                <NavLink to="/">
                    Sık Sorulan Sorular
                </NavLink>
                <NavLink to="/">
                    Sipariş
                </NavLink>
            </div>
            <div className='item'>
            <h2>Alışveriş</h2>
                <NavLink to="/">
                    Satış Sözleşmesi
                </NavLink>
                <NavLink to="/">
                    Gizlilik ve Güvenlik
                </NavLink>
                <NavLink to="/">
                    İptal İade Şartları
                </NavLink>
                <NavLink to="/">
                    KVKK Bildirimi
                </NavLink>
            </div>
            <div className='item'>
            <h2>Bilgi</h2>
                <NavLink to="/">
                    Blog
                </NavLink>
                <NavLink to="/">
                    Kampanyalar
                </NavLink>
                <NavLink to="/">
                    İletişime Geç
                </NavLink>
            </div>
            <div className='item'>
            <h2>Üyelik</h2>
                <NavLink to="/">
                    Yeni Üyelik
                </NavLink>
                <NavLink to="/">
                    Üye Girişi
                </NavLink>
                <NavLink to="/">
                    Şifremi Unuttum
                </NavLink>
            </div>
        </div>
    );
}

export default Footercenter;