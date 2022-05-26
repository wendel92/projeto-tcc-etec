import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutComponents } from '../../componentes/LayoutComponents'
import Header from '../../componentes/Header'
import axios from 'axios'
// import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import swal from 'sweetalert'

export default function Register() {
  const { register, handleSubmit } = useForm({ mode: 'onSubmit' })
  const [showIcon, setShowIcon] = useState(false)
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const onSubmit = (data) => {
    // format the cpf field in string
    data.cpfFormated = data.cpf.replace(/\D/g, '')
    data.phoneFormated = data.telefone.replace(/\D/g, '')

    const api = axios.create({
      baseURL: 'http://localhost:8000',
    })

    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Max-Age': '86400',
      },
    }

    api.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    api.defaults.headers.post['Access-Control-Allow-Methods'] = 'POST, GET'
    api.defaults.headers.post['Access-Control-Allow-Headers'] =
      'OPTIONS,Accept,Authorization, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Header'
    api.defaults.headers.post['Access-Control-Max-Age'] = '86400'

    // Validate input filling
    if (
      data.nome === '' ||
      data.cpf === '' ||
      data.telefone === '' ||
      data.email === '' ||
      data.senha === ''
    ) {
      swal({
  
        title: 'Ops!',
        text: 'Preencha todos os campos',
        icon: 'warning',
        button: 'OK',
        timer: 2000,
      })
    } else {
      api
        .post('/cadastrarCliente', {
          name: data.nome,
          cpf: data.cpfFormated,
          phone: data.phoneFormated,
          email: data.email,
          password: data.senha,
        })
        .then(function (data) {
          console.log(data)
        })
        .catch(function (e) {
          console.log(e)
        })

      setNome('')
      setCpf('')
      setTelefone('')
      setEmail('')
      setSenha('')

      swal({
        title: 'Parabéns!',
        text: 'Cadastro realizado com sucesso',
        icon: 'success',
        button: 'OK',
        timer: 3000,
      })
    }
  }

  return (
    // CAMPOS DE CADASTRO
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <Header />
      <LayoutComponents>
        <p>
          <span className="login-form-title">Cadastre-se</span>
        </p>
        <span className="login-form-title"></span>

        {/* register your input into the hook by invoking the "register" function */}

        {/* CAMPO NOME */}

        <div className="wrap-input inputIn">
          <input
            pattern="[a-zA-Z,ã, ã]+"
            {...register('nome')}
            className={nome !== '' ? 'has-val input' : 'input'}
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <span className="focus-input" data-placeholder="Nome:"></span>
        </div>

        {/* Campo CPF */}

        <div className="wrap-input inputIn">
          <InputMask
            pattern="[0-9,.,-]+"
            {...register('cpf')}
            mask="999.999.999-99"
            maskChar={null}
            className={cpf !== '' ? 'has-val input' : 'input'}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <span className="focus-input" data-placeholder="CPF:"></span>
        </div>

        {/* Campo Telefone */}

        <div className="wrap-input inputIn">
          <InputMask
            {...register('telefone')}
            mask="(99) 99999-9999"
            maskChar={null}
            className={telefone !== '' ? 'has-val input' : 'input'}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <span
            className="focus-input"
            data-placeholder="Telefone/Celular:"
          ></span>
        </div>

        {/* Campo email */}

        <div className="wrap-input inputIn">
          <input
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            {...register('email')}
            className={email !== '' ? 'has-val input' : 'input'}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email:"></span>
        </div>

        {/* Campo Senha */}

        <div className="wrap-input inputIn">
          <input
            {...register('senha')}
            className={senha !== '' ? 'has-val input' : 'input'}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha:"></span>
        </div>

        <button className="area-botao">Cadastre-se</button>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </LayoutComponents>
    </form>
  )
}
