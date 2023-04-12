import { getItem } from "../components/getDataApi.js";
import { addButton } from "../components/button.js";
import { addCart } from "./cart.js";

export default function itemPage(id) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('container');

    (async () => {
        let item = await getItem(id);
        const container =  document.createElement('div');
        container.classList.add("page__item");
        container.innerHTML = `
            <div class="img">
                <img src="${item.image}" alt="#"/>
            </div>
            <div class="description">
                <p class="raiting">${item.rating.rate}</p>
                <h2>${item.title}</h2>
                <p>${item.description}></p>
                <p class="price">${item.price}</p>
            </div>
        `;

        /*const addButton = document.createElement('div');
        addButton.classList.add('add');
        addButton.innerText = 'Add to cart';
        addButton.addEventListener('click', () => {
            addCart(item);
        })*/

        container.append(addButton(item, 'add'));
        itemContainer.append(container);
    })();


    return itemContainer;
}