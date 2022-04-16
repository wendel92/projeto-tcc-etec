import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../componentes/Header'; //IMPORTAÇÃO DO COMPONENTE HEADER PARA A TELA DE LOGIN
import { LayoutComponents } from '../../componentes/LayoutComponents';
import axios from 'axios';
import { useForm } from 'react-hook-form';

// TELA DE LOGIN 
export default function Login() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = data => {
    alert(data.email + '\n' + data.password);
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
        <p><span className="login-form-title"> Login </span></p>
        <span className="login-form-title"></span>
        {/* register your input into the hook by invoking the "register" function */}
        
        {/* Campo email */}
        <div className="wrap-input">
          <input
            {...register('email')}
            className={email !== '' ? 'has-val input' : 'input'}
            type="text"
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
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Cadastrar-se
          </Link>
        </div>
      </LayoutComponents>
    </form>
  );
}
