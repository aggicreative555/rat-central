console.log("Current pathname:", window.location.pathname);

import "./css/style.css";
import router from "./js/router/index.js";
import { setLogoutListener } from "./js/ui/global/logout";
import { setNavToggler } from "./js/utilities/navToggler.js";


document.addEventListener("DOMContentLoaded", () => {
  try {
    setNavToggler();
  } catch (error) {
    console.error("Error setting up nav", error);
  }

  try {
    setLogoutListener();
  } catch (error) {
    console.error("Error setting up logout", error);
  }
});

await router(window.location.pathname);
