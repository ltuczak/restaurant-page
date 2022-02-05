import txt from './text/mainContent.txt';


const aboutPage = function() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.id = 'container';

    const p = document.createElement('p');
    p.innerHTML = txt;

    content.appendChild(container);
    container.appendChild(p);
};

export {aboutPage};