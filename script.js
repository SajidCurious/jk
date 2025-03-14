// Array of quotes
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The best way to predict the future is to invent it. – Alan Kay",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The only way to do great work is to love what you do. – Steve Jobs"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Event listener for the quote button
document.getElementById('quoteBtn').addEventListener('click', function () {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getRandomQuote();
});