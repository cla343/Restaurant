import { pageLoad } from "./initialContent";
import { loadMenu, MenuOnClick} from "./menu";
import { loadHome, homeOnClick } from "./home";
import { loadContact, contactOnClick } from "./contact";
import './styles.css';
import { loadHistory, historyOnClick } from "./history";
import { loadReviews,reviewsOnClick } from "./reviews";

alert('Hello from index.js!');

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
    MenuOnClick();
    homeOnClick();
    contactOnClick();
    historyOnClick();
    reviewsOnClick();
});