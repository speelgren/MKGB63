'use strict';
window.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    var navbarOffsetTop = navbar.offsetTop;
    var container = document.querySelector('.container');
    var toggleStickyNavbar = function () {
        var _a, _b;
        if (window.scrollY > navbarOffsetTop) {
            (_a = document.querySelector('.hidden-nav')) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none');
            navbar.classList.add('sticky');
        }
        else {
            (_b = document.querySelector('.hidden-nav')) === null || _b === void 0 ? void 0 : _b.classList.add('d-none');
            navbar.classList.remove('sticky');
        }
    };
    var setContent = function (contentFunction) {
        /* Back-to-top */
        window.scrollTo({ top: 0, behavior: 'smooth' });
        /* Empty content in container */
        container.innerHTML = '';
        /* Add default content to container */
        contentFunction(container);
    };
    /* Menu choices */
    var contentMap = {
        'Hem': homeContent,
        'Om oss': aboutContent,
        'Kontakt': contactContent,
        'FAQ': faqContent
    };
    /* Create eventlistener for sticky navbar */
    window.addEventListener('scroll', toggleStickyNavbar);
    /* Default site content */
    homeContent(container);
    /* Create buttons */
    document.querySelectorAll('.nav-btn').forEach(function (button) {
        button.addEventListener('click', function (e) {
            var contentFunction = contentMap[e.target.textContent];
            if (contentFunction) {
                setContent(contentFunction);
            }
        });
    });
});
var createCard = function (key, card) {
    var Card = document.createElement('section');
    Card.classList.add('card', 'm-3');
    var CardBody = document.createElement('article');
    CardBody.classList.add('card-body', 'scroll-item');
    var CardImage = document.createElement('img');
    CardImage.classList.add('card-img-top');
    CardImage.src = card.image;
    CardImage.alt = card.alt;
    var CardTitle = document.createElement('h1');
    CardTitle.classList.add('card-title');
    CardTitle.textContent = key;
    var CardText = document.createElement('p');
    CardText.classList.add('card-text');
    CardText.textContent = card.description;
    CardBody.append(CardTitle, CardText);
    Card.append(CardImage, CardBody);
    return Card;
};
var homeContent = function (container) {
    /* Home container */
    var homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container', 'container', 'scroll-container');
    /* Array */
    var homeArray = {
        'Stubbfräsning': {
            'description': 'Stubbfräsning hanterar effektivt besvärliga stubbar för jämnare gräsmattor och enklare robotgräsklipparinstallation. Vår tjänst ersätter tidskrävande grävning och sparar energi. Vi mal ner stubben, skyddar gräsmattan och låter gräset återhämta sig snabbt. Hålet fylls igen och packas noggrant för en säker och estetiskt tilltalande trädgård.',
            'image': 'img/Skärmbild 2023-03-27 142147.png',
            'alt': 'Stubbfräsning'
        },
        'Buskfräsning': {
            'description': 'Buskfräsning är en effektiv metod för att snabbt avlägsna oönskade buskar och häckar, skapa öppet utrymme och förändra trädgårdens utseende. Vi mal ner buskar och rötter med en kraftfull buskfräs, förhindrar återväxt och förbereder området för framtida trädgårdsprojekt, samtidigt som vi tar hänsyn till omgivande växter och träd. Vår buskfräsningstjänst förvandlar er trädgård till en attraktiv och funktionell plats på ett enkelt och effektivt sätt.',
            'image': 'img/SC362_Action_01.jpg',
            'alt': 'Buskfräsning'
        },
        'Trädfällning': {
            'description': 'Trädfällning kan vara nödvändigt av flera skäl, såsom säkerhet, trädets hälsa eller för att skapa mer utrymme. Vi hanterar komplexa och riskfyllda uppgifter med erfaren personal, säkerhetsrutiner och rätt utrustning. Efter trädfällning erbjuder vi även bortforsling och stubbfräsning för att återställa området på ett säkert och effektivt sätt.',
            'image': 'img/forest-g609f0d95e_1920.jpg',
            'alt': 'Trädfällning'
        }
    };
    /* Loop to display content in array */
    for (var key in homeArray) {
        var serviceCard = createCard(key, homeArray[key]);
        homeContainer.appendChild(serviceCard);
    }
    /* Append to container */
    container.appendChild(homeContainer);
};
var aboutContent = function (container) {
    /* About container */
    var aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container', 'container');
    /* Title */
    var aboutTitle = document.createElement('h1');
    aboutTitle.classList.add('about-title', 'text-center');
    aboutTitle.textContent = 'Om oss';
    var aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium eius rerum, reiciendis voluptas quibusdam provident sint, qui ex, beatae assumenda error facilis vero fuga impedit quae dolorem blanditiis magni? Iusto nisi minima praesentium quis sint pariatur, recusandae architecto in omnis. Dignissimos repellendus quidem at cumque, ratione doloribus in dolorem illum nostrum. Recusandae repellendus obcaecati voluptatibus itaque quo! Enim, laboriosam?';
    /* Append to container */
    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutText);
    container.appendChild(aboutContainer);
};
var contactContent = function (container) {
};
var faqContent = function (container) {
};
