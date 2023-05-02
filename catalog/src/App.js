import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Abaut from './pages/Abaut';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Catalog from './pages/Catalog';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index  element={<Home/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/abaut' element={<Abaut/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
