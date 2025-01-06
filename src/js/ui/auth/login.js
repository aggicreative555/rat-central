import { login } from "../../api/auth/login";

/**
 * Handles the login form submission by passing data to the login function.
 *
 * @function onLogin
 * @param {Event} event - Form submission event.
 * @throws {Error} If login form is missing in the DOM.
 */

export function onLogin() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData);

      login(profile);
      alert("Login successful!");
      window.location.href = "/post/";
    });
  } else {
    throw new Error("Login form not found.");
  }
}
