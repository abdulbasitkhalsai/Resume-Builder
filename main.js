"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
    }
});
