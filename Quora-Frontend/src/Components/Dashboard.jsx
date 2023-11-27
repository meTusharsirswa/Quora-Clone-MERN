import React from 'react'
import "../styles/Dashboard.css"
import Spaces from './Dashboard-section/Spaces'
import Feed from './Dashboard-section/Feed'
import Advertisement from './Dashboard-section/Advertisement'
const Dashboard = () => {
  return (
    <>
    <div className="dashboard_container">
    <div className="space">
    <Spaces/>
    </div>
    <div className="quora_feed">
      <Feed/>
    </div>
<div className="advertisement">
   <Advertisement/>
</div>
    </div>
    </>
  )
}

export default Dashboard
