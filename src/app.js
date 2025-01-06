console.log("Current pathname:", window.location.pathname);

import "./css/style.css";
import router from "./js/router/index.js";
import { setLogoutListener } from "./js/ui/global/logout";

document.addEventListener("DOMContentLoaded", () => {
  try {
    setLogoutListener();
  } catch (error) {
    console.error("Error setting up logout listener:", error);
  }
});

await router(window.location.pathname);
