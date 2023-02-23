import React from 'react'
import './Dashboard.css'
import logo from '../../assets/noon academy.svg'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        <nav>
                <img src={logo} alt="" />
                <section className='p-feild'>
                    <div className="planner-feild">
                        <img src="" alt="Planner" />
                        <span>Planner</span>
                    </div>
                    <div className="planner-feild">
                        <img src="" alt="Planner" />
                        <span>My groups</span>
                    </div><Link to={"/dashboard/discover"} className="planner-feild">
                        <img src="" alt="Planner" />
                        <span>Discover</span>
                    </Link>
                </section>

                <section className="search">
                    <input type="text" />
                </section>
                <section className='nav-end'>
                    <div id="notification">
                        <img src="" alt="nf" />
                    </div>
                    <div id="profile">
                        <img src="" alt="profile" />
                        <span>Name of stud</span>
                    </div>
                </section>
        </nav>
    </div>
  )
}

export default Header