import {
  handleAPI,
  handleClick,
  handleError,
  handleFetch,
} from "./handlers.js";

import { url } from "./config.js";

// Immediately Invoked Function Expression (IIFE) to fetch a joke when the page loads and handle the click event on the button
(() => {
  handleFetch(url, handleAPI, handleError);
  handleClick();
})();
