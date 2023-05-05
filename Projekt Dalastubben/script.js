'use strict';

window.addEventListener('DOMContentLoaded', () => {
    /* querySelect element som ska användas i koden. */
    const container = document.querySelector('.scroll-container');
    const navBtns = document.querySelectorAll('.nav-btn');
    const homeContainer = document.querySelector('.home-container');
    const aboutContainer = document.querySelector('.about-container');
    const contactContainer = document.querySelector('.contact-container');
    const faqContainer = document.querySelector('.faq-container');
    const sections = document.querySelectorAll('.scroll-item');

    /* Array med container som ska hämtas med index. */
    const divContainers = [
        homeContainer,
        aboutContainer,
        contactContainer,
        faqContainer
    ];

    /* Funktion: Lägg knapplyssnare på varje nav button.
     * Lägg till klassen active på den knapp som klickas,
     * ta bort active från, om det finns, en annan knapp med klassen. */
    navBtns.forEach( (button, index) => {
        button.addEventListener('click', () => {
            navBtns.forEach( (otherButton) => {
                if (otherButton !== button) {
                    otherButton.classList.remove('active');
                }
            });

            button.classList.add('active');
            displayContainer(index);
            scrollToContainer(divContainers[index]);
        });
    });

    /* Funktion: Scrolla ner till relevant container
     * när användaren klickar på ett menyval. */
    const scrollToContainer = (targetContainer) => {
        container.scrollTo({
            top: targetContainer.offsetTop
        });
    };

    /* Funktion: Lägg till, eller ta bort, d-none från container */
    const displayContainer = (index) => {
        divContainers.forEach( (container) => {
            container.classList.add('d-none');
        });

        divContainers[index].classList.remove('d-none');
    };

    /* Scroll-animationer
     * Med inspiration from:
     * https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
     */

    /* Funktion: Kolla om ett element är i viewport */
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= container.clientHeight &&
            rect.right <= container.clientWidth
        );
    };

    /* Funktion: Animera det element som är inom viewport. */
    const animateSections = () => {
        sections.forEach( (item) => {
            const article = item.querySelector('article');

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

    container.addEventListener('scroll', () => setTimeout(animateSections, 200));
});
