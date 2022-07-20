import React,{useState,useEffect} from 'react'
import Loginimg from "../images/loginimg.png"

const Login = () => {
 
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("")
  const login = async (e) => {
    e.preventDefault();
    let item={email,password};
    console.log(item)
    let result = await fetch ("",{
      method:'POST',
      headers:{

        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    })
    result=await result.JSON();
  }
  return (
    <section className="h-screen" style={{backgroundColor:"#172337"}}>
    <div className="container  h-full">
      <div className="flex flex-wrap h-full">
        <div className="md:w-12/12 lg:w-6/12  ">
          <img
            src={Loginimg}
            className="w-full h-full"
            alt="banner image"
          />
        </div>
        <div className=" justify-center items-center md:w-8/12 lg:w-5/12 " style={{marginTop:"10%"}}>
        
          <form className='mx-4' onSubmit={login}>
          <h1 className='  text-bold text-5xl font-bold text-center mb-6 text-white'>Login</h1>
          <h3 className='text-bold text-lg mb-6 text-center tracking-wider text-white'>Build your analytics to next level!</h3>
            <div className="mb-6">
              
              <input
              
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700  bg-transparent bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-blue-300 focus:bg-transparent focus:border-blue-400 focus:outline-none"
                placeholder=" &#xf0e0; Email address"
                onChange={(e)=>setemail(e.target.value)}
              />
            </div>
  
    
            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-transparent bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-blue-300 focus:bg-transparent focus:border-blue-400 focus:outline-none"
                placeholder=" &#xf30d; Password"
                onChange={(e)=>setpassword(e.target.value)}
              />
            </div>
  
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-500 rounded-sm bg-none checked:bg-none checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck3"
                  checked
                />
                <label className="form-check-label inline-block text-gray-500" for="exampleCheck2"
                  >Remember me</label
                >
              </div>
              <a
                href="#!"
                className="text-blue-400 hover:text-blue-400 focus:text-blue-400 active:text-blue-400 duration-200 transition ease-in-out"
                >Forgot Your Password?</a
              >
            </div>

            <button
              
              type="submit"
              className="inline-block mb-6 px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              style={{backgroundColor:"#4FB7DD"}}
            >
              Login
            </button>
  
            
            <div className="flex justify-between items-center mb-6 ">
              <div className="form-group form-check">
              <h6 className=' text-gray-500 text-xs space-x-11'>Don't have an account? <span className='text-white'><a>Register now!      </a></span></h6>
              </div>
              <h6 className='text-gray-500 text-xs'>      @2022 Mable Ai All Rights Reserved</h6>
            </div>
            
            
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login