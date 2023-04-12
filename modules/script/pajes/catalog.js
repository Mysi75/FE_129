import { getData } from "../components/getDataApi.js";
import { addButton } from "../components/button.js";

export default function catalog() {
    const container = document.createElement('div');
    container.classList.add('container');
    const catalog = document.createElement('div');
    catalog.classList.add('catalog');
    const h1 = document.createElement('h1');
    h1.innerHTML = ' Catalog';
    container.append(h1, catalog);

     (async () => {
        const data = await getData();
        catalog.innerHTML = '';
        if(!data) {
            catalog.innerHTML = 'Filed conect';
            return;
        }

        data.forEach(element => {
           const item = document.createElement('div');
           item.classList.add('catalog__item');
           
           const imgContainer = document.createElement('div');
           imgContainer.classList.add('img');
           const img = document.createElement('img');
           img.setAttribute('src', element.image);
           imgContainer.append(img);
           const desc = document.createElement('div');
           desc.classList.add('desc');
           desc.innerHTML = `
            <p class="categopy">${element.category}</p>
            <h3 class="item__title">
                <a href="#item_${element.id}">${element.title}</a></h3>
            <p class="price">${element.price}</p>
           `;
          /* let addButton = document.createElement('button');
           addButton.classList.add('add');
           addButton.innerText = 'Add to cart';
           addButton.addEventListener('click', () => {
            addCart(element);
           });*/
           item.append(imgContainer, desc, addButton(element));
           catalog.append(item);
        });
     }) ();
 
    return  container;
}

