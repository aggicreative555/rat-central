import { register } from "../../api/auth/register";

/**
 * Handles the register form submission by passing data to the register function.
 *
 * @function onLogin
 * @param {Event} event - Form submission event.
 * @throws {Error} If register form is missing in the DOM.
 */

export function onRegister() {
  const form = document.querySelector("#registerForm");

  try {
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData);

        register(profile);
        alert("User registered successfully!");
      });
    }
  } catch (error) {
    console.error("Register form not found", error);
  }
}