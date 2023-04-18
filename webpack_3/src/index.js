import { getDiv } from "./module";

const h1 = document.querySelector('h1');
const root = document.querySelector('#root');

h1.addEventListener('click', () => {
    root.append(getDiv());
});

alert('webpack');

