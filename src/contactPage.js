const contactPage = function() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.id = 'container';

    const p = document.createElement('p');
    p.innerHTML = `Phone: +1 234 567 8910
    Email: patspotatopub@gmail.com
    Mailing Address: 123 Potato Place, Boise, Idaho`;

    content.appendChild(container);
    container.appendChild(p);
};


export {contactPage};