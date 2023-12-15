var quotes = [
  {
    quote:
      "But don't you miss out on your future holding too tight to your past.",
    author: "Elle Kayson",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
  },
  {
    quote: "The marks humans leave are too often scars",
    author: "John Green",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
  },
  {
    quote: "Some day you will be old enough to start reading fairy tales again.",
    author: "C.S. Lewis"
  },
  {
    quote:
      "We are what we pretend to be, so we must be careful about what we pretend to be.",
    author: "Kurt Vonnegut",
  },
  {
    quote:
      "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Books are a uniquely portable magic.",
    author: "Stephen King",
  },
  {
    quote:
      "It's no use going back to yesterday, because I was a different person then.",
    author: "Lewis Carroll",
  },
  {
    quote:
      "The truth is rarely pure and never simple.",
    author: "Oscar Wilde",
  },
];



var getRand = (function() {
    var nums = [0,1,2,3,4,5,6,7,8,9];
    var current = [];
    function rand(n) {
        return (Math.random() * n)|0;
    }
    return function() {
      if (!current.length) 
      current = nums.slice();

      return current.splice(rand(current.length), 1);
    }
}());

function GetQuote()
{
var num= getRand();


document.getElementById("quote").innerHTML=quotes[num].quote;
document.getElementById("author").innerHTML=quotes[num].author;
};