import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../componentes/Header'
import { LayoutComponents } from '../../componentes/LayoutComponents'
import axios from 'axios'
import { useForm } from 'react-hook-form'

// TELA DE LOGIN - TELA EM ANDAMENTO 
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
    alert(data.email + '\n' + data.senha)

    const api = axios.create({
      baseURL: 'http://localhost:8000',
    })

    api
      .post('/login', {
        email: data.email,
        password: data.senha,
      })

      .then(function (data) {
        console.log(data)
      })
      .catch(function (e) {
        console.log(e)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <Header />
      <LayoutComponents>
        <p>
          <span className="login-form-title">Login</span>
        </p>
        <span className="login-form-title"></span>

        {/* CAMPO EMAIL */}
        <div className="wrap-input">
          <input
            {...register('email')}
            className={email !== '' ? 'has-val input' : 'input'}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        {/* CAMPO SENHA */}
        <div className="wrap-input">
          <input
            {...register('senha')}
            className={senha !== '' ? 'has-val input' : 'input'}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        {/* BOTÃO DE LOGIN */}
        <button className="area-botao" onClick={() => navigate('/')}>
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
