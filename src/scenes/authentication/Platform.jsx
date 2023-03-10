import React from 'react'
import img from '../../assets/Frame 626199welcome.svg'
import logo from '../../assets/noon academy.svg'
import user from '../../assets/user.svg'
import briefcase from '../../assets/briefcase.svg'
import P1 from '../../assets/Polygon 1.svg'
import P2 from '../../assets/Polygon 2.svg'
import { Link } from 'react-router-dom'

const Platform = () => {
  return (
    <div className="platform">
      <div className="left-img">
        <img src={img} alt="leftImg" />
      </div>

      <div className="platform-desc">
        <img className="auth-logo" src={logo} alt="logo" />

        <h2>Select the Platform</h2>

        <p>Please select which access you are looking for.</p>

        <div className={"platform-desc-2"} >
          <div className="pentagon-img">
            <img src={P1} alt="" />
            <div className="penta-icon">
              <img src={user} alt="" />
            </div>
          </div>

          <div className="pentagon-text">
            <h3>Teacher’s Login</h3>
            <p>Personal account to manage all you activities.</p>
          </div>

          <div className="platform-icon">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <Link to={"/login/student"} >

        <div className="platform-desc-2">
          <div className="pentagon-img">
            <img src={P2} alt="" />
            <div className="penta-icon">
              <img src={briefcase} alt="" />
            </div>
          </div>
            <div className="pentagon-text">
              <h3>Student Login</h3>
              <p>Own or belong to a company, this is for you.</p>
            </div>

          <div className="platform-icon">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        </Link>

      </div>
    </div>
  )
}

export default Platform