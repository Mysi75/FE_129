import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Abaut from './pages/Abaut';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route path='/abaut' element={<Abaut/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
