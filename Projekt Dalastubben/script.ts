'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    //const navbarOffsetTop = navbar.offsetTop;
    const container = document.querySelector('.container') as HTMLElement;
  
    /*
     * Återkommer till detta när jag hittat en bra lösning.
    const toggleStickyNavbar = () => {
        if (window.pageYOffset >= navbarOffsetTop) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };
    */
  
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
    //window.addEventListener('scroll', toggleStickyNavbar);
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
};

const createServiceCard = (key: string, service: Service) => {
    const serviceCard = document.createElement('section');
    serviceCard.classList.add('card', 'm-3', 'scroll-item');

    const serviceCardBody = document.createElement('article');
    serviceCardBody.classList.add('card-body');

    const serviceCardImage = document.createElement('img');
    serviceCardImage.classList.add('card-img-top');
    serviceCardImage.src = service.image;

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
    homeHeader.textContent = 'Kontakta oss idag för en kostnadsfri offert!';
    homeContainer.appendChild(homeHeader);

    /* Array */
    const homeArray: Record<string, Service> = {
        'Stubbfräsning': {
            'description': 
                'Stubbfräsning hanterar effektivt besvärliga stubbar för jämnare gräsmattor och enklare robotgräsklipparinstallation. Vår tjänst ersätter tidskrävande grävning och sparar energi. Vi mal ner stubben, skyddar gräsmattan och låter gräset återhämta sig snabbt. Hålet fylls igen och packas noggrant för en säker och estetiskt tilltalande trädgård.', 
            'image': 
                'https://dalastubben.se/____impro/1/product-image-vermeer-sc362-stump-grinder-1.jpg?etag=%227a802-6383410b%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=395%2B263&extract=0%2B0%2B371%2B263&quality=85' 
        },
        'Buskfräsning': {
            'description':
                'Buskfräsning är en effektiv metod för att snabbt avlägsna oönskade buskar och häckar, skapa öppet utrymme och förändra trädgårdens utseende. Vi mal ner buskar och rötter med en kraftfull buskfräs, förhindrar återväxt och förbereder området för framtida trädgårdsprojekt, samtidigt som vi tar hänsyn till omgivande växter och träd. Vår buskfräsningstjänst förvandlar er trädgård till en attraktiv och funktionell plats på ett enkelt och effektivt sätt.',
            'image': 
                'https://dalastubben.se/____impro/1/vermeer-sc362-575x375.jpg?etag=%2264e60-63836f3f%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=395%2B263&extract=0%2B0%2B371%2B263&quality=85'
        },
        'Trädfällning': {
            'description': 
                'Trädfällning kan vara nödvändigt av flera skäl, såsom säkerhet, trädets hälsa eller för att skapa mer utrymme. Vi hanterar komplexa och riskfyllda uppgifter med erfaren personal, säkerhetsrutiner och rätt utrustning. Efter trädfällning erbjuder vi även bortforsling och stubbfräsning för att återställa området på ett säkert och effektivt sätt.',
            'image': 
                'https://dalastubben.se/____impro/1/markus-spiske-_b9mXKt0fc4-unsplash.jpg?etag=%221e945b-63a40193%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=311%2B467&extract=0%2B0%2B303%2B393&quality=85'
        },
        'Bortforsling': {
            'description': 
                'Efter trädfällning, buskfräsning eller andra trädgårdsarbeten kan det finnas rester att ta hand om. Vi erbjuder en bortforslingstjänst som tar hand om allt arbete kring att samla ihop och transportera bort buskar, stammar och grenar miljövänligt, enligt regler och förordningar. Ni kan vara säkra på att er trädgård lämnas rent och prydligt, och ni slipper oroa er för att ta hand om veden själva.',
            'image': 
                'https://dalastubben.se/____impro/1/irena-carpaccio-SZbauhjIizo-unsplash.jpg?etag=W%2F%221a7404-63a41958%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=303%2B455&extract=0%2B0%2B303%2B393&quality=85'
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