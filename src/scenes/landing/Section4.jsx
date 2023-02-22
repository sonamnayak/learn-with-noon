import React from 'react'
import left1 from '../../assets/image 6.png'
import left2 from '../../assets/image 7.png'
import right1 from '../../assets/Group 7055.png'
import right2 from '../../assets/Group 7057.png'

const Section4 = () => {
  return (
    <div className="section-4">
        <div className="section-4-box-1">
            <h2>Get the app now</h2>
            <p>Download our mobile app or use our web app to learn socially anywhere, any time.</p>
            <div>
                <img src={left1} alt="googlePlay" />
                <img src={left2} alt="appleStore" />
            </div>
        </div>
        <div className="section-4-box-2">
            <img src={right1} alt="phone1" />
            <img className="phone" src={right2} alt="phone2" />
        </div>
    </div>
  )
}

export default Section4