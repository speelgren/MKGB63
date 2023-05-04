'use strict';
/* Written in TypeScript */
window.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.scroll-container');
    var navBtn = document.querySelectorAll('.nav-btn');
    var homeContainer = document.querySelector('.home-container');
    var aboutContainer = document.querySelector('.about-container');
    var contactContainer = document.querySelector('.contact-container');
    var faqContainer = document.querySelector('.faq-container');
    /* Index for each container */
    var divContainer = [
        homeContainer,
        aboutContainer,
        contactContainer,
        faqContainer
    ];
    var scroll = function (targetContainer) {
        container.scrollTo({
            top: targetContainer.offsetTop
        });
    };
    /* Navbar buttons. */
    navBtn.forEach(function (button, index) {
        /* Eventlistener for each button */
        button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
            /* Remove active class from other buttons */
            navBtn.forEach(function (otherButton) {
                /* Check if otherButton is not the same as button */
                if (otherButton !== button)
                    otherButton.classList.remove('active');
            });
            /* Add active class to button */
            button === null || button === void 0 ? void 0 : button.classList.add('active');
            shownContainer(index);
            scroll(divContainer[index]);
        });
    });
    /* Function: remove and add d-none from container associated with each nav button */
    var shownContainer = function (index) {
        var _a;
        /* Add d-none to container associated with nav button */
        for (var _i = 0, divContainer_1 = divContainer; _i < divContainer_1.length; _i++) {
            var container_1 = divContainer_1[_i];
            container_1 === null || container_1 === void 0 ? void 0 : container_1.classList.add('d-none');
        }
        /* Remove d-none to container associated with nav button */
        (_a = divContainer[index]) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none');
    };
    /*** Animations ***/
    /* Inspiration from:
     * https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
     */
    var section = document.querySelectorAll('.scroll-item');
    /* Function: check if element is in viewport */
    var isInViewport = function (element) {
        var rect = element.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= container.clientHeight &&
            rect.right <= container.clientWidth);
    };
    /* Function: animate element if it is in viewport */
    var animate = function () {
        section.forEach(function (item) {
            var article = item.querySelector('article');
            /* Give each section its animation */
            if (article && isInViewport(article)) {
                if (article.classList.contains('bounceFromLeft')) {
                    article.style.animation = 'bounceFromLeft 1s ease-out forwards';
                }
                else if (article.classList.contains('fadeIn')) {
                    article.style.animation = 'fadeIn 1.5s ease-out forwards';
                }
                else if (article.classList.contains('bounceFromRight')) {
                    article.style.animation = 'bounceFromRight 1s ease-out forwards';
                }
            }
        });
    };
    /* Eventlistener for scroll */
    container.addEventListener('scroll', function () { return setTimeout(animate, 200); });
});
