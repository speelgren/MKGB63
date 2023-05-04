'use strict';

/* Written in TypeScript */
window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scroll-container') as HTMLElement;
    const navBtn = document.querySelectorAll('.nav-btn');
    const homeContainer = document.querySelector('.home-container') as HTMLElement;
    const aboutContainer = document.querySelector('.about-container') as HTMLElement;
    const contactContainer = document.querySelector('.contact-container') as HTMLElement;
    const faqContainer = document.querySelector('.faq-container') as HTMLElement;

    /* Index for each container */
    const divContainer = [
        homeContainer,
        aboutContainer,
        contactContainer,
        faqContainer
    ];

    const scroll = (targetContainer: HTMLElement) => {
        container.scrollTo({
            top: targetContainer.offsetTop
        });
    }

    /* Navbar buttons. */
    navBtn.forEach( (button, index) => {
        /* Eventlistener for each button */
        button?.addEventListener('click', () => {
            /* Remove active class from other buttons */
            navBtn.forEach( (otherButton) => {
                /* Check if otherButton is not the same as button */
                if (otherButton !== button)
                otherButton.classList.remove('active');
            });
            /* Add active class to button */
            button?.classList.add('active');
            shownContainer(index);
            scroll(divContainer[index]);
        });
    });

    /* Function: remove and add d-none from container associated with each nav button */
    const shownContainer = (index: number) => {
        /* Add d-none to container associated with nav button */
        for (const container of divContainer) {
            container?.classList.add('d-none');
        }
        /* Remove d-none to container associated with nav button */
        divContainer[index]?.classList.remove('d-none');
    }

    /*** Animations ***/
    /* Inspiration from: 
     * https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
     */
    const section = document.querySelectorAll('.scroll-item');

    /* Function: check if element is in viewport */
    const isInViewport = (element: Element) : boolean => { 
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= container.clientHeight &&
            rect.right <= container.clientWidth
        );
    };

    /* Function: animate element if it is in viewport */
    const animate = (): void => {

            section.forEach( (item : Element) => {
                const article = item.querySelector('article');
    
                /* Give each section its animation */
                if (article && isInViewport(article)) {
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
    container.addEventListener('scroll', () => setTimeout(animate, 200));
});
