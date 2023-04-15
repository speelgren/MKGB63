'use strict';

window.addEventListener('DOMContentLoaded', () => {

    let container = document.querySelector('.container');
    homeContent(container);

    document.querySelectorAll('.nav-btn').forEach( button => {

        button.addEventListener('click', (e) => {
            container.innerHTML = "";

            switch (e.target.textContent) {
                case 'Home':
                    homeContent(container);
                    break;
                case 'About':
                    aboutContent(container, e);
                    break;
                case 'Contact':
                    contactContent(container, e);
                    break;
                case 'FAQ':
                    faqContent(container, e);
                    break;
            }
        })
    })
});

const homeContent = (container) => {

    /* Container */
    let homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container', 'container-sm');

    /* Title */
    let homeTitle = document.createElement('h1');
    homeTitle.classList.add('home-title', 'd-flex', 'justify-content-center', 'm-3');
    let homeTitleTextNode = document.createTextNode('Välkommen');
    homeTitle.appendChild(homeTitleTextNode);
    homeContainer.appendChild(homeTitle);

    /* Arrays */
    let homeCardTitleTextArray = {
        'Stubbfräsning': 'Ibland kan det vara jobbigt med stubbar på gården. Om ni ska installera en robotgräsklippare så kan stubbarna vara ivägen. Att gräva bort en stubbe med grävmaskin förstör oftas gräsmattan och tar längre tid för gräset att växa. Att gräva för hand tar evigheter och det är bara jobbigt. Vi fräser stubbarna 10-20cm under marknivå och fyller igen hålet.',
        'Buskfräsning': 'Har du buskar och häckar som du vill bli av med så är buskfräsning ett effektivt sätt att bli av med dessa. Vi fräser hela vägen ner i rötterna så busken ej kan växa upp igen.',
        'Trädfällning': 'Ibland kan träd behövas ta ner från tomten av olika anledningar. Oftast är det på grund av säkerhetskäl då träden kan stå illa till.',
        'Bortforsling': 'Vi tar bort allt som är kvar efter fällningen och lämnar platsen ren och fin.'
    };
    let homeImageArray = {
        'Stubbfräsning': 'https://images.unsplash.com/photo-1519680772-3b1f3e1b5f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'Buskfräsning': 'https://images.unsplash.com/photo-1519680772-3b1f3e1b5f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'Trädfällning': 'https://images.unsplash.com/photo-1519680772-3b1f3e1b5f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'Bortforsling': 'https://images.unsplash.com/photo-1519680772-3b1f3e1b5f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    };

    /* Loop */
    for (let key in homeCardTitleTextArray) {

        console.log(key, homeCardTitleTextArray[key]);
    }
    
    /* Card */
    let homeCard = document.createElement('section');
    homeCard.classList.add('home-card', 'card', 'm-3');
    let homeCardImage = document.createElement('img');
    homeCardImage.classList.add('home-card-image', 'card-img-left');
    let homeCardBody = document.createElement('article');
    homeCardBody.classList.add('home-card-body', 'card-body');
    let homeCardTitle = document.createElement('h2');
    homeCardTitle.classList.add('home-card-title', 'card-title');
    let homeCardText = document.createElement('p');
    homeCardText.classList.add('home-card-text', 'card-text');

    /* Append */
    homeCardBody.appendChild(homeCardText);
    homeCardBody.appendChild(homeCardTitle);
    homeCard.appendChild(homeCardBody);
    homeCard.appendChild(homeCardImage);
    homeContainer.appendChild(homeCard);
    container.appendChild(homeContainer);
}

const aboutContent = (container, e) => {

}

const contactContent = (container, e) => {

    
}

const faqContent = (container, e) => {

    
}