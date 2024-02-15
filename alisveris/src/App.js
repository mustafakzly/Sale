import {
  Container,
  Body,
  About,
  Login,
  Signup,
  Jewelry,
  Market,
  Electronic,
  Stationary,
  Toy,
  Shoe,
  Textile,
  Appliances,
  Furniture,
  Sport,
  Cosmetic,
  Contact,
  Product,
} from "./components/index";

import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Body />
            </Container>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/jewelry"
          element={
            <Container>
              <Jewelry />
            </Container>
          }
        />
        <Route
          path="/market"
          element={
            <Container>
              <Market />
            </Container>
          }
        />
        <Route
          path="/electronic"
          element={
            <Container>
              <Electronic />
            </Container>
          }
        />
        <Route
          path="/stationary"
          element={
            <Container>
              <Stationary />
            </Container>
          }
        />
        <Route
          path="/toy"
          element={
            <Container>
              <Toy />
            </Container>
          }
        />
        <Route
          path="/shoe"
          element={
            <Container>
              <Shoe />
            </Container>
          }
        />
        <Route
          path="/textile"
          element={
            <Container>
              <Textile />
            </Container>
          }
        />
        <Route
          path="/appliances"
          element={
            <Container>
              <Appliances />
            </Container>
          }
        />
        <Route
          path="/furniture"
          element={
            <Container>
              <Furniture />
            </Container>
          }
        />
        <Route
          path="/sport"
          element={
            <Container>
              <Sport />
            </Container>
          }
        />
        <Route
          path="/cosmetic"
          element={
            <Container>
              <Cosmetic />
            </Container>
          }
        />
        <Route
          path="/about"
          element={
            <Container>
              <About />
            </Container>
          }
        />
        <Route
          path="/contact"
          element={
            <Container>
              <Contact />
            </Container>
          }
        />
        <Route
          path="/product"
          element={
            <Container>
              <Product />
            </Container>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
