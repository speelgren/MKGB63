'use strict';
/* Written in TypeScript */
window.addEventListener('DOMContentLoaded', function () {
    var navBtn = document.querySelectorAll('.nav-btn');
    var homeContainer = document.querySelector('.home-container');
    var aboutContainer = document.querySelector('.about-container');
    var contactContainer = document.querySelector('.contact-container');
    var faqContainer = document.querySelector('.faq-container');
    /* Navbar buttons. */
    navBtn.forEach(function (button, index) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
            navBtn.forEach(function (otherButton) {
                if (otherButton !== button)
                    otherButton.classList.remove('active');
            });
            button === null || button === void 0 ? void 0 : button.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            shownContainer(index);
        });
    });
    /* Index for each container */
    var divContainer = [
        homeContainer,
        aboutContainer,
        contactContainer,
        faqContainer
    ];
    /* Function: remove and add d-none from container associated with each nav button */
    var shownContainer = function (index) {
        var _a;
        for (var _i = 0, divContainer_1 = divContainer; _i < divContainer_1.length; _i++) {
            var container = divContainer_1[_i];
            container === null || container === void 0 ? void 0 : container.classList.add('d-none');
        }
        (_a = divContainer[index]) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none');
    };
    /*** Animations ***/
    /* Inspiration from: https://www.google.com/search?client=safari&rls=en&q=javascript+tutorial+in+viewport&ie=UTF-8&oe=UTF-8 */
    var section = document.querySelectorAll('section');
    var withinViewport = function (el) {
        var rect = el.getBoundingClientRect();
        var offset = 100; // offset to show animation before element is 100% in viewport. looked better when scrolling
        return (rect.top + offset >= 0 &&
            rect.left + offset >= 0 &&
            rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right - offset <= (window.innerWidth || document.documentElement.clientWidth));
    };
    var animate = function () {
        section.forEach(function (item) {
            var article = item.querySelector('article');
            /* Give each section its animation */
            if (article && withinViewport(article)) {
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
    window.addEventListener('scroll', animate);
});
