import './module.css';
import img from "./img.svg";


export const getDiv = () => {
    const div = document.createElement('div');
    div.classList.add('container');
    div.innerText= 'Просто контейнер';
    const image = document.createElement('img');
    image.setAttribute('src', img);
    div.append(image);
    return div;
}
