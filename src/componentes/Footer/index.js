import './style.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="p" />
      <p>
        <div>
          <BsTelephone />
        </div>
        <div>
          <MdOutlineAlternateEmail />
        </div>
        <div>
          <BsInstagram />
        </div>
        <FaFacebookSquare />
      </p>
      <div />
    </footer>
  )
}
