import React from 'react'


// left
import Sidebar from '../components/Dashboard/Left/Sidebar'

// right

const Dashboard = () => {
  return (
    <div className="container">
        <div className="flex flex-col">
          <div className="left">
            <Sidebar/>
          </div>
          <div className="right"></div>
        </div>
    </div>
  )
}

export default Dashboard