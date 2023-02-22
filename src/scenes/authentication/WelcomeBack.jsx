import React from 'react'
import img from '../../assets/Frame 626199welcome.svg'
import lock from '../../assets/lock_24px.svg'

const WelcomeBack = () => {
    return (
        <div className="welcome">
            <div className="welcome-img">
                <img src={img} alt="authImg" />
            </div>

            <div className="welcome-desc">
                <div className="box1">
                    <div className="back"><i class="fa-solid fa-angle-left"></i>Back</div>
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
                    <input type="number" name="" id="phone" placeholder="Enter Phone Number" />
                </div>
                <button>Send OTP for verification</button>
                <div className="secure"><img src={lock} alt="lock" />Your Info is safely secured</div>
            </div>
        </div>
    )
}

export default WelcomeBack