
  import { useContext, useState, useEffect } from 'react';
 import { CartContext } from '../../App';
  import style from './ItemCart.module.css';
  import { Link } from 'react-router-dom';

  const ItemCart = ({ data }) => {
    const [added, setAdded] = useState(false);
      const { cart, setCart} = useContext(CartContext);

      const addToCart = () => {
          setCart([...cart, data]);
      }

      useEffect(() => {
         console.log(cart);
         setAdded(cart.some(item => item.id === data.id));
     });

      return (
          <div className={style.item}>
             <div className={style.image}>
             <Link to={`${data.id}`}>
                     <img src={data.image} alt={data.title} />
                 </Link>
              </div>
              <h2 className={style.title}>
              <Link to={`${data.id}`}>{data.title}</Link>
            </h2>
             <p className={style.rating}>{data.rating.rate}</p>
            <p className={style.price}>{data.price}</p>
              <button
                className={style.button}
                  disabled={added}
                  onClick={addToCart}
              >
                  {!added ? 'Add to cart' : 'Added'}
             </button>
         </div>
    );
  }





 export default ItemCart;

