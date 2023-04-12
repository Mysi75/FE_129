// import home from '../pajes/home.js';
// import catalog from '../pajes/catalog.js';
// import about from '../pajes/about.js';
// import contacts from '../pajes/contacts.js';
import router from "./router.js";

export default function main() {
    const main = document.createElement('main');
    main.classList.add('main');

    const render = async () => {
        main.innerHTML = ''
        let [module, id] = await router();
        main.append(module(id));
    }

    window.addEventListener('load', render)
    window.addEventListener('hashchange', render);
    return main;
}