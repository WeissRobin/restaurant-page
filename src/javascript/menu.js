import '../styles/menu.scss';
//dishes
import SushiRoll from '../assets/sushi-rolls.png';
import BeefYakitori from '../assets/beef-yakitori.png';
import MisoSoup from '../assets/miso-soup.png';
import TeriyakiChicken from '../assets/teriyaki-chicken.png';
import Gyoza from '../assets/gyoza.png';
//drinks
import MatchaTea from '../assets/matcha-tea.webp';
import Sake from '../assets/sake.png';
import Shochu from '../assets/shochu.webp';
//deserts
import Mochi from '../assets/mochi-icecream.png';
import Tiramisu from '../assets/matcha-tiramisu.png';

const content = document.getElementById('content');

export const renderContent = () => {
    content.innerHTML = '';

    const menuSection = document.createElement('section'); menuSection.setAttribute('id', 'menu');
    menuSection.innerHTML = `
    <div class="menu-wrapper">
        <h1>See our menu</h1>
        <svg class="doodle" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 120" width="250" height="115">
            <path id="&lt;Path&gt; copy" class="s0" fill="#e25571" d="m208.3 47.2c-3.3-0.7-6.1-0.2-8.9 0.6-8.5 2.2-16.4 6.1-24.3 10-9.5 4.8-18.9 9.7-28.4 14.4-4 2-8.2 3.7-12.6 4.8-1.6 0.5-3.2 0.7-4.8 0.6-3.7-0.3-5.5-3.2-4.2-6.6 0.7-1.8 1.7-3.3 3-4.7 3.2-3.2 6.4-6.3 9.6-9.5 2.2-2.2 4.3-4.5 5.4-8-2.7-0.3-5.2-0.2-7.6 0.4-8.2 1.8-15.8 5.1-23.3 8.8-9.3 4.6-18.2 10-27.6 14.4-3.8 1.7-7.5 3.6-11.6 4.4-0.9 0.2-1.8 0.4-2.8 0.3-2.5-0.4-3.7-2-3-4.4 0.6-2.3 1.8-4.3 3.4-6 2.7-2.8 5.4-5.6 8.2-8.4 1.9-1.8 3.7-3.8 5.2-6 0.6-1 1.4-1.9 1.1-3.3-1.9-0.4-3.6 0.2-5.4 0.6-9.3 2.5-18 6.4-26.7 10.6-8.8 4.2-17.8 8.2-27.4 10.5-4 1-8.1 1.7-12.3 0.9-3.8-0.7-7.1-2.2-9.2-5.6-1-1.5-1.8-3.2-1.3-5.1 0.7 0 1.1 0.2 1.1 0.8 0.3 5.4 5.1 8.3 10.9 8.5 4.4 0.1 8.7-1 12.8-2.4 9.3-3.1 17.9-7.6 26.3-12.3 7.1-4 14.1-8 21.5-11.2 2.1-0.9 4.1-1.6 6.3-2 3.9-0.6 7.9 1.5 9.6 4.8 1.2 2.3 1 4.4-0.8 6.4-1.6 1.9-3.4 3.4-5.3 4.9-3.7 3-7.6 5.7-11.1 8.9-1.9 1.7-3.7 3.5-4.7 5.9-0.8 1.7-0.3 2.4 1.6 2.1 2.4-0.3 4.7-1.3 6.9-2.3 8.5-3.7 16.4-8.4 24.4-13.1 9.2-5.4 18.5-10.4 28.5-14.1 3.1-1.2 6.3-2.1 9.8-2.1 2.2 0 4 0.7 5.7 2.2 2.5 2.3 2.8 4.9 0.8 7.7-1.1 1.6-2.5 3-4 4.3q-5.7 4.8-11.3 9.6c-1.6 1.4-3.1 2.8-4.1 4.7-1.3 2.4-0.7 3.4 2 3.4 1.5 0 3-0.4 4.4-0.8 7.5-2.2 14.3-5.8 21.1-9.5 10.3-5.5 20.5-11.2 31.1-16.1 4.9-2.3 9.9-4.4 15.2-5.7 1.9-0.5 3.9-0.7 5.8-0.7 2 0.1 3.6 0.8 5.1 2.1 2.5 2.1 2.8 4.6 0.7 7.2-2 2.5-4.5 4.4-6.8 6.5-2.8 2.4-5.6 4.8-8 7.6-1.5 1.7-2.7 3.5-3.2 5.7-0.4 1.8 0.1 2.6 2 2.7 2.2 0 4.1-0.7 6.1-1.4 4.6-1.6 8.9-3.7 13.2-6 12.6-6.7 25.4-12.7 38.3-18.8 0.3-0.1 0.5-0.4 0.9-0.5 0.5-0.2 0.8 0 1.1 0.5 0.2 0.4 0 0.7-0.3 0.9-0.6 0.5-1.3 1-2 1.3-15 7.3-29.5 15.4-44.5 22.4q-4.6 2.1-9.5 3.3c-1.4 0.3-2.8 0.4-4.1 0.1-2.7-0.7-4.2-2.9-4-5.7 0.3-2.9 1.6-5.3 3.2-7.6 2.4-3.4 5.2-6.4 7.9-9.6 1.7-1.9 3.7-3.5 4.9-6.3z"/>
        </svg>
        <div class="second">Explore Our Delicious Selection</div>
        <div class="menu">
            <div class="main-menu">
                <h2>Dishes</h2>
                <div class="menu-item">
                    <img src=${SushiRoll}>
                    <span class="food-heading">Sushi Rolls</span>
                    <span class="food-desc">Delicate rolls of vinegared rice filled with fresh fish, vegetables, and sometimes avocado, served with soy sauce and wasabi.</span>
                </div>
                <div class="menu-item">
                    <img src=${BeefYakitori}>
                    <span class="food-heading">Beef Yakitori</span>
                    <span class="food-desc">Grilled skewers of tender beef, marinated in a soy sauce-based mixture, and often paired with green onions or vegetables.</span>
                </div>
                <div class="menu-item">
                    <img src=${MisoSoup}>
                    <span class="food-heading">Miso Soup</span>
                    <span class="food-desc">A traditional Japanese soup made with dashi broth and fermented soybean paste, often containing tofu cubes, seaweed, and green onions.</span>
                </div>
                <div class="menu-item">
                    <img src=${TeriyakiChicken}>
                    <span class="food-heading">Teriyaki Chicken</span>
                    <span class="food-desc">Grilled or pan-fried chicken glazed with a sweet and savory teriyaki sauce, served with steamed rice and vegetables.</span>
                </div>
                <div class="menu-item">
                    <img src=${Gyoza}>
                    <span class="food-heading">Gyoza</span>
                    <span class="food-desc">Thin dough wrappers filled with a savory mixture of ground meat (usually pork) and vegetables, pan-fried until crispy on the bottom, and served with a dipping sauce.</span>
                </div>
            </div>
            <div class="drink-menu">
                <h2>Drinks</h2>
                <div class="menu-item">
                    <img src=${MatchaTea}>
                    <span class="food-heading">Green Tea (Matcha)</span>
                    <span class="food-desc">A finely ground powder of specially grown and processed green tea leaves, traditionally whisked with hot water to create a frothy, invigorating beverage.</span>
                </div>
                <div class="menu-item">
                    <img src=${Sake}>
                    <span class="food-heading">Sake</span>
                    <span class="food-desc">A Japanese rice wine made through the fermentation of polished rice, with a range of flavors from sweet to dry, often served warm or chilled.</span>
                </div>
                <div class="menu-item">
                    <img src=${Shochu}>
                    <span class="food-heading">Shochu</span>
                    <span class="food-desc">A distilled Japanese spirit typically made from barley, sweet potatoes, or rice, with a clear and smooth taste, often enjoyed on the rocks or mixed with water or soda.
                    </span>
                </div>
            </div>
            <div class="desert-menu">
                <h2>Deserts</h2>
                <div class="menu-item">
                    <img src=${Mochi}>
                    <span class="food-heading">Mochi</span>
                    <span class="food-desc">Soft and chewy rice cakes filled with creamy ice cream, available in various flavors such as green tea, strawberry, and mango.</span>
                </div>
                <div class="menu-item">
                    <img src=${Tiramisu}>
                    <span class="food-heading">Tiramisu</span>
                    <span class="food-desc">A Japanese twist on the classic Italian dessert, featuring layers of matcha-infused sponge cake, mascarpone cheese, and whipped cream, dusted with powdered green tea.</span>
                </div>
            </div>
        </div>
    </div>
    `;

    content.append(menuSection);
};