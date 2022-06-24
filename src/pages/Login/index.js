import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../componentes/Header'
import { LayoutComponents } from '../../componentes/LayoutComponents'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'


export default function Login() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const onSubmit = (data) => {
    // alert(data.email + '\n' + data.senha)

    const api = axios.create({
      baseURL: 'http://localhost:8000',
    })

    // Validate input filling
    if (data.email === '' || data.senha === '') {
      navigate('erro')
    } else {
      api
        .post('/login', {
          email: data.email,
          password: data.senha,
        })

        .then(function (data) {
          navigate('/homepage', data)
          swal({
            title: 'Login realizado com sucesso!',
            text: 'Bem vindo(a) ' + data.data.name,
            icon: 'success',
            button: 'OK',
          })

          console.log(data, 'eu estou testando o data')

          setEmail('')
          setSenha('')
        })
        .catch(function (e) {
          swal({
            title: 'Ops!',
            text: 'Email ou senha incorretos!!',
            icon: 'warning',
            button: 'OK',
          })

          console.log(e, 'VENDO O ERRO DE PERTO!!')
        })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <Header />
      <LayoutComponents>
        <p>
          <span className="login-form-title">Login</span>
        </p>
        <span className="login-form-title"></span>

        {/* Campo email */}
        <span className="field">Email*</span>
        <div className="wrap-input inputIn">
          <input
            pattern="[Aa-z0-9._%+- ]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            {...register('email', { required: true })}
            className={email !== '' ? 'has-val input' : 'input'}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex: teste@teste.com"
          />
          {errors.email && (
            <span className="field-email">Preencha o campo EMAIL*</span>
          )}
        </div>

        {/* Campo Senha */}
        <span className="field">Senha*</span>
        <div className="wrap-input inputIn">
          <input
            {...register('senha', { required: true })}
            className={senha !== '' ? 'has-val input' : 'input'}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Ex: QueMomento@123"
          />
          {errors.senha && (
            <span className="field-senha">Preencha o campo SENHA*</span>
          )}
        </div>

        {/* BOTÃO DE LOGIN */}
        <button className="area-botao" onClick={() => navigate('')}>
          Login
        </button>

        {/* TEXTO DA PARTE INFERIOR */}
        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Cadastrar-se
          </Link>
        </div>
      </LayoutComponents>
    </form>
  )
}
