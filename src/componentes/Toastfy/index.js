import React from 'react'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

toast.configure({})

const Promise = () => {
  toast.promise('Hello world!', { position: toast.POSITION.TOP_LEFT })
}

const Success = () => {
  toast.success('Hello world!', { position: toast.POSITION.TOP_CENTER })
}

const Info = () => {
  toast.info('Hello world!', { position: toast.POSITION.TOP_CENTER })
}
const Warn = () => {
  toast.warn('Hello world!', { position: toast.POSITION.TOP_CENTER })
}

const Error = () => {
  toast.error('Hello world!', { position: toast.POSITION.BOTTOM_CENTER })
}

const Close = () => {
  toast.close('Hello world!', { position: toast.POSITION.BOTTOM_RIGHT })
}

export default function Toastify() {
  return (
    <div>
      <button onClick={Promise}>Promise</button>
    </div>
  )
}
