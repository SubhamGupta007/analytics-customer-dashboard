import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


// importing toastify ----> alert box 
import { ToastContainer, toast } from 'react-toastify';
import "../../../node_modules/react-toastify/dist/ReactToastify.css"

const Form = () => {
    const [login, setlogin] = useState({email:"",password:""})
    const navigate = useNavigate();

    const handleclick = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        const url = `https://bff.dev.mable.ai/auth/login`
        const response = await fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email:login.email,password:login.password})
        }).then(token => { return token })
        console.log(login);
        const json = await  response.json();
        console.log(json);
        if(json.auth)
        {
            localStorage.setItem('token', json.authtoken);
            navigate("/")
        }
        else
        {
          toast("Please enter a valid Login Credentials!", {
            className:"custom-style",
                      progressClassName:"custom-progress",
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
            });
          console.log('enter a valid credentials')
        }
    }
    const onchange = (e: React.ChangeEvent<any>) => {
        setlogin({...login,[e.target.name]:e.target.value})
    }
  return (
    <>
    <ToastContainer/>
     <form className='mx-4' onSubmit={handleclick} >
          <h1 className='  text-bold text-5xl font-bold text-center mb-6 text-white'>Login</h1>
          <h3 className='text-bold text-lg mb-6 text-center tracking-wider text-white'>Build your analytics to next level!</h3>
            <div className="mb-6">  
            <input
              
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700  bg-transparent bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-blue-300 focus:bg-transparent focus:border-blue-400 focus:outline-none"
                placeholder=" &#xf0e0; Email address"
                name="email"
                onChange={onchange}
                required
              />
            </div>
  
    
            <div className="mb-6">
            {/* <AiFillAccountBook/> */}
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-transparent bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-blue-300 focus:bg-transparent focus:border-blue-400 focus:outline-none"
                placeholder="password"
                name="password"
                onChange={onchange}
                required
              />
            </div>
  
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-500 rounded-sm bg-none checked:bg-none checked:border-blue-600 checked:bg-blue-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck3"
                  
                />
                <label className="form-check-label inline-block text-gray-500" htmlFor="exampleCheck2"
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
    </>
  )
}

export default Form