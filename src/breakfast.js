import { clearContent } from './clearContent.js';

export function loadBreakfast() {
    clearContent();

    const contentDiv = document.getElementById('content');

    const breakfastDiv = document.createElement('div');
    breakfastDiv.id = 'breakfastDiv';

    const h1 = document.createElement('h1');
    h1.textContent = 'Breakfast Menu';
    h1.classList.add('breakfastTitle');
    contentDiv.appendChild(h1);

    const breakfastMenuTitle = document.createElement('h1');
    breakfastMenuTitle.textContent = 'Complete Breakfast';
    breakfastMenuTitle.classList.add('breakfastMenuTitle');
    breakfastDiv.appendChild(breakfastMenuTitle);

    const breakfastItems = [
        { name: 'Belgium Waffle', description: 'Fluffy Waffles with Toppings of Your Choice', price: '$25' },
        { name: 'Chicken Fried Steak', description: 'It’s Not Chicken But Who Cares!', price: '$10' },
        { name: 'Oatmeal', description: 'Don\'t Order This', price: '$15' },
        { name: 'Biscuits and Gravy', description: 'Fluffy Biscuits Drowning in Gravy. Quick Somebody Perform CPR!', price: '$8' }
    ];

    breakfastItems.forEach((item, index) => {
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

        if (index < breakfastItems.length - 1) {
            const hr = document.createElement('hr');
            hr.classList.add('breakfast-separator');
            itemDiv.appendChild(hr);
        }

        breakfastDiv.appendChild(itemDiv);
    });

    // ✅ Additonal Menu Section
    const additionalMenu = document.createElement('div');
    additionalMenu.id = 'additionalMenu';

    const additionalMenuTitle = document.createElement('h1');
    additionalMenuTitle.textContent = 'Additional Menu';
    additionalMenuTitle.classList.add('additionalMenuTitle');
    additionalMenu.appendChild(additionalMenuTitle);
    
    const additionalItems = [
        { name: 'Avocado', description: 'Fruit??', price: '$1' },
        { name: 'Onion', description: 'Cry', price: '$1' },
        { name: 'Jalapeño', description: 'Hot', price: '$1' },
        { name: 'Tomato', description: 'Red', price: '$1' }
    ];

    additionalItems.forEach((item, index) => {
        const additionalItemDiv = document.createElement('div');
        additionalItemDiv.classList.add('additional-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;

        additionalItemDiv.appendChild(itemName);
        additionalItemDiv.appendChild(itemDescription);
        additionalItemDiv.appendChild(itemPrice);

        if (index < additionalItems.length - 1) {
            const hr = document.createElement('hr');
            hr.classList.add('additional-separator');
            additionalItemDiv.appendChild(hr);
        }

        additionalMenu.appendChild(additionalItemDiv);
    });
    
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';

    menuContainer.appendChild(breakfastDiv);
    menuContainer.appendChild(additionalMenu);

    contentDiv.appendChild(menuContainer);
}

// ✅ Button binding
export function breakfastOnClick() {
    const breakfastButton = document.querySelector('#breakfast');
    breakfastButton.onclick = () => {
        loadBreakfast();
    };
}
