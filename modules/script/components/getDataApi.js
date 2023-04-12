

export const getData = async ()=> {
    const response  = await fetch('https://fakestoreapi.com/products');
    if(!response.ok) {
        return false;
    }
    return await response.json();
}

export const getItem = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
   if (!response.ok) {
    return false
   }
   return await response.json();
}