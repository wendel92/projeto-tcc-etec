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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const onSubmit = (data) => {
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

    // VALIDAÇÃO DE CAMPOS
    if (
      data.nome === '' ||
      data.cpf === '' ||
      data.telefone === '' ||
      data.email === '' ||
      data.senha === ''
    )
    console.log(watch('nome '))
    console.log(watch('cpf '))
    console.log(watch('telefone '))
    console.log(watch('email '))
    console.log(watch('senha '))

    {
      swal({
        title: 'Ops!',
        text: 'Preencha todos os campos',
        icon: 'warning',
        button: 'OK',
        // timer: 2000,
      })
    }

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

  return (
    // CAMPOS DE CADASTRO
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <Header />
      <LayoutComponents>
        <p>
          <span className="login-form-title">Cadastre-se</span>
        </p>
        <span className="login-form-title"></span>

        {/* CAMPO NOME */}
        <span className="field">Nome*</span>
        <div className="wrap-input inputIn">
          <input
            pattern="^[a-zA-Z,ã,é ]*$"
            {...register('nome', { required: true })}
            className={nome !== '' ? 'has-val input' : 'input'}
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: João da Silva"
          />
          {errors.nome && (
            <span className="field-nome">Preencha o campo NOME*</span>
          )}
        </div>

        {/* Campo CPF */}
        <span className="field">CPF*</span>
        <div className="wrap-input inputIn">
          <InputMask
            pattern="[0-9,.,-]+"
            {...register('cpf', { required: true })}
            mask="999.999.999-99"
            maskChar={null}
            className={cpf !== '' ? 'has-val input' : 'input'}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Ex: 000.000.000-00"
          />
          {errors.cpf && (
            <span className="field-cpf">Preencha o campo CPF*</span>
          )}
        </div>

        {/* Campo Telefone */}
        <span className="field">Telefone*</span>
        <div className="wrap-input inputIn">
          <InputMask
            {...register('telefone', { required: true })}
            pattern="[(,),0-9,.,- ]+"
            mask="(99) 99999-9999"
            maskChar={null}
            className={telefone !== '' ? 'has-val input' : 'input'}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Ex: (00) 00000-0000"
          />
          {errors.telefone && (
            <span className="field-telefone">
              Preencha o campo TELEFONE*
            </span>
          )}
        </div>

        {/* Campo email */}
        <span className="field">Email*</span>
        <div className="wrap-input inputIn">
          <input
            pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            {...register('email', { required: true })}
            className={email !== '' ? 'has-val input' : 'input'}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex: nome.sobrenome@dominio.com"
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
            placeholder="Ex: ******"
          />
          {errors.senha && (
            <span className="field-senha">Preencha o campo SENHA*</span>
          )}
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
