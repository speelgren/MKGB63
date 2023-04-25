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
var createServiceCard = function (key, service) {
    var serviceCard = document.createElement('section');
    serviceCard.classList.add('card', 'm-3');
    var serviceCardBody = document.createElement('article');
    serviceCardBody.classList.add('card-body', 'scroll-item');
    var serviceCardImage = document.createElement('img');
    serviceCardImage.classList.add('card-img-top');
    serviceCardImage.src = service.image;
    serviceCardImage.alt = service.alt;
    var serviceCardTitle = document.createElement('h1');
    serviceCardTitle.classList.add('card-title');
    serviceCardTitle.textContent = key;
    var serviceCardText = document.createElement('p');
    serviceCardText.classList.add('card-text');
    serviceCardText.textContent = service.description;
    serviceCardBody.append(serviceCardTitle, serviceCardText);
    serviceCard.append(serviceCardImage, serviceCardBody);
    return serviceCard;
};
var homeContent = function (container) {
    /* Home container */
    var homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container', 'container', 'scroll-container');
    /* Title */
    var homeHeader = document.createElement('h1');
    homeHeader.classList.add('home-header', 'text-center');
    homeHeader.textContent = 'Kontakta oss för en kostnadsfri offert!';
    homeContainer.appendChild(homeHeader);
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
        var serviceCard = createServiceCard(key, homeArray[key]);
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
    /* Array */
    var aboutArray = {
        'Om oss': {
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum sed alias! Illum nobis voluptatibus magni eius, tempore quidem. Unde quis ab adipisci perferendis nostrum obcaecati cupiditate tempore doloremque quaerat. Eos culpa ipsa corrupti quidem! Assumenda iste, error deleniti sed aperiam commodi adipisci delectus voluptas officia, illum doloribus odio non ipsam odit, nemo est quaerat! Voluptatem optio sed quis beatae!',
            'image': 'img/338478373_1172961236713969_3398877940177328384_n.webp.jpeg',
            'alt': 'Företagsfordon Dalastubben'
        }
    };
    /* Loop to display content in array */
    for (var key in aboutArray) {
        var serviceCard = createServiceCard(key, aboutArray[key]);
        aboutContainer.appendChild(serviceCard);
    }
    /* Append to container */
    container.appendChild(aboutContainer);
};
var contactContent = function (container) {
};
var faqContent = function (container) {
};
