import { Routes,Route } from 'react-router-dom';
import './App.scss';
import Calender from './components/Calender/Calender';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Setting from './components/Settings/Setting';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/calender' element={<Calender/>} />
          <Route path='/settings' element={<Setting/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
