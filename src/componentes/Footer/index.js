import './style.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="p" />
      <p>
        <div>
          <Link to="">
            <BsTelephone />
          </Link>
        </div>
        <div>
          <Link to="">
            <MdOutlineAlternateEmail />
          </Link>
        </div>
        <div>
          <Link to="https://instagram.com/atelieasiluminadas">
            <BsInstagram />
          </Link>
        </div>
        <Link to="https://facebook.com/atelieasiluminadas">
        <FaFacebookSquare />
        </Link>
      </p>
      <div />
    </footer>
  )
}
