import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {Route, Routes} from 'react-router'
import { routes } from './utils/routes';
import UserPage from './components/UserPage';
import AddTasc from './components/UserPage/AddTasc';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={routes.main} element={<MainPage/>}/>
          <Route path={routes.taskList} element={<UserPage/>}/>
          <Route path={routes.addTask} element={<AddTasc/>}/>
        </Routes>
    </div>
  );
}

export default App;
