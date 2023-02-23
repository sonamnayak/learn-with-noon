import React from 'react'
import NewGroups from './Components/NewGroups'
import Noonplus from './Components/Noonplus'
import Profile from './Components/Profile'
import './Dashboard.css'
function Discover() {
  return (
    <div className='discover'>
        <section>
        <Profile/>
        </section>
        <section>
        <NewGroups />
        <Noonplus />
        </section>
    </div>
  )
}

export default Discover