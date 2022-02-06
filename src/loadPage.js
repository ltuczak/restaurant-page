import {aboutPage} from './aboutPage.js';
import {contactPage} from './contactPage.js';
import {menuPage} from './menuPage.js';

const createHeader = function() {
    const header = document.createElement('div');
    header.id = 'header';
    header.innerHTML = `Pat's Potato Pub`;

    return header;
};

const createNav = function() {
    const nav = document.createElement('nav');
    nav.id = 'nav';

    const about = document.createElement('div');
    about.id = 'about';
    about.classList.add('btn');
    about.innerHTML = 'About';

    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.classList.add('btn');
    menu.innerHTML = 'Menu';

    const contact = document.createElement('div');
    contact.id = 'contact';
    contact.classList.add('btn');
    contact.innerHTML = 'Contact';

    nav.appendChild(about);
    nav.appendChild(menu);
    nav.appendChild(contact);

    document.body.addEventListener('click', function(e) {
        if(e.target.id == 'menu') {
            changeTab(menuPage());
        } else if(e.target.id == 'contact') {
            changeTab(contactPage());
        } else if(e.target.id == 'about') {
            changeTab(aboutPage());
        };
    });

    return nav;
};

const headerNav = function() {
    const content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);

    const header = createHeader();
    content.appendChild(header);

    const nav = createNav();
    content.appendChild(nav);

    return content;
};

const initialize = function() {
    headerNav();
    aboutPage();
};

const clearPage = function() {
    const content = document.getElementById('content');
    const container = document.getElementById('container');
    content.removeChild(container);
};

const changeTab = function(pageName) {
    clearPage();
    pageName;
};


export {initialize}