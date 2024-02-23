import {
  Container,
  Body,
  About,
  Login,
  Signup,
  ProductApi,
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
          path="/:categoryId/Takı"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
            </Container>
          }
        />
        <Route
          path="/:categoryId/Market"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
            </Container>
          }
        />
        <Route
          path="/:categoryId/Elektronik"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
            </Container>
          }
        />
        <Route
          path="/:categoryId/Kırtasiye"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
            </Container>
          }
        />
        <Route
          path="/:categoryId/Oyuncak"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
            </Container>
          }
        />
        <Route
          path="/:categoryId/Ayakkabı"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
            </Container>
          }
        />
        <Route
          path="/:categoryId/Tekstil"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
            </Container>
          }
        />
        <Route
          path="/:categoryId/Beyaz-Eşya"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
            </Container>
          }
        />
        <Route
          path="/:categoryId/Mobilya"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
            </Container>
          }
        />
        <Route
          path="/:categoryId/Spor"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
            </Container>
          }
        />
        <Route
          path="/:categoryId/Kozmetik"
          component={ProductApi}
          element={
            <Container>
              <ProductApi />
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
          path="/product/:productId"
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
