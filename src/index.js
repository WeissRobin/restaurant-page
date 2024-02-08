import './styles/index.scss';

const navButtons = document.querySelectorAll('.navigation-btn');

const moduleMappings = {
    home: () => import('./javascript/home'),
    menu: () => import('./javascript/menu'),
    reservation: () => import('./javascript/reservation'),
    order: () => import('./javascript/order'),
};

async function loadModuleAndRenderContent(routing) {
    try {
        const moduleImport = moduleMappings[routing];
        if (moduleImport) {
            const module = await moduleImport();
            module.renderContent();
        } else {
            console.error('Modul nenalezen pro routing:', routing);
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