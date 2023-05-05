  import { Link } from 'react-router-dom';
  import { useContext } from 'react';
  import { CartContext} from '../../../App'

  const CartWidget = () => {
      const {cart} = useContext(CartContext)

      return (
         <div className="widget">
             <Link to='/cart'>Cart {cart.length}</Link>
          </div>
      )
 }

 export default CartWidget;

