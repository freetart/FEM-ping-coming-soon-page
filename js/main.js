import validateEmail from "./validateEmail.js";
import preloader from "./preloader.js";

const init = () => {
  preloader();
  validateEmail();
};

window.addEventListener("DOMContentLoaded", init);
