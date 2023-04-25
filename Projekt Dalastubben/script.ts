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

type Service = {
    description: string;
    image: string;
    alt: string;
};

const createServiceCard = (key: string, service: Service) => {
    const serviceCard = document.createElement('section');
    serviceCard.classList.add('card', 'm-3');

    const serviceCardBody = document.createElement('article');
    serviceCardBody.classList.add('card-body', 'scroll-item');

    const serviceCardImage = document.createElement('img');
    serviceCardImage.classList.add('card-img-top');
    serviceCardImage.src = service.image;
    serviceCardImage.alt = service.alt;

    const serviceCardTitle = document.createElement('h1');
    serviceCardTitle.classList.add('card-title');
    serviceCardTitle.textContent = key;

    const serviceCardText = document.createElement('p');
    serviceCardText.classList.add('card-text');
    serviceCardText.textContent = service.description;

    serviceCardBody.append(serviceCardTitle, serviceCardText);
    serviceCard.append(serviceCardImage, serviceCardBody);

    return serviceCard;
};

const homeContent = (container: HTMLElement) => {

    /* Home container */
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container', 'container', 'scroll-container');

    /* Title */
    const homeHeader = document.createElement('h1');
    homeHeader.classList.add('home-header', 'text-center');
    homeHeader.textContent = 'Kontakta oss för en kostnadsfri offert!';
    homeContainer.appendChild(homeHeader);

    /* Array */
    const homeArray: Record<string, Service> = {
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
        const serviceCard = createServiceCard(key, homeArray[key]);
        homeContainer.appendChild(serviceCard);
    }

    /* Append to container */
    container.appendChild(homeContainer);
};

const aboutContent = (container: HTMLElement) => {

    /* About container */
    let aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container', 'container');

    /* Title */


    /* Array */
    const aboutArray: Record<string, Service> = {
        'Om oss': {
            'description':
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum sed alias! Illum nobis voluptatibus magni eius, tempore quidem. Unde quis ab adipisci perferendis nostrum obcaecati cupiditate tempore doloremque quaerat. Eos culpa ipsa corrupti quidem! Assumenda iste, error deleniti sed aperiam commodi adipisci delectus voluptas officia, illum doloribus odio non ipsam odit, nemo est quaerat! Voluptatem optio sed quis beatae!',
            'image':
                'img/338478373_1172961236713969_3398877940177328384_n.webp.jpeg',
            'alt':
                'Företagsfordon Dalastubben'
        }
    };

    /* Loop to display content in array */
    for (const key in aboutArray) {
        const serviceCard = createServiceCard(key, aboutArray[key]);
        aboutContainer.appendChild(serviceCard);
    }

    /* Append to container */
    container.appendChild(aboutContainer);
}

const contactContent = (container: HTMLElement) => {


}

const faqContent = (container: HTMLElement) => {


}