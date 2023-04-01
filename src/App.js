import React from 'react';
import { Routes,Route} from 'react-router-dom';
import './App.scss';
import Calender from './components/Calender/Calender';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Modal1 from './components/Modals/Input Task Modal/Modal1';
import Setting from './components/Settings/Setting';
import TasksToday from './components/TasksToday/TasksToday';
import UserContext from './Context/UserContext';
// import Userstate from './Context/UserState';


function App() {
var use={
    name:"Ayush",
    email:"ayushbaliyan05@gmail.com"
} 
  const [user,setUser]= React.useState(use)
  return (
    <UserContext.Provider value={{user,setUser}}>
    <div className='app'>
        <Routes>
              <Route path='/login' element={<Login/>} />
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path='/calender' element={<Calender/>} />
                  <Route path='/modal' element={<Modal1/>} />
                  <Route path='/settings' element={<Setting/>} />
                  <Route path='/tasks' element={<TasksToday/>} />
              </Route>
        </Routes>
    </div>
      </UserContext.Provider>  
  );
}

export default App;
