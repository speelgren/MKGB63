'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const navbarOffsetTop = navbar.offsetTop;
    const container = document.querySelector('.container') as HTMLElement;
  
    const toggleStickyNavbar = () => {
        if (window.scrollY > navbarOffsetTop) {
            document.querySelector('.hidden-nav')?.classList.remove('d-none');
            navbar.classList.add('sticky');
        } else {
            document.querySelector('.hidden-nav')?.classList.add('d-none');
            navbar.classList.remove('sticky');
        }
    };
  
    const setContent = (contentFunction: (container: HTMLElement) => void) => {
        /* Back-to-top */
        window.scrollTo({ top: 0, behavior: 'smooth' });
        /* Empty content in container */
        container.innerHTML = '';
        /* Add default content to container */
        contentFunction(container);
    };
  
    /* Menu choices */
    const contentMap: Record<string, (container: HTMLElement) => void> = {
        'Hem': homeContent,
        'Om oss': aboutContent,
        'Kontakt': contactContent,
        'FAQ': faqContent,
    };
  
    /* Create eventlistener for sticky navbar */
    window.addEventListener('scroll', toggleStickyNavbar);
    /* Default site content */
    homeContent(container);
  
    /* Create buttons */
    document.querySelectorAll('.nav-btn').forEach((button) => {
        button.addEventListener('click', (e) => {
            const contentFunction = contentMap[(e.target as HTMLElement).textContent as keyof typeof contentMap];
            if (contentFunction) {
                setContent(contentFunction);
            }
        });
    });
});

type Card = {
    description: string;
    image: string;
    alt: string;
};

const createCard = (key: string, card: Card) => {
    const Card = document.createElement('section');
    Card.classList.add('card', 'm-3');

    const CardBody = document.createElement('article');
    CardBody.classList.add('card-body', 'scroll-item');

    const CardImage = document.createElement('img');
    CardImage.classList.add('card-img-top');
    CardImage.src = card.image;
    CardImage.alt = card.alt;

    const CardTitle = document.createElement('h1');
    CardTitle.classList.add('card-title');
    CardTitle.textContent = key;

    const CardText = document.createElement('p');
    CardText.classList.add('card-text');
    CardText.textContent = card.description;

    CardBody.append(CardTitle, CardText);
    Card.append(CardImage, CardBody);

    return Card;
};

const homeContent = (container: HTMLElement) => {

    /* Home container */
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container', 'container', 'scroll-container');

    /* Array */
    const homeArray: Record<string, Card> = {
        'Stubbfräsning': {
            'description': 
                'Stubbfräsning hanterar effektivt besvärliga stubbar för jämnare gräsmattor och enklare robotgräsklipparinstallation. Vår tjänst ersätter tidskrävande grävning och sparar energi. Vi mal ner stubben, skyddar gräsmattan och låter gräset återhämta sig snabbt. Hålet fylls igen och packas noggrant för en säker och estetiskt tilltalande trädgård.', 
            'image': 
                'img/Skärmbild 2023-03-27 142147.png',
            'alt':
                'Stubbfräsning'
        },
        'Buskfräsning': {
            'description':
                'Buskfräsning är en effektiv metod för att snabbt avlägsna oönskade buskar och häckar, skapa öppet utrymme och förändra trädgårdens utseende. Vi mal ner buskar och rötter med en kraftfull buskfräs, förhindrar återväxt och förbereder området för framtida trädgårdsprojekt, samtidigt som vi tar hänsyn till omgivande växter och träd. Vår buskfräsningstjänst förvandlar er trädgård till en attraktiv och funktionell plats på ett enkelt och effektivt sätt.',
            'image': 
                'img/SC362_Action_01.jpg',
            'alt':
                'Buskfräsning'
        },
        'Trädfällning': {
            'description': 
                'Trädfällning kan vara nödvändigt av flera skäl, såsom säkerhet, trädets hälsa eller för att skapa mer utrymme. Vi hanterar komplexa och riskfyllda uppgifter med erfaren personal, säkerhetsrutiner och rätt utrustning. Efter trädfällning erbjuder vi även bortforsling och stubbfräsning för att återställa området på ett säkert och effektivt sätt.',
            'image': 
                'img/forest-g609f0d95e_1920.jpg',
            'alt':
                'Trädfällning'
        }
    };

    /* Loop to display content in array */
    for (const key in homeArray) {
        const serviceCard = createCard(key, homeArray[key]);
        homeContainer.appendChild(serviceCard);
    }

    /* Append to container */
    container.appendChild(homeContainer);
};

const aboutContent = (container: HTMLElement) => {

    /* About container */
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container', 'container');

    /* Title */
    const aboutTitle = document.createElement('h1');
    aboutTitle.classList.add('about-title', 'text-center');
    aboutTitle.textContent = 'Om oss';

    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium eius rerum, reiciendis voluptas quibusdam provident sint, qui ex, beatae assumenda error facilis vero fuga impedit quae dolorem blanditiis magni? Iusto nisi minima praesentium quis sint pariatur, recusandae architecto in omnis. Dignissimos repellendus quidem at cumque, ratione doloribus in dolorem illum nostrum. Recusandae repellendus obcaecati voluptatibus itaque quo! Enim, laboriosam?';

    /* Append to container */
    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutText);
    container.appendChild(aboutContainer);
}

const contactContent = (container: HTMLElement) => {


}

const faqContent = (container: HTMLElement) => {


}