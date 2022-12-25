"use strict";

document.getElementById('js-hamburger').addEventListener('click', function () {
    document.getElementById('js-hamburger').classList.toggle('is-active');
    document.getElementById('js-nav').classList.toggle('is-active');
});

document.querySelectorAll('#js-nav nav ul li a').forEach(function (a) {
    a.addEventListener('click', function () { 
        document.getElementById('js-hamburger').classList.remove('is-active');
        document.getElementById('js-nav').classList.remove('is-active');
    })
});