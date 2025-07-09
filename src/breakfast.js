import { clearContent } from './clearContent.js';

export function loadBreakfast() {
    clearContent();

    const contentDiv = document.getElementById('content');

    const breakfastDiv = document.createElement('div');
    breakfastDiv.id = 'breakfastDiv';

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to the Breakfast Page - Enjoy our Mighty Food and Despair!';
    breakfastDiv.appendChild(h1);

    const breakfastItems = [
        { name: 'Belgium Waffle', description: 'Fluffy Waffles with Toppings of Your Choice', price: '$25' },
        { name: 'Chicken Fried Steak', description: 'It\s Not Chicken But Who Cares!', price: '$10' },
        { name: 'Oatmeal', description: 'Don\'t Order This', price: '$15' },
        { name: 'Biscuits and Gravy', description: 'Fluffy Biscuits Drowning in Gravy. Quit Somebody Perform CPR!', price: '$8' }
    ];

    breakfastItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('breakfast-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDescription);
        itemDiv.appendChild(itemPrice);

        breakfastDiv.appendChild(itemDiv);
    });

    contentDiv.appendChild(breakfastDiv);
}

export function breakfastOnClick() {
    const breakfastButton = document.querySelector('#breakfast');
    breakfastButton.onclick = () => {
        loadBreakfast();
    };
}
