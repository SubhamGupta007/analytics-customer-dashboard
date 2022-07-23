import React,{useState} from 'react'
// images 
import logo from "../../../Images/logo.png"
import dashboard from "../../../Images/dashboard.png"
import customer from "../../../Images/customer.png"
import marketing from "../../../Images/marketing.png"
import management from "../../../Images/management.png"
import setting from "../../../Images/setting.png"
import notifiaction from "../../../Images/notification.png"
const Sidebar = () => {
    const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: dashboard},
    { title: "Customer", src: customer },
    { title: "Marketing", src: marketing, gap: false},
    { title: "Management", src: management },
    { title: "Setting", src: setting },
  ];
  return (

    <div className={` ${
        open ? "w-60" : "w-20 "
      } bg-dark-purple border-r-2  border-[#193445] h-screen p-5  pt-8 relative duration-300`}
    >

    {/* BRAND LOGO */}
      <div className="flex items-center gap-x-4">
        <img
          src={logo} 
          className={`w-24 cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
          onClick={() => setOpen(!open)}
          alt="open_close"
        />
      </div>


      {/* menu items */}
      <div className=' mt-16 text-white'>Menu</div>
      <ul className="pt-1">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#193445] hover:border-l-4 hover:border-l-sky-500 text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={Menu.src}  alt="logo"/>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>

      {/* Profile */}
      <div className="flex flex-col  w-full h-[48%]">  
   
        <div className=" flex mt-auto w-full text-white ">
            <img className={`${!open && "hidden"} 'w-auto h-7 pt-2`} src={notifiaction} alt="notification"/>
           <h5 className='rounded-full bg-green-600 p-2 ml-2 h-10 w-10 text-center'>R</h5>
            <div className={`${!open && "hidden"} origin-left duration-200 flex flex-col ml-2`}>
              <h5>Ronalds Willis</h5>
              <h5 className='text-xs'>Admin</h5>
            </div>
        
        </div>
    </div>
    </div>
  )
}

export default Sidebar