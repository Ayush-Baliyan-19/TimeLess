import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import './Layout.scss'
import {Outlet} from 'react-router-dom'
import Rightbar from '../Rightbar/Rightbar'
import Leftbar from '../Leftbar/Leftbar'
import Loader from '../Loader/Loader'
import UserContext from '../../Context/UserContext'

const Layout = () => {

  var userr=useContext(UserContext)
  const [user,setuser]= React.useState({name:"",email:""})
  const [isdatafetched,setisDataFetched]= React.useState(false)
  const navigate=useNavigate();
  var token;
  const getDetails= async ()=>{
    const getUser = await fetch(
      "http://localhost/auth/user/getdetails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authToken":token
        },
        body: JSON.stringify({
          key: "AyushIsAGoodBoy",
        }),
      }
    );
    const details_response = await getUser.json();
    if(details_response)
    {
      setuser({name:details_response.name,email:details_response.email});
      userr.setUser(details_response);
      setisDataFetched(true)
    }
    // console.log(details_response);
  }
  React.useEffect(()=>{
    // eslint-disable-next-line
    token=localStorage.getItem("authKey");
    if(!token)
    {
      navigate('/login');
    }
    else{
      getDetails();
    }
    // eslint-disable-next-line
  },[])
  return (
      isdatafetched ?
      <div className='layout'>
      <Leftbar name={userr.user.name} email={user.email}/>
        <Outlet/>
      <Rightbar/>
      </div>
      :
      <Loader/>
  )
}

export default Layout