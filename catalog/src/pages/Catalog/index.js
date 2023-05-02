import { useEffect, useState } from "react";
import ItemCart from "../../components/ItemCart";

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
        <div className="container">
            <h1>Loading...</h1>
        </div>
    )
    
return (
    <div className="container">
        {data.map((item, i) => {
          return <ItemCart key={i.toString()} data={item}/> 
        })}
    </div>
)
}

export default Catalog;