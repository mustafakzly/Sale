import React, { useState } from "react";
import "../../styles/signup/signup.css";
import SignupLogo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Üyelik sözleşmesini kabul etmelisiniz.");
      return;
    }

    try {
      const response = await fetch("http://192.168.202.128:1337/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.jwt) {
        // Başarılı kayıt, kullanıcıyı anasayfaya yönlendirin.
        history.push("/");
      } else {
        // Kayıt başarısız, bir hata mesajı gösterin.
        alert("Kayıt sırasında bir hata oluştu. Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (error) {
      console.error("Kayıt işlemi sırasında bir hata oluştu", error);
      alert("Kayıt işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  };

  return (
    <div className="signups">
      <NavLink to="/">
        <img src={SignupLogo} alt="Signup Logo" />
      </NavLink>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Yeni Üyelik</h1>
        <div className="items">
        <div>
            <span>Email</span>
          </div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="items">
        <div>
            <span>Şifre</span>
          </div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifre" />
        </div>
        <div className="items2">
        <span>Üyelik sözleşmesini kabul ediyorum.</span>
          <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
          
        </div>
        <div className="signup-btn">
          <NavLink to="/">
            <button className="cancel" type="button">İptal</button>
          </NavLink>
          <button className="accept" type="submit">Kayıt Ol</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
