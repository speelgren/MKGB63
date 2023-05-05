'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scroll-container');
    const navBtns = document.querySelectorAll('.nav-btn');
    const homeContainer = document.querySelector('.home-container');
    const aboutContainer = document.querySelector('.about-container');
    const contactContainer = document.querySelector('.contact-container');
    const faqContainer = document.querySelector('.faq-container');
    const sections = document.querySelectorAll('.scroll-item');

    const divContainers = [
        homeContainer,
        aboutContainer,
        contactContainer,
        faqContainer
    ];

    const scrollToContainer = (targetContainer) => {
        container.scrollTo({
            top: targetContainer.offsetTop
        });
    };

    navBtns.forEach((button, index) => {
        button.addEventListener('click', () => {
            navBtns.forEach((otherButton) => {
                if (otherButton !== button) {
                    otherButton.classList.remove('active');
                }
            });

            button.classList.add('active');
            displayContainer(index);
            scrollToContainer(divContainers[index]);
        });
    });

    const displayContainer = (index) => {
        divContainers.forEach((container) => {
            container.classList.add('d-none');
        });

        divContainers[index].classList.remove('d-none');
    };

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= container.clientHeight &&
            rect.right <= container.clientWidth
        );
    };

    const animateSections = () => {
        sections.forEach((item) => {
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
