import React from 'react'
import './Layout.scss'
import {Outlet} from 'react-router-dom'
import Rightbar from '../Rightbar/Rightbar'
import Leftbar from '../Leftbar/Leftbar'

const Layout = () => {
  return (
    <div className='layout'>
        <Leftbar/>
            Layout
            <Outlet/>
        <Rightbar/>
    </div>
  )
}

export default Layout