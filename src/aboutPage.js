import txt from './text/mainContent.txt';


const aboutPage = function() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.id = 'container';

    const box = document.createElement('div');
    box.id = 'box';

    const p = document.createElement('p');
    p.innerHTML = txt;

    content.appendChild(container);
    container.appendChild(box);
    box.appendChild(p);
};

export {aboutPage};