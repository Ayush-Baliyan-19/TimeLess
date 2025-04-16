import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.scss';
import Calender from './components/Calender/Calender';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Modal1 from './components/Modals/Input Task Modal/Modal1';
import Setting from './components/Settings/Setting';
import TasksToday from './components/TasksToday/TasksToday';
import UserContext from './Context/UserContext';
import Taskpage from './components/TaskPage/Taskpage';
import Notfound from './components/404/404';
import Resetpassword from './components/reset/password';
// import Userstate from './Context/UserState';


function App() {
  const [user, setUser] = React.useState({})
  const [isdatafetched, setisDataFetched] = React.useState(false)
  const navigate = useNavigate();
  var token;
  const getDetails = async () => {
    const getUser = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/auth/user/getdetails`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authToken": token
        },
        body: JSON.stringify({
          key: "AyushIsAGoodBoy",
        }),
      }
    );
    const details_response = await getUser.json();
    if (details_response) {
      setUser(details_response);
      setisDataFetched(!isdatafetched)
    }
  }
  React.useEffect(() => {
    if (window.location.pathname.includes("reset/password")) {
      return
    }
    // eslint-disable-next-line
    token = localStorage.getItem("authKey");
    if (!token) {
      navigate('/login');
    }
    else {
      getDetails();
    }
    // eslint-disable-next-line
  }, [])
  return (
    <UserContext.Provider value={{ user, setUser, isdatafetched }}>
      <div className='app'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/calender' element={<Calender />} />
            <Route path='/modal' element={<Modal1 />} />
            <Route path='/settings' element={<Setting />} />
            <Route path='/tasks' element={<TasksToday />} />
          </Route>
          <Route path='/user' element={<Layout />}>
            {
              isdatafetched &&
              user.tasksArray.map((date) => {
                return (
                  <Route path={`/user/${date._id}`} element={<Taskpage />} />
                )
              })
            }
          </Route>
          <Route path='/reset/password' element={<Resetpassword />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
