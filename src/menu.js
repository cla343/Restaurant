import { clearContent } from './clearContent.js';

export function loadMenu() {
    clearContent();

    const contentDiv = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Main Menu';
    h1.classList.add('menuTitle');
    contentDiv.appendChild(h1);

    const menuDiv = document.createElement('div');
    menuDiv.id = 'menuDiv';

    const foodMenu = document.createElement('div');
    foodMenu.id = 'foodMenu';
    const foodMenuTitle = document.createElement('h1');
    foodMenuTitle.textContent = 'Food Menu';
    foodMenu.appendChild(foodMenuTitle);
    foodMenuTitle.classList.add('foodMenuTitle');

    const menuItems = [
        { name: 'Steak', description: 'Juicy grilled steak with herbs', price: '$25' },
        { name: 'Salad', description: 'Fresh garden salad with vinaigrette', price: '$10' },
        { name: 'Pasta', description: 'Creamy Alfredo pasta with garlic bread', price: '$15' },
        { name: 'Dessert', description: 'Chocolate lava cake with ice cream', price: '$8' }
    ];

    menuItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        itemDiv.appendChild(itemName);

        if (index < menuItems.length) {
            const hr = document.createElement('hr');
            hr.classList.add('menu-separator');
            itemDiv.appendChild(hr);
        }

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;

        itemDiv.appendChild(itemDescription);
        itemDiv.appendChild(itemPrice);

        foodMenu.appendChild(itemDiv);
        menuDiv.appendChild(foodMenu);
    });

    const drinkMenu = document.createElement('div');
    drinkMenu.id = 'drinkMenu';
    const drinkMenuTitle = document.createElement('h1');
    drinkMenuTitle.textContent = 'Drink Menu';
    drinkMenu.appendChild(drinkMenuTitle);
    drinkMenuTitle.classList.add('drinkMenuTitle');

    const drinkItems = [
        { name: 'Coke', description: 'you already know', price: '$3' },
        { name: 'Pepsi', description: 'not coke', price: '$3' },
        { name: 'Root Beer', description: 'not beer', price: '$3' },
        { name: 'Sprite', description: 'fizzy', price: '$3' }
    ];

    drinkItems.forEach((item, index) => {
        const drinkItemDiv = document.createElement('div');
        drinkItemDiv.classList.add('drink-item');

        const drinkItemName = document.createElement('h2');
        drinkItemName.textContent = item.name;
        drinkItemDiv.appendChild(drinkItemName);

        if (index < drinkItems.length) {
            const hr = document.createElement('hr');
            hr.classList.add('drink-separator');
            drinkItemDiv.appendChild(hr);
        }

        const drinkItemDescription = document.createElement('p');
        drinkItemDescription.textContent = item.description;

        const drinkItemPrice = document.createElement('p');
        drinkItemPrice.textContent = item.price;

        drinkItemDiv.appendChild(drinkItemDescription);
        drinkItemDiv.appendChild(drinkItemPrice);

        drinkMenu.appendChild(drinkItemDiv);
        menuDiv.appendChild(drinkMenu);
    });

    contentDiv.appendChild(menuDiv);
}

export function MenuOnClick() {
    const menuButton = document.querySelector('#menu');
    menuButton.onclick = () => {
        loadMenu();
    };
}
