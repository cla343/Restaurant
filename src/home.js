import { clearContent } from './clearContent.js';
import { pageLoad } from "./initialContent.js";

export function loadHome() {
    clearContent();
    pageLoad();
}

export function homeOnClick() {
    const homeButton = document.querySelector('#home');
    homeButton.onclick = () => {
        loadHome();
    }
}