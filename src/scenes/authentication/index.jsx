import React from 'react'
import './index.css'
import Platform from './Platform'
import WelcomeBack from './WelcomeBack'
import VerificationCode from './VerificationCode'
import Avatar from './Avatar'

const index = () => {
  return (
    <div>
        <Platform />
        {/* <WelcomeBack /> */}
        {/* <VerificationCode /> */}
        <WelcomeBack />
        <VerificationCode />
        <Avatar />
    </div>
  )
}

export default index