'use strict';

/* TypeScript */

window.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.querySelectorAll('.nav-btn');
    const homeContainer = document.querySelector('.home-container') as HTMLElement;
    const aboutContainer = document.querySelector('.about-container') as HTMLElement;
    const contactContainer = document.querySelector('.contact-container') as HTMLElement;
    const faqContainer = document.querySelector('.faq-container') as HTMLElement;

    /* Navbar buttons */
    navBtn.forEach( (button, index) => {
        button?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            shownContainer(index);
        });
    });

    /* Index for each container */
    const divContainer = [
        homeContainer,
        aboutContainer,
        contactContainer,
        faqContainer
    ];

    /* Function: remove and add d-none from container associated with each nav button */
    const shownContainer = (index: number) => {
        for (const container of divContainer) {
            container?.classList.add('d-none');
        }
        divContainer[index]?.classList.remove('d-none');
    }
});