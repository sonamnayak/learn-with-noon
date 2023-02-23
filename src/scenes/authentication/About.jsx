import React from 'react'
import img from '../../assets/Frame 626202.svg'

const About = () => {
    return (
        <div className="about">
            <div className="left-img">
                <img src={img} alt="leftImg" />
            </div>

            <div className="welcome-desc">
                <div className="box1">
                    <div className="back"><i class="fa-solid fa-angle-left"></i>Back</div>
                    <div className="onboarding">
                        <p>Let's know you better</p>
                        <h5>About</h5>
                    </div>
                </div>
                <h2>Tell us about yourself</h2>
                <p>We would like to know more about you so that we can customize your account</p>
                <form method="post" className="about-form">
                    <label htmlFor="full-name">Your fullname*</label> <br />
                    <div className="about-input">
                        <input type="text" name="" id="full-name" placeholder="Enter your name" autoComplete="off" />
                    </div>
                    <label htmlFor="e-mail">Your e-mail id*</label> <br />
                    <div className="about-input">
                        <input type="email" name="" id="e-mail" placeholder="Enter your e-mail id" autoComplete="off" />
                    </div>
                    <label htmlFor="curriculum">Your curriculum</label> <br />
                    <select className="about-input about-input-select" id="curriculum">
                        <option value="">Choose your curriculum</option>
                    </select>
                    <label htmlFor="grade">Your grade</label> <br />
                    <select className="about-input about-input-select" id="grade">
                        <option value="">Choose your curriculum</option>
                    </select>
                    <div className="agree">
                        <input type="checkbox" name="" id="check" />
                        <label htmlFor="check">I agree to terms & conditions</label>
                    </div>
                </form>
                <button>Start your journey</button>

            </div>
        </div>
    )
}

export default About