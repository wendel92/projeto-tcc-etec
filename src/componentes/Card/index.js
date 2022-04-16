import './style.css';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Card() {
  const [user, setUser] = useState();
  useEffect(() => {
    api
      .get('/users/Gilles30')
      .then(response => setUser(response.data))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);
  return (
    <div className="card-container">
      <p>Card API:</p>
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
      <p>Você pode reutilizá-los, ou seja, menos código para se escrever</p>
    </div>
  );
}
