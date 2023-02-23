import React from 'react'
import img from '../../assets/Frame 626200.svg'
import lock from '../../assets/lock_24px.svg'

const VerificationCode = () => {
    return (
        <div className="verification">
            <div className="left-img">
                <img src={img} alt="leftImg" />
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
                    <input type="number" name="" id="phone" placeholder="Enter OTP" autoComplete="off" />
                </div>
                <button>Verify</button>
                <div className="secure"><img src={lock} alt="lock" />Your Info is safely secured</div>
            </div>
        </div>
    )
}

export default VerificationCode