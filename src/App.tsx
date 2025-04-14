import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import Summary from './pages/Summary'
import { useEffect } from 'react'
import apiService from './api'

function App() {

  useEffect(() => {
    // Generar token al cargar la aplicación
    apiService.initializeAuthToken()
      .catch(error => console.error('Error inicializando token:', error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
