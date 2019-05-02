/******************************************
Treehouse FSJS Techdegree:
Heinz Araque
04/30/2019
project 1 - A Random Quote Generator
******************************************/

// Create an array and call it quotes.
var quotes = [
  // Create at least 5 objects inside the array.
  {
    // Give at least 2 properties to every object: quote and source.
    quote: "Give me liberty, or give me death!",
    source: "Patrick Henry",
    // Add the year property to at least 1 object.
    year: "1775",
    tags: "inspirational, philosophy"
  },
  {
    quote: "One good thing about music, when it hits you, you feel no pain.",
    source: "Bob Marley",
    year: "1975",
    tags: "music"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas A. Edison",
    tags: "edison, failure, inspirational, paraphrased"
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    source: "Oscar Wilde",
    tags: "life"
  },
  {
    quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    source: "Oscar Wilde",
    // Add the citation property to at least 1 object.
    citation: "The Happy Prince and Other Stories",
    tags: " intelligence, self-deprecation"
  },
  {
    quote: "Never go to bed mad. Stay up and fight.",
    source: "Phyllis Diller",
    tags: "anger, funny, sleep"
  },
  {
    quote: "If a book about failures doesn't sell, is it a success?",
    source: "Jerry Seinfeld",
    tags: "books, funny"
  },
];

// Use console.log() to log your array of quotes to the console.
console.log(quotes);

// Create an array of colors
var colors = ["#36b55c", "#367ab5", "#8236b5", "#b5366b", "#b56036","#b59e36","#389067", "#386a90", "#0d1e2c"];

// Create the `getRandomQuote` function
function getRandomQuote(){
  // Create a random number from 0 to the array length -1.
  var randomNumber = Math.floor((Math.random() * quotes.length));
  // Store the retrieved quote in a variable. 
  var randomQuote = quotes[randomNumber];
  // Return the randomQuote.
  return randomQuote;
}

// Create a function to change the background color of the body of the document.
function changeBackgroundColor(){
  // Create a random number from 0 to the array length -1.
  var randomNumber = Math.floor((Math.random() * colors.length));
  // Change the body background color in the HTML.
  document.querySelector("body").style.backgroundColor = colors[randomNumber];
}

// Create the `printQuote` to format the string that will be printed to the document.
function printQuote() {
  // Get a random quote using the getRandomQuote function.
  randomQuote = getRandomQuote()
  // Call the change background color function.
  changeBackgroundColor();
  // Create the variable that's going to hold the string that we will pass to the document.
  var quote = '<p class="quote">';
  quote += randomQuote.quote;
  quote += '</p>';

  // Add the source
  quote += '<p class="source">';
  quote += randomQuote.source;

  // Check if the citation property exists in the object quote.
  if(randomQuote.citation){
    quote += '<span class="citation">';
    quote += randomQuote.citation;
  }

  // Check if the year property exists in the object quote.
  if(randomQuote.year){
    quote += '<span class="year">';
    quote += randomQuote.year;
  }
  quote += '</p>';

  // Add the tags to the quote.
  quote += '<p class="tags"> tags: '
  quote += randomQuote.tags;
  quote += '</p>';

  document.querySelector("#quote-box").innerHTML = quote;
}

// Set the interval that wil call the printQuote function every 20000 milliseconds  
setInterval(printQuote, 20000)

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);