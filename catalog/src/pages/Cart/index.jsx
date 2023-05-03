// import { useContext } from "react";
// import {CartContext} from "../../App";
// import CartItem from "./CartItem";

// const Cart = () => {
//     const {cart, setCart} = useContext(CartContext);

//     const removeItem = (id) => {
//         setCart(cart.filter(item => item.id !== id));
//     }

//     return (
//        <div className="cart_container">
//         <ul className="cart">
//             {cart.map((item, i) => <CartItem
//                 key={i.toString()}
//                 itrm={item}
//                 itemHandler={removeItem}
//             />)}
//         </ul>
//          <h3 className="total">{
//               cart.length ?
//               cart.reduce((acc, item) => acc += item.price)
//               0
//          }    
//          </h3>
//          <button 
//          className="crear"
//          onClick={setCart([])}
//          >Clear cart</button>
//        </div>
//     )
// }

export default Cart;