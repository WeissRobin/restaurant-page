import './styles/index.scss';

const navButtons = document.querySelectorAll('.navigation-btn');
const resButton = document.querySelector('.res-button');
const closeButton = document.querySelector('.close-icon');
const resWrapper = document.querySelector('.reservation-wrapper');
const formWrapper = document.querySelector('.form-wrapper');

const moduleMappings = {
    home: () => import('./javascript/home'),
    menu: () => import('./javascript/menu'),
    order: () => import('./javascript/order')
};

async function loadModuleAndRenderContent(routing) {
    try {
        const moduleImport = moduleMappings[routing];
        if (moduleImport) {
            const module = await moduleImport();
            module.renderContent();
        } else {
            new Error("Modul nenalezen");
        }
    } catch (error) {
        console.error('Chyba při načítání modulu:', error);
    }
}

navButtons.forEach(button => {
    button.addEventListener('click', async () => {
        navButtons.forEach(btn => btn.removeAttribute('data-active'));
        button.setAttribute('data-active', true);

        const routing = button.getAttribute('data-content');
        await loadModuleAndRenderContent(routing);
    });
});

document.addEventListener('DOMContentLoaded', async () => {
    const activeBtn = document.querySelector('[data-active="true"]');
    const routing = activeBtn.getAttribute('data-content');
    await loadModuleAndRenderContent(routing);
});

resButton.addEventListener('click', () => {
    resWrapper.style.display = 'flex';
    resWrapper.classList.remove('bg-animate-out');
    resWrapper.classList.add('bg-animate-in');
    formWrapper.classList.remove('form-animate-down');
    formWrapper.classList.add('form-animate-up');
});

closeButton.addEventListener('click', () => {
    resWrapper.classList.remove('bg-animate-in');
    resWrapper.classList.add('bg-animate-out');
    formWrapper.classList.remove('form-animate-up');
    formWrapper.classList.add('form-animate-down');
});