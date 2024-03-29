import { joke, jokeBtn, loader, punchline, url } from "./config.js";

// handleFetch will handle the fetch request then call the handleAPI function if the request is successful or the handleError function if the request fails
const handleFetch = (url, onSuccess, onError, signal) => {
  // Show loader
  joke.textContent = "";
  punchline.textContent = "";
  loader.style.display = "block";

  // Fetch data from the API and handle the response and errors using the onSuccess and onError functions respectively.
  // The AbortController will cancel the fetch request if the user clicks the button again before the request is complete
  fetch(url, { signal })
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    })
    .then(data => {
      // Hide loader
      loader.style.display = "none";
      onSuccess(data);
    })
    .catch(error => {
      // Hide loader
      loader.style.display = "none";
      onError(error);
    });
};

// handleAPI will handle the API response and update the DOM
const handleAPI = api => {
  const question = api.setup;
  const answer = api.delivery;

  joke.textContent = question;
  punchline.textContent = answer;
};

// handleError will handle any errors that occur during the fetch request and log them to the console
const handleError = error => {
  console.error("Something went wrong!", error);
};

// handleClick will handle the click event on the button and cancel the fetch request if the user clicks the button again before the request is complete
let controller = new AbortController();
const handleClick = () => {
  jokeBtn.addEventListener("click", e => {
    e.preventDefault();
    controller.abort();

    // Create a new AbortController for the new fetch request
    controller = new AbortController();
    handleFetch(url, handleAPI, handleError, controller.signal);
  });
};

export { handleAPI, handleClick, handleError, handleFetch };
