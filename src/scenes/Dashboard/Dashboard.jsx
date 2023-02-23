import React from 'react'
import Header from './Header'
import Planner from './Planner'
import './Dashboard.css'
import MyGroups from './MyGroups'

function Dashboard() {
  return (
    <div>
      <Header />
      <Planner />
      {/* <MyGroups /> */}
    </div>
  )
}

export default Dashboard