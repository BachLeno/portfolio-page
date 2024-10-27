import { renderHome } from './components/home.js';
import { renderAbout } from './components/about.js';
import { renderContact } from './components/contact.js';

const routes = {
    home: renderHome,
    about: renderAbout,
    contact: renderContact
  };

function loadSection(section) {
    const contentDiv = document.getElementById('app');
    contentDiv.innerHTML = '';
    routes[section] ? routes[section]() : routes.home();
}

window.addEventListener('hashchange', () => {
    const section = location.hash.slice(1) || 'home';
    loadSection(section);
});

loadSection(location.hash.slice(1) || 'home');