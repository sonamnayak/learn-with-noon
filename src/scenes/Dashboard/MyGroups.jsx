import React from 'react'
import GroupCard from './Components/GroupCard'
import PlannerCard from './Components/PlannerCard'
import Profile from './Components/Profile'

const MyGroups = () => {
    return (
        <div className="group">
            <Profile className="profile" />
            <div className="group-cards">
                <div className="group-head">
                    <img src="" alt="group" />
                    <h3>
                        My Groups
                    </h3>
                </div>
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
            </div>
        </div>
    )
}

export default MyGroups