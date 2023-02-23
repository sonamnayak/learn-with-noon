import React, { useState } from 'react'
import img from '../../assets/Frame 626199welcome.svg'
import lock from '../../assets/lock_24px.svg'
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { authentication } from '../../Firebase/Firebase';
import VerificationCode from './VerificationCode';
import { useNavigate } from 'react-router-dom'


const WelcomeBack = () => {

  const [phone_number, setPhone_number] = useState("")
  const [otpsent, setotpsent] = useState(false)

  const navigate = useNavigate();

  const requestOTP = async (e) => {

    const phoneNumber = `+91${phone_number}`
    console.log(phoneNumber)
    generateRecaptcha();
    const appVerifier = window.recaptchaVerifier;


    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        setotpsent(true)
      }).catch((error) => {
        console.log(error)
      })


  }
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        //   onSignInSubmit();
      }
    }, authentication);

  }

  const otp = () => {
    console.log(phone_number)
  }

  return (
    <>
      {otpsent === false ? <>
        <div className="welcome">
          <div className="left-img">
            <img src={img} alt="leftImg" />
          </div>

          <div className="welcome-desc">
            <div className="box1">
              <div className="back" onClick={() => navigate("/")}><i className="fa-solid fa-angle-left"></i>Back</div>
              <div className="onboarding">
                <p>Yaaaaaaa! welcome</p>
                <h5>Onboarding</h5>
              </div>
            </div>
            <h2>Welcome back</h2>
            <p>Login with your number to continue and start learning from the masters from your field</p>
            <label htmlFor="phone">Phone number</label> <br />
            <div className="phone-number">
              <div className="num-code">+91</div>
              <input type="number" name="" id="phone" placeholder="Enter Phone Number" value={phone_number} onChange={(e) => { setPhone_number(e.target.value) }} />
            </div>
            <button onClick={() => { requestOTP() }}>Send OTP for verification</button>
            <div className="secure"><img src={lock} alt="lock" />Your Info is safely secured</div>
          </div>
          <div id="recaptcha-container"></div>

        </div>
      </> :
        <>
          <VerificationCode />
        </>
      }


    </>

  )
}

export default WelcomeBack