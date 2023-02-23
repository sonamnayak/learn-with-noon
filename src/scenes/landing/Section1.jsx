import React from 'react'
import rectangle from '../../assets/Rectangle 4.png'
import man from '../../assets/_Group_1.png'
import icons from '../../assets/image 8.png'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <div className="section-1">
        <div className="section-1-box-1">
            <h1>The social learning company</h1>
            <p>Our mission is to radically change the way people learn. We empower students to learn from top teachers in groups with their friends</p>
            <button>
               <Link to="/login">Start Learning</Link> 
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        <div className="section-1-box-2"></div>
        <div className="section-1-bottom">
            <img className="reactangle" src={rectangle} alt="rectangle" />
            <img className="man" src={man} alt="man" />
            <img className="icons" src={icons} alt="icons" />
        </div>
    </div>
  )
}

export default Section1