import React from 'react'
import './Components.css'

const GroupCard = () => {
    return (
        <div>
            <div className="group-card">
                <div className="group-left">
                    <div className="group-profile-img">
                        <img src="" alt="img" />
                    </div>
                </div>
                <div className="group-center">
                    <div className="group-center-div-1">
                        <img src="" alt="icon" />
                        <button>Qudrat</button>
                        <p>Lorem, ipsum.</p>
                    </div>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <div>
                        <img src="" alt="icons" />
                        <p>619 student</p>
                    </div>
                </div>
                <div className="group-right">
                    <i className="fa-solid fa-circle-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

export default GroupCard