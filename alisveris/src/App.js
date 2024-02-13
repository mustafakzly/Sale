import Navbar from './components/navbar/navbar.js';
import Body from './components/body/body.js';
import Footer from './components/footer/footer.js';
import Login from './components/login/login.js';
import Signup from './components/signup/signup.js';
import Jewelry from './components/store/jewelry.js';
import Market from './components/store/market.js';
import Electronic from './components/store/electronic.js';
import Stationary from './components/store/stationary.js';
import Toy from './components/store/toy.js';
import Shoe from './components/store/shoe.js';
import Textile from './components/store/textile.js';
import Appliances from './components/store/appliances.js';
import Furniture from './components/store/furniture.js';
import Sport from './components/store/sport.js';
import Cosmetic from './components/store/cosmetic.js';
import { Routes , Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Body />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/signup"  element={<Signup />} />
        <Route path="/jewelry"  element={<Jewelry />} />
        <Route path="/market"  element={<Market />} />
        <Route path="/electronic"  element={<Electronic />} />
        <Route path="/stationary"  element={<Stationary />} />
        <Route path="/toy"  element={<Toy />} />
        <Route path="/shoe"  element={<Shoe />} />
        <Route path="/textile"  element={<Textile />} />
        <Route path="/appliances"  element={<Appliances />} />
        <Route path="/furniture"  element={<Furniture />} />
        <Route path="/sport"  element={<Sport />} />
        <Route path="/cosmetic"  element={<Cosmetic />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
