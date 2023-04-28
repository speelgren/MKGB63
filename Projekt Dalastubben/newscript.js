'use strict';
/* TypeScript */
window.addEventListener('DOMContentLoaded', function () {
    var navBtn = document.querySelectorAll('.nav-btn');
    var homeContainer = document.querySelector('.home-container');
    var aboutContainer = document.querySelector('.about-container');
    var contactContainer = document.querySelector('.contact-container');
    var faqContainer = document.querySelector('.faq-container');
    /* Navbar buttons */
    navBtn.forEach(function (button, index) {
        button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
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
});
