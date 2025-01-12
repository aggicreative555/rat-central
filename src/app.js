console.log("Current pathname:", window.location.pathname);

import "./css/style.css";
import router from "./js/router/index.js";
import { setLogoutListener } from "./js/ui/global/logout";
import { setNavToggler } from "./js/utilities/navToggler.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    setNavToggler();
  } catch (error) {
    console.error("Error setting up listeners", error);
  }
});

await router(window.location.pathname);
