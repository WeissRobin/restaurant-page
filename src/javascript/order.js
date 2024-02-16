import '../styles/order.scss';

import Kyoto from '../assets/kyoto-map.png';
import Tokyo from '../assets/tokyo-map.png';

const content = document.getElementById('content');

export const renderContent = () => {
    content.innerHTML = '';
    
    const imgSection = document.createElement('section'); imgSection.setAttribute('id', 'img-section');
    imgSection.innerHTML = `
    <h1>Order your food!</h1>
    <div class="adress-wrapper">
        <label for="adress" class="adress-label">Start with your adress</label>
        <input type="text" name="adress" id="adress-input">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#c7c7c7" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
    </div>
    <div>Just choose food down below and be cherry!</div>
    `;

    const locationsSection = document.createElement('section'); locationsSection.setAttribute('id', 'location-section');
    locationsSection.innerHTML = `
    <h2>All locations</h2>
    <div class="location-card">
        <div class="location-map">
            <img src=${Kyoto}>
        </div>
        <div class="location-info-wrapper">
            <h2>SakuraTei Kyoto</h2>
            <span class="location-adress">123 Sakura Avenue, Kyoto, Japan</span>
            <p>We are located next to the hotel Tokyo Dream at Cherry square.</p>
        </div>
        <div class="location-type-wrapper">
            <div class="pickup">
                <button>Pick Up</button>
                <ul>
                    <li>Mo - Sun: 7:30am - 2:30pm</li>
                </ul>
            </div>
            <div class="delivery">
                <button>Delivery</button>
                <ul>
                    <li>Mo - Fri: 10:00am - 3:00pm</li>
                    <li>Sa - Sun: 8:00am - 3:00pm</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="location-card">
        <div class="location-map">
            <img src=${Tokyo}>
        </div>
        <div class="location-info-wrapper">
            <h2>SakuraTei Tokyo</h2>
            <span class="location-adress">Cherry Blossom 423, Tokyo, Japan</span>
            <p>Near the Cherry Blossom Park across the night club Bocchi.</p>
        </div>
        <div class="location-type-wrapper">
            <div class="pickup">
                <button>Pick Up</button>
                <ul>
                    <li>Mo - Sun: 8:30am - 2:00pm</li>
                </ul>
            </div>
            <div class="delivery">
                <button>Delivery</button>
                <ul>
                    <li>Mo - Fri: 9:00am - 1:00pm</li>
                    <li>Sa - Sun: 7:00am - 2:00pm</li>
                </ul>
            </div>
        </div>
    </div>
    `;

    content.append(imgSection, locationsSection); 

    setTimeout(() => {
        const adressInput = document.getElementById('adress-input');
        const label = document.querySelector('.adress-label');
        console.log(svg);
        adressInput.addEventListener('focus', () => {
            label.classList.add('active');
        });
        adressInput.addEventListener('focusout', () => {
            label.classList.remove('active');
        });
    }, 0);
};