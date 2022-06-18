import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SelectedProduct from '../pages/SelectedProduct'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exect element={<Home />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/selectedProduct" element={<SelectedProduct />} />
      </Routes>
    </BrowserRouter>
  )
}
