console.log("Current pathname:", window.location.pathname);

import '../src/css/style.css';
import router from "./js/router/index.js";
import { updateNavLinks } from "./js/ui/global/updateNavLinks.js";
import { setNavToggler } from "./js/utilities/navToggler.js";


document.addEventListener("DOMContentLoaded", () => {
  try {
    updateNavLinks();
  } catch (error) {
    console.error("Error updating nav links", error);
  }
  
  try {
    setNavToggler();
  } catch (error) {
    console.error("Error setting up nav", error);
  }
});

await router(window.location.pathname);
