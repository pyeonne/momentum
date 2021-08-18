'use strict';

const quotes = [
    {
        quote: 'Shallow men believe in luck, Strong men believe in cause and effect.',
        author: 'Ralph Waldo Emerson',
    },
    {
        quote: 'Choose a job you love, and you will never have to work a day in your life.',
        author: 'Confucius',
    },
    {
        quote: 'What’s gone and what’s past help, should be past grief.',
        author: 'William Shakespeare',
    },
    {
        quote: 'There isn’t a person anywhere that isn’t capable of doing more than he thinks he can.',
        author: 'Henry Ford',
    },
    {
        quote: 'Confidence is contagious. So is lack of confidence.',
        author: 'Vince Lombardi',
    },
    {
        quote: 'Indolence is a delightful but distressing state; we must be doing something to be happy.',
        author: 'Mahatma Gandhi',
    },
    {
        quote: 'Think like a man of action, act like a man of thought.',
        author: 'Henri Bergson',
    },
    {
        quote: 'It’s not that I’m so smart, it’s just that I stay with problems longer.',
        author: 'Albert Einstein',
    },
    {
        quote: 'The best preparation for tomorrow is doing your best today.',
        author: 'H. Jackson Brown, Jr.',
    },
    {
        quote: 'Only the person who has faith in himself is able to be faithful to others.',
        author: 'Erich Fromm',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.round(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
