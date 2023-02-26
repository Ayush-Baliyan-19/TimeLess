import React from 'react';
import { Routes,Route} from 'react-router-dom';
import './App.scss';
import Calender from './components/Calender/Calender';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Setting from './components/Settings/Setting';
import TasksToday from './components/TasksToday/TasksToday';


function App() {

  return (
    <div className='app'>
      <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/calender' element={<Calender/>} />
              <Route path='/settings' element={<Setting/>} />
              <Route path='/tasks' element={<TasksToday/>} />
            </Route>
      </Routes>
        
    </div>
  );
}

export default App;
