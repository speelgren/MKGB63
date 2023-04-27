'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navbarOffsetTop = navbar.offsetTop;
    const navBtn = document.querySelectorAll('.nav-btn');
    const divContainer = document.querySelectorAll('.div-container');
    const homeContainer = document.querySelector('.home-container');
    const aboutContainer = document.querySelector('.about-container');
    const contactContainer = document.querySelector('.contact-container');

    const toggleStickyNavbar = () => {
        let _a, _b;
        if(window.scrollY > navbarOffsetTop) {
            (_a = document.querySelector('.hidden-nav')) === null ||
            _a === void 0 ? void 0 : _a.classList.remove('d-none');
            navbar.classList.add('sticky');
        } else {
            (_b = document.querySelector('.hidden-nav')) === null ||
            _b === void 0 ? void 0 : _b.classList.add('d-none');
            navbar.classList.remove('sticky');
        }
    };

    /* Create eventlistener for sticky navbar */
    window.addEventListener('scroll', toggleStickyNavbar);
    /* Navbar menu choices */
    navBtn.forEach( (button) => {
        button.addEventListener('click', (e) => {

            switch (e.target.textContent) {
                case 'Hem':
                    homeContainer.classList.remove('d-none');
                    break;
                case 'Om oss':
                    aboutContainer.classList.remove('d-none');
                    break;
                case 'Kontakt':
                    contactContainer.classList.remove('d-none');
                default:
                    break;
            }
        })
    })

});