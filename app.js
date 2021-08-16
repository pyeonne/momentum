'use strict';

const title = document.querySelector('.hello h1');

function handleTitleClick() {
    title.style.color = 'blue';
}

function handleMouseEnter() {
    title.innerText = 'Moust is hear!';
}

function handleMouseLeave() {
    title.innerText = 'Mouse is gown!';
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);
