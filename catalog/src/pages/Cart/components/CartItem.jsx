  import classNames from "classnames";
  import style from './CartItem.module.css';
  
  
  const CartItem = ({ item, itemHandler, className}) => {
      const ItemWrapper = classNames(style.item, className)


    return (
       <li className={ItemWrapper}>
              <div className={style.image}>
                <img src={item.image} alt={item.title} />
             </div>
              <h2 className={style.title}>{item.title}</h2>
              <div className={style.rigth}>
                  <p className={style.price}>{item.price}</p>
                   <button
                      onClick={() => itemHandler(item.id)}
                  >Remove</button>
               </div>
         </li>
    );
  }
  
   export default CartItem ;