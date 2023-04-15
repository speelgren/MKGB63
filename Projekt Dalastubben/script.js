'use strict';

window.addEventListener('DOMContentLoaded', () => {

    /* Create eventlistener for sticky navbar */
    let navbar = document.querySelector('.navbar');
    let navbarOffsetTop = navbar.offsetTop;

    let toggleStickyNavbar = () => {

        if (window.pageYOffset >= navbarOffsetTop) {

            navbar.classList.add('sticky');
        } else {

            navbar.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', toggleStickyNavbar);

    /* Container for params */
    let container = document.querySelector('.container');

    /* Default site content */
    homeContent(container);

    /* Create buttons */
    document.querySelectorAll('.nav-btn').forEach( button => {

        button.addEventListener('click', (e) => {

            /* Back-to-top */
            window.scrollTo({top: 0, behavior: 'smooth'});

            /* Empty container */
            container.innerHTML = "";

            /* Menu choice */
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
    homeTitle.classList.add('home-title');
    let homeTitleTextNode = document.createTextNode('Välkommen till Dalastubben');

    /* Append */
    homeTitle.appendChild(homeTitleTextNode);
    homeContainer.appendChild(homeTitle);

    /* Array */
    let homeCardArray = {
        'Stubbfräsning': {
            'Description': 
                'Stubbfräsning är en effektiv lösning för att hantera besvärliga stubbar, inte bara vid installation av robotgräsklippare, utan även för att skapa en jämn och säker gräsmatta. Vår tjänst eliminerar behovet av tidskrävande och ansträngande grävning, och sparar både tid och energi. Vi mal ner stubben under marknivå, vilket skyddar gräsmattan och ger gräset möjlighet att återhämta sig snabbt. Efteråt fyller vi igen hålet och packar det noggrant, skapar en säker och estetiskt tilltalande utemiljö som underlättar trädgårdsskötsel och förbättrar trädgårdens utseende.', 
            'image': 
                'https://dalastubben.se/____impro/1/product-image-vermeer-sc362-stump-grinder-1.jpg?etag=%227a802-6383410b%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=395%2B263&extract=0%2B0%2B371%2B263&quality=85' 
        },
        'Buskfräsning': {
            'Description':
                'Buskfräsning är en effektiv metod för att snabbt avlägsna oönskade buskar och häckar, skapa öppet utrymme och förändra trädgårdens utseende. Vi mal ner buskar och rötter med en kraftfull buskfräs, förhindrar återväxt och förbereder området för framtida trädgårdsprojekt, samtidigt som vi tar hänsyn till omgivande växter och träd. Vår buskfräsningstjänst förvandlar er trädgård till en attraktiv och funktionell plats på ett enkelt och effektivt sätt.',
            'image': 
                'https://dalastubben.se/____impro/1/vermeer-sc362-575x375.jpg?etag=%2264e60-63836f3f%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=395%2B263&extract=0%2B0%2B371%2B263&quality=85'
        },
        'Trädfällning': {
            'Description': 
                'Trädfällning kan vara nödvändigt av flera skäl, såsom säkerhet, trädets hälsa eller för att skapa mer utrymme. Vi hanterar komplexa och riskfyllda uppgifter med erfaren personal, säkerhetsrutiner och rätt utrustning. Efter trädfällning erbjuder vi även bortforsling och stubbfräsning för att återställa området på ett säkert och effektivt sätt.',
            'image': 
                'https://dalastubben.se/____impro/1/markus-spiske-_b9mXKt0fc4-unsplash.jpg?etag=%221e945b-63a40193%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=311%2B467&extract=0%2B0%2B303%2B393&quality=85'
        },
        'Bortforsling': {
            'Description': 
                'Efter trädfällning, buskfräsning eller andra trädgårdsarbeten kan det finnas rester att ta hand om. Vi erbjuder en bortforslingstjänst som tar hand om allt arbete kring att samla ihop och transportera bort buskar, stammar och grenar miljövänligt, enligt regler och förordningar. Ni kan vara säkra på att er trädgård lämnas rent och prydligt, och ni slipper oroa er för att ta hand om veden själva.',
            'image': 
                'https://dalastubben.se/____impro/1/irena-carpaccio-SZbauhjIizo-unsplash.jpg?etag=W%2F%221a7404-63a41958%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=303%2B455&extract=0%2B0%2B303%2B393&quality=85'
        }
    };

    /* Loop */
    for (let key in homeCardArray) {

        let homeCard = document.createElement('section');
        homeCard.classList.add('card', 'm-3');
        let homeCardBody = document.createElement('article');
        homeCardBody.classList.add('home-card-body', 'card-body');

        /* Image */
        let homeCardImage = document.createElement('img');
        homeCardImage.classList.add('card-img-top');
        homeCardImage.src = homeCardArray[key].image;

        /* Title */
        let homeCardTitle = document.createElement('h1');
        homeCardTitle.classList.add('card-title');
        let homeCardTitleNode = document.createTextNode(key);

        /* Description */
        let homeCardText = document.createElement('p');
        homeCardText.classList.add('card-text');
        let homeCardTextNode = document.createTextNode(homeCardArray[key].Description);

        /* Append */
        homeCard.appendChild(homeCardImage);
        homeCardTitle.appendChild(homeCardTitleNode);
        homeCardBody.appendChild(homeCardTitle);
        homeCardText.appendChild(homeCardTextNode);
        homeCardBody.appendChild(homeCardText);
        homeCard.appendChild(homeCardBody);
        homeContainer.appendChild(homeCard);
        container.appendChild(homeContainer);
    }
}

const aboutContent = (container, e) => {


    console.log(container, e);
}

const contactContent = (container, e) => {


    console.log(container, e);
}

const faqContent = (container, e) => {


    console.log(container, e);
}