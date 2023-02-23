import React from 'react'
import PlannerCard from './Components/PlannerCard'
import Profile from './Components/Profile'

const Planner = () => {
    return (
        <div className="planner">
            <Profile className="profile" />
            <div className="planner-cards">
                <h3>
                    Planner
                </h3>
                <PlannerCard />
                <PlannerCard />
                <PlannerCard />
                <PlannerCard />
                <PlannerCard />
                <PlannerCard />
                <PlannerCard />
                <PlannerCard />
                <PlannerCard />
                <PlannerCard />
            </div>
        </div>
    )
}

export default Planner