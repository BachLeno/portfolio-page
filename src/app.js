import { renderHome } from './components/home.js';
import { renderAbout } from './components/about.js';
import { renderAPIs } from './components/apis.js';
import { renderContact } from './components/contact.js';

const routes = {
    home: renderHome,
    about: renderAbout,
    apis: renderAPIs,
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


const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const navLinksList = document.querySelectorAll('#nav-links a');

navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
