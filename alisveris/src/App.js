import Navbar from './components/navbar/navbar.js';
import Body from './components/body/body.js';
import Footer from './components/footer/footer.js';
import Login from './components/login/login.js';
import { Routes , Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Body />} />
        <Route path="/login"  element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
