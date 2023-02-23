import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/Frame 626200.svg'
import lock from '../../assets/lock_24px.svg'

const VerificationCode = () => {

    const [OTP, setOTP] = useState()
    const [verified, setverified] = useState(false)

const navigate = useNavigate();
    const verifyOTP = (e) => {

        console.log(OTP)
        if (OTP.length === 6) {
          let confirmationResult = window.confirmationResult;
    
          confirmationResult.confirm(OTP).then((result) => {
            // User signed in successfully.
            setverified(true)
            const user = result.user;
            console.log(user)
            navigate("/dashboard")
            
            // toast.success("Otp verified")
            // dispatch({type:"LOGIN",payload : user});
    
            // alert("user logged succesfully ")
            // navigate("/dashboard")
    
            // ...
          }).catch((err) => {
            // toast.error(err)
            // alert(error)
            // User couldn't sign in (bad verification code?)
            // ...
          });
        }
      }

  return (
    <div className="verification">
        <div className="welcome-img">
                <img src={img} alt="authImg" />
            </div>

            <div className="welcome-desc">
                <div className="box1">
                    <div className="back"><i class="fa-solid fa-angle-left"></i>Back</div>
                    <div className="onboarding">
                        <p>Almost there!</p>
                        <h5>Onboarding</h5>
                    </div>
                </div>
                <h2>Verification Code</h2>
                <p>One final step for the goals and dream that you have been waiting for.</p>
                <label htmlFor="phone">OTP</label> <br />
                <div className="phone-number">
                    <input type="number" name="" id="phone" placeholder="Enter OTP" value={OTP} onChange={(e)=>{setOTP(e.target.value)}} autoComplete="off" />
                </div>
                <button onClick={verifyOTP} >Verify</button>
                <div className="secure"><img src={lock} alt="lock" />Your Info is safely secured</div>
            </div>
        </div>
    )
}

export default VerificationCode