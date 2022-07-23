import React,{useState} from 'react'


import Main from '../components/Dashboard/Right/Main'
import Sidebar from '../components/Dashboard/Left/Sidebar'


const Dashboard = () => {
  
  return (
   
    <div className="flex" style={{backgroundColor:"#0A121E"}}>
   <Sidebar/>
    <div className="h-screen flex-1 p-7">
     
      <h1 className="text-2xl text-white font-semibold ">
         <Main/>
      </h1>
    </div>
  </div>
  )
}

export default Dashboard