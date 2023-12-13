/* ============ Variables =========== */
const quoteText = document.querySelector('.quote__text');
const quoteAuthor = document.querySelector('.quote__author');
const btnQuoteGenerate = document.querySelector('.btn-quote-generate');
const iconQuoteGenerate = document.querySelector('.icon-quote-generate');

const quotes = [
  {
    quote: `Be yourself; everyone else is already taken.`,
    author: 'Oscar Wilde',
  },
  {
    quote: `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`,
    author: 'J.K. Rowling',
  },
  {
    quote: `A friend is someone who knows all about you and still loves you.`,
    author: 'Elbert Hubbard',
  },
  {
    quote: `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`,
    author: 'Martin Luther King Jr.',
  },
  {
    quote: `The man who does not read has no advantage over the man who cannot read.`,
    author: 'Mark Twain',
  },
  {
    quote: `Well done is better than well said.`,
    author: 'Benjamin Franklin',
  },
  {
    quote: `The only thing we have to fear is fear itself.`,
    author: 'Franklin D. Roosevelt',
  },
  {
    quote: `Do not go where the path may lead, go instead where there is no path and leave a trail.`,
    author: 'Ralph Waldo Emerson',
  },
  {
    quote: `You will face many defeats in life, but never let yourself be defeated.`,
    author: 'Maya Angelou',
  },
  {
    quote: `In the end, it's not the years in your life that count. It's the life in your years.`,
    author: 'Abraham Lincoln',
  },
  {
    quote: `Never let the fear of striking out keep you from playing the game.`,
    author: 'Babe Ruth',
  },
  {
    quote: `Many of life's failures are people who did not realize how close they were to success when they gave up.`,
    author: 'Thomas A. Edison',
  },
  {
    quote: `The only impossible journey is the one you never begin.`,
    author: 'Tony Robbins',
  },
  {
    quote: `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.`,
    author: 'Ralph Waldo Emerson',
  },
];

let previousQuoteNum;
let iconRotate = 180;

/* ============ Functions =========== */
function generateRandomNum() {
  return Math.trunc(Math.random() * quotes.length);
}

function generateRandomQuote() {
  // Generating random quote number
  let randomQuoteNum = generateRandomNum();
  // If that number = the previous generated number regenerate it
  while (randomQuoteNum === previousQuoteNum) {
    randomQuoteNum = generateRandomNum();
  }

  // Save this number for the next quote generation
  previousQuoteNum = randomQuoteNum;

  // Display the generated quote in the UI
  quoteText.innerHTML = quotes[randomQuoteNum].quote;
  quoteAuthor.innerHTML = quotes[randomQuoteNum].author;
}

/* ============= Events ============= */
btnQuoteGenerate.onclick = () => {
  generateRandomQuote();

  iconQuoteGenerate.style.transform = `rotate(${iconRotate}deg)`;
  iconRotate += 180;
};
