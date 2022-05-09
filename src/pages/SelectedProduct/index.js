import './style.css'
import React from 'react'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Card from '../../componentes/Card'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SelectedProduct() {
  const navigate = useNavigate()

  return (
    <div className="product-container">
    <Header />
     <Button variant="primary" onClick={() => navigate('/')}/>
        <Card className="card-selecionado" />
    
    <Footer />
    </div>
  )
}