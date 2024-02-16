import '../styles/home.scss';
import Interior from '../assets/interior.jpg';
import Exterior from '../assets/exterior.webp';
import TeaBreaker from '../assets/tea-img.jpg';
import Video from '../assets/video.mp4';
import { Footer } from './footer';

const content = document.getElementById('content');

export const renderContent = () => {
    content.innerHTML = '';
    const introSection = document.createElement('section'); introSection.setAttribute('id', 'intro');
    introSection.innerHTML = `
        <div class="introduction-wrapper">
            <div class="japan-heading">桜亭</div>
            <h1 class="main-heading">Satisfy Your Senses with a Dash of <span>Japan.</span></h1>
            <p class="desc-heading">Immerse yourself in the flavors of Japan, where culinary excellence meets cultural richness.</p>
        </div>
        <video class="bg-video" playsinline autoplay muted loop>
            <source src="${Video}">
        </video>
    `;

    const aboutSection = document.createElement('section'); aboutSection.setAttribute('id', 'about');
    aboutSection.innerHTML = `
        <div class="about-subsection">
            <div class="wrapper">
            <h2 class="section-heading">Something about us</h2>
            <svg class="doodle" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 120" width="250" height="115">
            <path id="&lt;Path&gt; copy" class="s0" fill="#e25571" d="m208.3 47.2c-3.3-0.7-6.1-0.2-8.9 0.6-8.5 2.2-16.4 6.1-24.3 10-9.5 4.8-18.9 9.7-28.4 14.4-4 2-8.2 3.7-12.6 4.8-1.6 0.5-3.2 0.7-4.8 0.6-3.7-0.3-5.5-3.2-4.2-6.6 0.7-1.8 1.7-3.3 3-4.7 3.2-3.2 6.4-6.3 9.6-9.5 2.2-2.2 4.3-4.5 5.4-8-2.7-0.3-5.2-0.2-7.6 0.4-8.2 1.8-15.8 5.1-23.3 8.8-9.3 4.6-18.2 10-27.6 14.4-3.8 1.7-7.5 3.6-11.6 4.4-0.9 0.2-1.8 0.4-2.8 0.3-2.5-0.4-3.7-2-3-4.4 0.6-2.3 1.8-4.3 3.4-6 2.7-2.8 5.4-5.6 8.2-8.4 1.9-1.8 3.7-3.8 5.2-6 0.6-1 1.4-1.9 1.1-3.3-1.9-0.4-3.6 0.2-5.4 0.6-9.3 2.5-18 6.4-26.7 10.6-8.8 4.2-17.8 8.2-27.4 10.5-4 1-8.1 1.7-12.3 0.9-3.8-0.7-7.1-2.2-9.2-5.6-1-1.5-1.8-3.2-1.3-5.1 0.7 0 1.1 0.2 1.1 0.8 0.3 5.4 5.1 8.3 10.9 8.5 4.4 0.1 8.7-1 12.8-2.4 9.3-3.1 17.9-7.6 26.3-12.3 7.1-4 14.1-8 21.5-11.2 2.1-0.9 4.1-1.6 6.3-2 3.9-0.6 7.9 1.5 9.6 4.8 1.2 2.3 1 4.4-0.8 6.4-1.6 1.9-3.4 3.4-5.3 4.9-3.7 3-7.6 5.7-11.1 8.9-1.9 1.7-3.7 3.5-4.7 5.9-0.8 1.7-0.3 2.4 1.6 2.1 2.4-0.3 4.7-1.3 6.9-2.3 8.5-3.7 16.4-8.4 24.4-13.1 9.2-5.4 18.5-10.4 28.5-14.1 3.1-1.2 6.3-2.1 9.8-2.1 2.2 0 4 0.7 5.7 2.2 2.5 2.3 2.8 4.9 0.8 7.7-1.1 1.6-2.5 3-4 4.3q-5.7 4.8-11.3 9.6c-1.6 1.4-3.1 2.8-4.1 4.7-1.3 2.4-0.7 3.4 2 3.4 1.5 0 3-0.4 4.4-0.8 7.5-2.2 14.3-5.8 21.1-9.5 10.3-5.5 20.5-11.2 31.1-16.1 4.9-2.3 9.9-4.4 15.2-5.7 1.9-0.5 3.9-0.7 5.8-0.7 2 0.1 3.6 0.8 5.1 2.1 2.5 2.1 2.8 4.6 0.7 7.2-2 2.5-4.5 4.4-6.8 6.5-2.8 2.4-5.6 4.8-8 7.6-1.5 1.7-2.7 3.5-3.2 5.7-0.4 1.8 0.1 2.6 2 2.7 2.2 0 4.1-0.7 6.1-1.4 4.6-1.6 8.9-3.7 13.2-6 12.6-6.7 25.4-12.7 38.3-18.8 0.3-0.1 0.5-0.4 0.9-0.5 0.5-0.2 0.8 0 1.1 0.5 0.2 0.4 0 0.7-0.3 0.9-0.6 0.5-1.3 1-2 1.3-15 7.3-29.5 15.4-44.5 22.4q-4.6 2.1-9.5 3.3c-1.4 0.3-2.8 0.4-4.1 0.1-2.7-0.7-4.2-2.9-4-5.7 0.3-2.9 1.6-5.3 3.2-7.6 2.4-3.4 5.2-6.4 7.9-9.6 1.7-1.9 3.7-3.5 4.9-6.3z"/>
            </svg>
            </div>
            <p class="about-desc">Welcome to SakuraTei, where Japanese tradition meets culinary innovation. Situated in the heart of Gion district, SakuraTei is a culinary haven dedicated to bringing the flavors of Japan to your plate.</br></br>
            At SakuraTei, our passion for authenticity drives us to craft each dish with precision and care. From sushi and sashimi to ramen and teppanyaki, every bite is a journey through the rich tapestry of Japanese cuisine.</br></br>
            Join us at SakuraTei and indulge in an unforgettable dining experience, where tradition, flavor, and hospitality come together to create lasting memories.</p>
        </div>
        <img class="interior-img" src="${Interior}">
    `;
    
    const locationSection = document.createElement('section'); locationSection.setAttribute('id', 'location');
    locationSection.innerHTML = `
        <div class="location-subsection">
            <div class="wrapper">
            <h2 class="section-heading">Where do you find us?</h2>
            <svg class="doodle" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 120" width="250" height="115">
            <path id="&lt;Path&gt; copy" class="s0" fill="#e25571" d="m208.3 47.2c-3.3-0.7-6.1-0.2-8.9 0.6-8.5 2.2-16.4 6.1-24.3 10-9.5 4.8-18.9 9.7-28.4 14.4-4 2-8.2 3.7-12.6 4.8-1.6 0.5-3.2 0.7-4.8 0.6-3.7-0.3-5.5-3.2-4.2-6.6 0.7-1.8 1.7-3.3 3-4.7 3.2-3.2 6.4-6.3 9.6-9.5 2.2-2.2 4.3-4.5 5.4-8-2.7-0.3-5.2-0.2-7.6 0.4-8.2 1.8-15.8 5.1-23.3 8.8-9.3 4.6-18.2 10-27.6 14.4-3.8 1.7-7.5 3.6-11.6 4.4-0.9 0.2-1.8 0.4-2.8 0.3-2.5-0.4-3.7-2-3-4.4 0.6-2.3 1.8-4.3 3.4-6 2.7-2.8 5.4-5.6 8.2-8.4 1.9-1.8 3.7-3.8 5.2-6 0.6-1 1.4-1.9 1.1-3.3-1.9-0.4-3.6 0.2-5.4 0.6-9.3 2.5-18 6.4-26.7 10.6-8.8 4.2-17.8 8.2-27.4 10.5-4 1-8.1 1.7-12.3 0.9-3.8-0.7-7.1-2.2-9.2-5.6-1-1.5-1.8-3.2-1.3-5.1 0.7 0 1.1 0.2 1.1 0.8 0.3 5.4 5.1 8.3 10.9 8.5 4.4 0.1 8.7-1 12.8-2.4 9.3-3.1 17.9-7.6 26.3-12.3 7.1-4 14.1-8 21.5-11.2 2.1-0.9 4.1-1.6 6.3-2 3.9-0.6 7.9 1.5 9.6 4.8 1.2 2.3 1 4.4-0.8 6.4-1.6 1.9-3.4 3.4-5.3 4.9-3.7 3-7.6 5.7-11.1 8.9-1.9 1.7-3.7 3.5-4.7 5.9-0.8 1.7-0.3 2.4 1.6 2.1 2.4-0.3 4.7-1.3 6.9-2.3 8.5-3.7 16.4-8.4 24.4-13.1 9.2-5.4 18.5-10.4 28.5-14.1 3.1-1.2 6.3-2.1 9.8-2.1 2.2 0 4 0.7 5.7 2.2 2.5 2.3 2.8 4.9 0.8 7.7-1.1 1.6-2.5 3-4 4.3q-5.7 4.8-11.3 9.6c-1.6 1.4-3.1 2.8-4.1 4.7-1.3 2.4-0.7 3.4 2 3.4 1.5 0 3-0.4 4.4-0.8 7.5-2.2 14.3-5.8 21.1-9.5 10.3-5.5 20.5-11.2 31.1-16.1 4.9-2.3 9.9-4.4 15.2-5.7 1.9-0.5 3.9-0.7 5.8-0.7 2 0.1 3.6 0.8 5.1 2.1 2.5 2.1 2.8 4.6 0.7 7.2-2 2.5-4.5 4.4-6.8 6.5-2.8 2.4-5.6 4.8-8 7.6-1.5 1.7-2.7 3.5-3.2 5.7-0.4 1.8 0.1 2.6 2 2.7 2.2 0 4.1-0.7 6.1-1.4 4.6-1.6 8.9-3.7 13.2-6 12.6-6.7 25.4-12.7 38.3-18.8 0.3-0.1 0.5-0.4 0.9-0.5 0.5-0.2 0.8 0 1.1 0.5 0.2 0.4 0 0.7-0.3 0.9-0.6 0.5-1.3 1-2 1.3-15 7.3-29.5 15.4-44.5 22.4q-4.6 2.1-9.5 3.3c-1.4 0.3-2.8 0.4-4.1 0.1-2.7-0.7-4.2-2.9-4-5.7 0.3-2.9 1.6-5.3 3.2-7.6 2.4-3.4 5.2-6.4 7.9-9.6 1.7-1.9 3.7-3.5 4.9-6.3z"/>
            </svg>
            </div>
            <h3>123 Sakura Avenue, Kyoto, Japan</h3>
            <ul>
                <li><strong>Monday:</strong> 11:00 AM - 10:00 PM</li>
                <li><strong>Tuesday:</strong> 11:00 AM - 10:00 PM</li>
                <li><strong>Wednesday:</strong> 11:00 AM - 10:00 PM</li>
                <li><strong>Thursday:</strong> 11:00 AM - 10:00 PM</li>
                <li><strong>Friday:</strong> 11:00 AM - 10:00 PM</li>
                <li><strong>Saturday:</strong> 11:00 AM - 10:00 PM</li>
                <li><strong>Sunday:</strong> 12:00 PM - 9:00 PM</li>
            </ul>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#e25571" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"/></svg> +010 67 989 023</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none"><path fill="#e25571" d="M3 5V4a1 1 0 0 0-1 1zm18 0h1a1 1 0 0 0-1-1zM3 6h18V4H3zm17-1v12h2V5zm-1 13H5v2h14zM4 17V5H2v12zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm15-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3z"/><path stroke="#e25571" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 5l9 9l9-9"/></g></svg> reservations@sakuratei-restaurant.com</p>
        </div>
        <img class="exterior-img" src="${Exterior}">
    `;

    const imgBreaker = document.createElement('div'); imgBreaker.classList.add('tea-wrapper');
    imgBreaker.innerHTML = `
    <img class="tea-img" src="${TeaBreaker}">
    `;

    const reviewSection = document.createElement('section'); reviewSection.setAttribute('id', 'review');
    reviewSection.innerHTML = `
    <div class="reviews-wrapper">
        <div class="reviews-heading-wrapper">
            <h2>Restaurant reviews</h2>
            <span>What they say about us?</span>
        </div>
        <div class="flex-items-wrapper">
            <div class="review-card">
                <div class="stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <h3>Cute place!</h3>
                <p>"The ambiance at SakuraTei was enchanting, with elegant Japanese decor and cozy seating that transported me. The subtle sakura blossoms added elegance for a memorable dining experience."</p>
            </div>
            <div class="review-card">
                <div class="stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <h3>Rich food choice</h3>
                <p>"SakuraTei offers a diverse menu with an abundance of delicious options. The elegant Japanese decor and cozy ambiance provide the perfect backdrop for an unforgettable dining experience."</p>
            </div>
            <div class="review-card">
                <div class="stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <h3>Cozy spot, delicious food!</h3>
                <p>"SakuraTei is a cozy spot with a warm atmosphere. The food was delicious, especially the sushi rolls. Can't wait to come back!"</p>
            </div>
            <div class="review-card">
                <div class="stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#bb576b" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <h3>Fantastic delivery experience!</h3>
                <p>"Ordered delivery from SakuraTei and it was seamless. Food arrived promptly, still hot, and sushi was fresh and tasty. Highly recommend!"</p>
            </div>
        </div>
    </div>
    `;

    content.append(introSection, aboutSection, locationSection, reviewSection, imgBreaker, Footer());
};

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');
    console.log(video);
});