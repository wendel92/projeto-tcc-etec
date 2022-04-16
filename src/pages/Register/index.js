import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutComponents } from '../../componentes/LayoutComponents';
import Header from '../../componentes/Header'; /* IMPORTAÇÃO DO COMPONENTE HEADER NA TELA DE CADASTRO */
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmit = data => {
    alert(data.name + '\n' + data.email + '\n' + data.password);
    var response = axios.post('')
    .then(function(data){
      console.log(data);

    }).catch(function(e){
      console.log(e)
    });

  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <Header />
      <LayoutComponents>
      <p><span className="login-form-title" >Cadastre-se</span></p>
        <span className="login-form-title"></span>
        {/* register your input into the hook by invoking the "register" function */}
        
        {/* Campo Nome */}
        <div className="wrap-input">
          <input
            {...register('name')}
            className={name !== '' ? 'has-val input' : 'input'}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>
         
         {/* Campo email */}
        <div className="wrap-input">
          <input
            {...register('email')}
            className={email !== '' ? 'has-val input' : 'input'}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
         
         {/* Campo Senha */}
        <div className="wrap-input">
          <input
            {...register('password')}
            className={password !== '' ? 'has-val input' : 'input'}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <input type="submit" />
        
        
        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </LayoutComponents>
    </form>
  );
}
