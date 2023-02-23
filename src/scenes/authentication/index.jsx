import React from 'react'
import './index.css'
import Platform from './Platform'
import WelcomeBack from './WelcomeBack'
import VerificationCode from './VerificationCode'
import Avatar from './Avatar'
import About from './About'

const index = () => {
  return (
    <div>
        <Platform />
        <WelcomeBack />
        <VerificationCode />
        <Avatar />
        <About />
    </div>
  )
}

export default index