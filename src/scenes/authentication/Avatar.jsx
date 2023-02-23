import React from 'react'
import img from '../../assets/Frame 626201.svg'
import a1 from '../../assets/avatar/a1.svg'
import a2 from '../../assets/avatar/a2.svg'
import a3 from '../../assets/avatar/a3.svg'
import a4 from '../../assets/avatar/a4.svg'
import a5 from '../../assets/avatar/a5.svg'
import a6 from '../../assets/avatar/a6.svg'
import a7 from '../../assets/avatar/a7.svg'
import a8 from '../../assets/avatar/a8.svg'
import a9 from '../../assets/avatar/a9.svg'
import a10 from '../../assets/avatar/a10.svg'
import a11 from '../../assets/avatar/a11.svg'
import a12 from '../../assets/avatar/a12.svg'

const Avatar = () => {
    return (
        <div className="avatar">
            <div className="left-img">
                <img src={img} alt="leftImg" />
            </div>

            <div className="welcome-desc">
                <div className="box1">
                    <div className="back"><i class="fa-solid fa-angle-left"></i>Back</div>
                    <div className="onboarding">
                        <p>Lets make you super cool</p>
                        <h5>Select your avatar</h5>
                    </div>
                </div>
                <h2>Select your avatar</h2>
                <p>A final touch that resemble you the most in form of the character from our library</p>
                <div className="avatar-grid">
                    <img src={a1} alt="a1" />
                    <img src={a2} alt="a2" />
                    <img src={a3} alt="a3" />
                    <img src={a4} alt="a4" />
                    <img src={a5} alt="a5" />
                    <img src={a6} alt="a6" />
                    <img src={a7} alt="a7" />
                    <img src={a8} alt="a8" />
                    <img src={a9} alt="a9" />
                    <img src={a10} alt="a10" />
                    <img src={a11} alt="a11" />
                    <img src={a12} alt="a12" />
                </div>
                <button className="avatar-button">All Set</button>
            </div>
        </div>
    )
}

export default Avatar