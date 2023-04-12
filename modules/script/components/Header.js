import { widget } from "../pajes/cart.js";

export default function header() {
    const headerLogo = `
    <div class="logo">
        <a href="#">
            <img src="https://via.placeholder.com/50" alt="logo">
        </a>
    </div> 
    `;

    const headerNav = `
    <nav class="nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#catalog">Catalog</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contacts">Contacts</a></li>
        </ul>
    </nav> 
    `;

    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = `${headerLogo}${headerNav}`;
    container.append(widget);

    const header = document.createElement('header');
    header.classList.add('header');
    header.append(container);

    return header;
}