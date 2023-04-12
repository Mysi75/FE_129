import header from "./components/Header.js";
import main from "./components/Main.js";
import footer from "./components/Footer.js";

const root = document.getElementById('root');
root.append(header(), main(), footer());