import { clearContent } from './clearContent.js';
import diningImg from './dining.jpg';
import diningImg2 from './tonis-milkshakes-arcata.jpg';

export function loadHistory() {
    clearContent();

    const contentDiv = document.getElementById('content');

    const subContentDiv = document.createElement('div');
    subContentDiv.id = 'sub-content';
    contentDiv.appendChild(subContentDiv);

    const content1Div = document.createElement('div');
    content1Div.id = 'content1';
    subContentDiv.appendChild(content1Div);

    const content2Div = document.createElement('div');
    content2Div.id = 'content2';
    subContentDiv.appendChild(content2Div);

    const img1 = document.createElement('img');
    img1.src = diningImg;
    img1.alt = 'Toni\'s Dining Room';
    img1.width = 400;
    img1.height = 300;
    img1.classList.add('history-img');
    content1Div.appendChild(img1);
    const h1 = document.createElement('h1');
    h1.textContent = 'Toni\'s Story';
    content1Div.appendChild(h1);
    const p = document.createElement('p');
    p.classList.add('history-p');
    p.textContent = 'On December 27, 1976 my parents and I bought Dot’s Drive In from Dorothy and Smitty Smith. Dorothy and Smitty owned Dot’s Drive In for nine years before we bought it. I was 20 years old at the time, having worked at various local restaurants. When we opened we had only 5 employees operating a 24 hour restaurant. The business grew and we had some lean years like anyone else but we made it through. In 1987 we expanded, added a new dining room and totally remodeled the restaurant. We closed down for about 4 months to accomplish the remodeling. As the business continued to grow, we couldn’t accommodate enough seating for our customers so in 2010 we added another dining room that now seats 40 more people.';
    content1Div.appendChild(p);

    const img2 = document.createElement('img');
    img2.src = diningImg2;
    img2.alt = 'Toni\'s Milkshakes';
    img2.width = 400;
    img2.height = 300;
    img2.classList.add('history-img');
    content2Div.appendChild(img2);
    const h1x = document.createElement('h1');
    h1x.textContent = 'The Local Difference';
    content2Div.appendChild(h1x);
    const px = document.createElement('p');
    px.classList.add('history-p');
    px.textContent = 'The majority of our customers are the local community. I think the reason for our success is we have an amazing staff that work so hard for us and help prepare our good quality food. We serve ample portions and use the freshest ingredients. We take pride in our food. Due to the rising costs and price of being in business, it’s sad but the local restaurant owner is becoming part of the past. We feel so fortunate that after 49 years we are still in business and growing. Supporting the community is very important to us. We help out with local fundraisers as much as we can and are happy to do so.';
    content2Div.appendChild(px);
}

export function historyOnClick() {
    const historyButton = document.querySelector('#history');
    historyButton.onclick = () => {
        loadHistory();
    }
};