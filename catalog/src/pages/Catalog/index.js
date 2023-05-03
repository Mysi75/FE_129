 import { useEffect, useState } from "react";
 import ItemCart from "../../components/ItemCart";
 import style from './Catalog.module.css';

 const Catalog = () => {
    const [data, setData] = useState([]);

     const getData = () => {
         if (data.length !== 0) return;
        
         fetch('https://fakestoreapi.com/products')
             .then(resp => resp.json())
             .then(d => setData(d));
     }

     useEffect(() => {
         getData();
         console.log(data);
     }, [data]);

     if (data.length === 0) return (
        <div className={style.container}>
             <h1>Loading...</h1>
         </div>
     )

     return (
         <div className={style.container}>
             {data.map((item, i) => {
                 return <ItemCart key={i.toString()} data={item} />
             })}
         </div>
     )
 }

 export default Catalog;

