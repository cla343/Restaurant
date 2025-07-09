import tonisImg from './toni-s-24hr-restaurant.jpg';
import { loadMenu} from "./menu";
import { loadBreakfast } from "./breakfast";

export function pageLoad () {
    let contentDiv = document.getElementById('content');
    let p = document.createElement('p');
    let h1 = document.createElement('h1');
    h1.textContent = 'A Humboldt County Tradition Since 1976';
    p.textContent = 'Find out why for four decades locals and out-of-towners alike have proclaimed Toni’s to be a Humboldt Tradition!';
    h1.classList.add('initialContentH1');
    p.classList.add('initialContentP');

    let buttonDiv = document.createElement('div');

    buttonDiv.classList.add('buttonDiv');
    let menuButton = document.createElement('button');
    menuButton.id = 'menu';
    menuButton.textContent = 'Main Menu';
    menuButton.onclick = () => {
    loadMenu();
    };
    buttonDiv.appendChild(menuButton);
    let breakfastButton = document.createElement('button');
    breakfastButton.id = 'breakfast';
    breakfastButton.textContent = 'Breakfast Menu';
    breakfastButton.onclick = () => {
    loadBreakfast();
    };
    buttonDiv.appendChild(breakfastButton);

    contentDiv.appendChild(h1);
    contentDiv.appendChild(p);
    contentDiv.appendChild(buttonDiv);
}
