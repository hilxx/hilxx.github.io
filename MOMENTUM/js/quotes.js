const quotes = [
    {
        quote: "When you have faults, do not fear to abandon them",
        author: "Confucius",
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "awana Blackwell",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "This too shall pass.",
        author: "Et hoc transibit",
    },
    {
        quote: "Life is unfair, get used to it.",
        author: "Bill Gates",
    },
    {
        quote: "Being happy never goes out of style.",
        author: "Lilly Pulitzer",
    },
    {
        quote: "All you need in this life is ignorance and confidence, then success is sure.",
        author: "Mark Twain",
    },
    {
        quote: " Turn your wounds into wisdom.",
        author: "Oprah Gail Winfrey",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[Math.floor(Math.random() * 10)]);
console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;