import { remove } from "../../utilities/authGuard";

/**
 * Logs out the user by removing the access token from storage and redirecting to the login page.
 *
 * @function onLogout
 * @returns {void}
 * @throws {Error} If accessToken is missing or cannot be removed.
 *
 */

export function onLogout() {
  try {
    remove("accessToken");
    sessionStorage.removeItem("accessToken");

    alert("You are now logged out.");
    window.location.href = "/auth/login/";
  } catch (error) {
    console.error("Logout unsuccessful. Refresh the page and try again.");
    throw error;
  }
}