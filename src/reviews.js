import { clearContent } from './clearContent.js';


export function loadReviews () {
    clearContent();

    const contentDiv = document.getElementById('content');
    const h1 = document.createElement('h1');
    h1.textContent = 'Customer Reviews';
    h1.classList.add('reviewsH1');

    const reviewsDiv = document.createElement('div');
    reviewsDiv.id = 'reviewsDiv';
    
    const review1 = document.createElement('div');
    review1.classList.add('review');
    review1.innerHTML = `<p>"After a full day of fishing on the trinity river I was reminded by my stomach that I haven’t eaten all day. Nothing was open on the way home except Toni’s. Glad it was because the double bacon blue burger and sweet potato fries hit the spot. Very tasty and filling for sure!"</p>
                        <h2>- Dave J.
                        Sacramento, CA</h2>`;

    const review2 = document.createElement('div');
    review2.classList.add('review');
    review2.innerHTML = `<p>"This place is amazing! Went with my 2 HSU boys for lunch and loved it so much that we went back for a late night dinner. Service during the day was amazing. The food was all so good . Great burgers, amazing chicken nuggets and the desserts were some of the best we have ever had. Coconut cream pie, strawberry rhubarb pie and hot fudge sundae were all the best we’d ever had. Wow! We are having a hard time figuring out why we would eat anywhere other than this 24 hour find.”</p>
                        <h2>– Lorrie Y.
                        Temecula, CA</h2>`;

    const review3 = document.createElement('div');
    review3.classList.add('review');
    review3.innerHTML = `<p>“Great place to go for food at all hours of the day. The prices are super reasonable and the food is served fresh and hot. For diner food it’s not overly greasy and it’s super yummy. The burgers there are spectacular. Go here!”</p>
                        <h2>- – Leabeth P.
                        Arcata, CA</h2>`;

    const review4 = document.createElement('div');
    review4.classList.add('review');
    review4.innerHTML = `<p>“Toni’s is a local favorite for a reason. The food is always good, the service is friendly, and the atmosphere is welcoming. Whether you’re in the mood for breakfast, lunch, or dinner, Toni’s has you covered.”</p>
                        <h2>- John D.
                        Eureka, CA</h2>`;

    const review5 = document.createElement('div');
    review5.classList.add('review');
    review5.innerHTML = `<p>“Toni’s is a must-visit for anyone in the area. The food is delicious, the service is great, and the atmosphere is cozy and inviting. I highly recommend the breakfast burrito and the milkshakes!”</p>
                        <h2>- Sarah K.
                        Fortuna, CA</h2>`;

    reviewsDiv.appendChild(review1);
    reviewsDiv.appendChild(review2);
    reviewsDiv.appendChild(review3);
    reviewsDiv.appendChild(review4);
    reviewsDiv.appendChild(review5);
    contentDiv.appendChild(h1);
    contentDiv.appendChild(reviewsDiv);
}

export function reviewsOnClick() {
    const reviewsButton = document.querySelector('#reviews');
    reviewsButton.onclick = () => {
        loadReviews();
    }
};