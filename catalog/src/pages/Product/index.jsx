import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../App";
import style from './Product.module.css';

const Product = () => { 
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [added, setAdded] = useState(false) 
    const {cart, setCart} = useContext(CartContext);

    const getProduct = async () => {
        if (product) return;
        let responce = await fetch(`https://fakestoreapi.com/products/${productId}`);
        let data = await responce.json();
        setProduct(data);
        setLoading(!loading);
        }  
        
        const addToCart = () => {
            setCart([...cart, product]);
        }

        useEffect(() => {
            getProduct();
            setAdded(cart.some(item => item.id === product.id))
        });

    return (
        <div className="product__container">
            {loading ?
                <h1>Loading...</h1> :
            <>
            <div className="image">
                <img src={product.image} alt="{produkt.title}" />
            </div>
            <h2 className="title">{product.title}</h2>
            <p className="description">{product.description}</p>
            <p className="rating">{product.rating.rate}</p>
            <p className="price">{product.price}</p>
            <button
                className={'button'}
                disabled={added}
                onClick={addToCart}
            >
                 {!added ? 'Add to cart' : 'Added'}
                </button>
            </>

            }
        </div>
    )
}

export default Product;