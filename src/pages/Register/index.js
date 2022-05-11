import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutComponents } from '../../componentes/LayoutComponents'
import Header from '../../componentes/Header'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Register() {
  const { register, handleSubmit } = useForm({ mode: 'onSubmit' })
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const CpfCnpjMask = (v) => {
    v = v.replace(/\D/g, '')

    if (v.length > 11) {
      v = v.replace(/^(\d{2})(\d)/, '$1.$2')
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')
      v = v.replace(/(\d{4})(\d)/, '$1-$2')
    } else {
      v = v.replace(/(\d{3})(\d)/, '$1.$2')
      v = v.replace(/(\d{3})(\d)/, '$1.$2')
      v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    }

    return v
  }

  const formatPhone = (v) => {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
    };

  const onSubmit = (data) => {
    alert(
      data.nome + '\n' + data.cpf + '\n' + data.telefone + '\n' + data.email
      // +
      // '\n' +
      // data.senha
    )

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

    api
      .post('/cadastrarCliente', {
        name: data.nome,
        cpf: data.cpf,
        phone: data.telefone,
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
    /* "handleSubmit" validará as entradas antes de chamar a função "onSubmit" */

    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <Header />
      <LayoutComponents>
        <p>
          <span className="login-form-title">Cadastre-se</span>
        </p>
        <span className="login-form-title"></span>

        {/* Campo Nome */}
        <div className="wrap-input">
          <input
            {...register('nome')}
            className={nome !== '' ? 'has-val input' : 'input'}
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        {/* Campo CPF */}

        <div className="wrap-input">
          <input
            {...register('cpf')}
            className={cpf !== '' ? 'has-val input' : 'input'}
            type=""
            value={cpf}
            onChange={(e) => {
              let val = CpfCnpjMask(e.target.value)
              setCpf(val)
            }}
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
            onChange={(e) => {let val = formatPhone(e.target.value);
            setTelefone(val)}}
          />
          <span className="focus-input" data-placeholder="Telefone"></span>
        </div>

        {/* Campo email */}
        <div className="wrap-input">
          <input
            {...register('email')}
            className={email !== '' ? 'has-val input' : 'input'}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setSenha(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        {/* Botão  de Cadastro */}
        <button className="area-botao">Cadastre-se</button>

        <div className="text-center">
          <span className="txt1">
            <p>Já possui conta?</p>
          </span>
          <Link className="txt2" to="/login">
            <p>Acessar com Email e Senha.</p>
          </Link>
        </div>
      </LayoutComponents>
    </form>
  )
}
