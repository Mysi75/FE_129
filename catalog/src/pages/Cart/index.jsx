  import { useContext } from "react";
 import {CartContext} from "../../App";
 import CartItem from "./components/CartItem";
 import style from './Cart.module.css';

const Cart = () => {
    const {cart, setCart} = useContext(CartContext);

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }
  
     return (
         <div className={style.cart_container}>
             <ul className={style.cart}>
                 {cart.map((item, i) => <CartItem
                     key={i.toString()}
                     item={item}
                    itemHandler={removeItem}
                    className={style.item}
                 />)}
             </ul>
             <h3 className={style.total}>{
                     cart.length ?
                     cart.reduce((acc, item) => acc += item.price, 0) :
                     0
                }</h3> 

                 <button 
                     className={style.clear}
                     onClick={() => setCart([])}
                    >Clear cart</button>   
        </div>
    )
 }


export default Cart;