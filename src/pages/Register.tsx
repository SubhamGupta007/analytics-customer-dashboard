import React from 'react'
import Form from '../components/Register/Form'
import LeftImage from '../components/Register/LeftImage'

const Register = () => {
  return (
    <section className="h-screen" style={{backgroundColor:"#172337"}}>
      
    <div className="container  h-full">
      <div className="flex flex-wrap h-full">
        {/* login left banner image */}
        <LeftImage/>
        <div className=" justify-center items-center md:w-8/12 lg:w-5/12 " style={{marginTop:"10%"}}>
         {/* login Form */}
         <Form/>
        </div>
      </div>
    </div>
   
  </section>
  )
}

export default Register