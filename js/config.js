// Coniguration file for the joke API and the DOM elements
const url = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`;
const joke = document.getElementById("question");
const punchline = document.getElementById("answer");
const loader = document.getElementById("loader");
const jokeBtn = document.getElementById("jokeBtn");

export { joke, jokeBtn, loader, punchline, url };
