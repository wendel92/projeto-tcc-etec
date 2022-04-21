import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutComponents } from '../../componentes/LayoutComponents';
import Header from '../../componentes/Header'; /* IMPORTAÇÃO DO COMPONENTE HEADER NA TELA DE CADASTRO */
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, handleSubmit } = useForm({mode: 'onSubmit'})
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
 
    
  

  // const onSubmit = data =>{
  //   alert(data);
  //   axios.post('http://10.68.22.240:3000/cliente/cadastrarCliente')
  //   .then(function(data){
  //     console.log(data);

  //   }).catch(function(e){
  //     console.log(e)
  //   });
  //   //
  // }
    
     
  //   formState: { error },
  // } = useForm(
  //   {
  //     mode: 'onSubmit'
  //   }
  // );
  


  

  // ERRO na linha 24
  const onSubmit = data => {
    alert(data.nome + '\n' + data.email + '\n' + data.senha + '\n' + data.telefone + '\n' + data.cpf  ); 
    axios.post('http://localhost:3000/cadastrarCliente')
    .then(function(data){
      console.log(data);

    }).catch(function(e){
      console.log(e)
    });

  };

   
  //    /* axios.post('http://10.68.22.240:3000/cliente/cadastrarCliente')
  //     .then(function(data){
  //       console.log(data);
  
  //     }).catch(function(e){
  //       console.log(e)
  //     });

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
            {...register('nome')}
            className={nome !== '' ? 'has-val input' : 'input'}
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        {/* Campo CPF */}
        <div className="wrap-input">
          <input
            {...register('cpf')}
            className={cpf !== '' ? 'has-val input' : 'input'}
            type="number"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />
          <span className="focus-input" data-placeholder="CPF"></span>
        </div>

        {/* Campo Telefone */}
        <div className="wrap-input">
          <input
            {...register('telefone')}
            className={telefone !== '' ? 'has-val input' : 'input'}
            type="text"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Telefone"></span>
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
            {...register('senha')}
            className={senha !== '' ? 'has-val input' : 'input'}
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
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
