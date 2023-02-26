import React from 'react'
// import { useNavigate } from 'react-router-dom'
import './Layout.scss'
import {Outlet} from 'react-router-dom'
import Rightbar from '../Rightbar/Rightbar'
import Leftbar from '../Leftbar/Leftbar'

const Layout = () => {
  // const navigate=useNavigate();
  // var token;
  //   token=localStorage.getItem("authtoken");
  return (
    <div className='layout'>
        {/* {
          !token && navigate("/login")
        } */}
        <Leftbar/>
            <Outlet/>
        <Rightbar/>
    </div>
  )
}

export default Layout