const contactPage = function() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.id = 'container';

    const p1 = document.createElement('p');
    p1.innerHTML = `Phone: +1 234 567 8910`;

    const p2 = document.createElement('p');
    p2.innerHTML = `Email: patspotatopub@gmail.com`;

    const p3 = document.createElement('p');
    p3.innerHTML = `Mailing Address: 123 Potato Place, Boise, Idaho`;

    content.appendChild(container);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
};


export {contactPage};