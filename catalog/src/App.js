 import './App.css';
 import Nav from './components/Nav';
 import Home from './pages/Home';
 import Abaut from './pages/Abaut';
 import Footer from './components/Footer';
 import { Routes, Route } from 'react-router-dom';
 import Catalog from './pages/Catalog';
 import { createContext, useState } from 'react';

 export const CartContext = createContext();

 function App() {
   const [cart, setCart] = useState([]);


   return (
    <CartContext.Provider value={{cart, setCart}}>
       <div className="App">
         <Routes>
           <Route path='/' element={<Nav />}>
             <Route index element={<Home />} />
             <Route path='/catalog' element={<Catalog />} />
             <Route path='/abaut' element={<Abaut />} />
             <Route path='/cart' element={<Cart />} />
           </Route>
        </Routes>
        <Footer />
      </div>
    </CartContext.Provider>
   );
 }

 export default App;


 