'use strict';

/* Written in TypeScript */

window.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.querySelectorAll('.nav-btn');
    const homeContainer = document.querySelector('.home-container') as HTMLElement;
    const aboutContainer = document.querySelector('.about-container') as HTMLElement;
    const contactContainer = document.querySelector('.contact-container') as HTMLElement;
    const faqContainer = document.querySelector('.faq-container') as HTMLElement;

    /* Navbar buttons. */
    navBtn.forEach( (button, index) => {
        button?.addEventListener('click', () => {
            navBtn.forEach( (otherButton) => {
                if (otherButton !== button)
                otherButton.classList.remove('active');
            });
            button?.classList.add('active');
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

    /*** Animations ***/
    /* Inspiration from: https://www.google.com/search?client=safari&rls=en&q=javascript+tutorial+in+viewport&ie=UTF-8&oe=UTF-8 */
    const section = document.querySelectorAll('section');

    const withinViewport = (el: HTMLElement): boolean => {
        const rect = el.getBoundingClientRect();
        const offset = 100; // offset to show animation before element is 100% in viewport. looked better when scrolling

        return (
            rect.top + offset  >= 0 &&
            rect.left + offset >= 0 &&
            rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right - offset <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const animate = (): void => {
        section.forEach( (item : Element) => {
            const article = item.querySelector('article');

            /* Give each section its animation */
            if (article && withinViewport(article)) {
                if (article.classList.contains('bounceFromLeft')) {
                    article.style.animation = 'bounceFromLeft 1s ease-out forwards';
                } else if (article.classList.contains('fadeIn')) {
                    article.style.animation = 'fadeIn 1.5s ease-out forwards';
                } else if (article.classList.contains('bounceFromRight')) {
                    article.style.animation = 'bounceFromRight 1s ease-out forwards';
                }
            }
        });
    };

    /* Eventlistener for scroll */
    window.addEventListener('scroll', animate);
});
