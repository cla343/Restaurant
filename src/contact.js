import { clearContent } from './clearContent.js';

export function loadContact () {
    clearContent();

    const contentDiv = document.getElementById('content');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    h1.classList.add('contactH1');
    contentDiv.appendChild(h1);

    const contactDiv = document.createElement('div');
    contactDiv.id = 'contactDiv';

    const contactInfo = document.createElement('div');
    contactInfo.id = 'contact-info';
    const contactH1 = document.createElement('h1');
    contactH1.textContent = 'Address';
    const address = document.createElement('p');
    address.textContent = '1901 Heindon Rd, Arcata, CA 95521';
    const contactH1Phone = document.createElement('h1');
    contactH1Phone.textContent = 'Phone';
    const phone = document.createElement('p');
    phone.textContent = '(707) 822-0091';
    contactInfo.appendChild(contactH1);
    contactInfo.appendChild(address);
    contactInfo.appendChild(contactH1Phone);
    contactInfo.appendChild(phone);    
    contactDiv.appendChild(contactInfo);
    contentDiv.appendChild(contactDiv);

    const directions = document.createElement('div');
    directions.id = 'directions';
    const directionsH1 = document.createElement('h1');
    directionsH1.textContent = 'Directions';
    directionsH1.classList.add('directionsH1');
    directions.appendChild(directionsH1);
    const iframe = document.createElement('iframe');
    iframe.classList.add('map-iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3015.5951094837055!2d-124.08786266139948!3d40.90269570917303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9feda0e1a5076e0b!2sToni's+24+Hour+Restaurant!5e0!3m2!1sen!2sus!4v1466444160279";
    iframe.width = "100%";
    iframe.height = "400";
    iframe.style.border = "0";
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    directions.appendChild(iframe);
    contactDiv.appendChild(directions);
}

export function contactOnClick() {
    const contactButton = document.querySelector('#contact');
    contactButton.onclick = () => {
        loadContact();
    }
};