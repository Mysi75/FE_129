
import { addCart,  getStateItem, openRemoveItem } from "../pajes/cart.js";

export const addButton = (item, className) => {
    let button = document.createElement('button');
    button.classList.add(className);

    const add = () => {
        addCart(item);
        render(); 
    }

    const remove = () => {
        openRemoveItem(item.id);
        render(); 
    }

    const render = () => {
        if(getStateItem(item.id)) {
            button.innerText = 'Remove';
            button.removeEventListener('click', add );
            button.addEventListener('click', remove);
        }else{
            button.innerText = 'Add to cart';
            button.removeEventListener('click', remove);
            button.addEventListener('click', add);
        }   
    }

    render();
    
    return button;
}