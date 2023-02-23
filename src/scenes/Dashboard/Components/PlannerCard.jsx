import React from 'react'
import './Components.css'

const PlannerCard = () => {
    return (
        <div className="planner-card">
            <div className="planner-left">
                <p>Tomorrow</p>
                <div><i className="fa-solid fa-clock"></i>07:30 PM</div>
            </div>
            <div className="planner-center">
                <div>
                    <button>Qudrat</button>
                    <p>Lorem, ipsum.</p>
                </div>
                <h4>Lorem ipsum dolor sit.</h4>
            </div>
            <div className="planner-right">Join Now!</div>
        </div>
    )
}

export default PlannerCard