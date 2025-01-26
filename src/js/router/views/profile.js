import { authGuard } from "../../utilities/authGuard";
import { load } from "../../utilities/authGuard";
import { setLogoutListener } from "../../ui/global/logout";

export function initializeProfilePage() {
  try {
    authGuard();
  } catch (error) {
    console.error("Error setting up authGuard", error);
  }

  try {
    const user = load("user");
    const profile = user.name;
    const email = user.email;
    const title = document.querySelector("h2");
    title.textContent = `${profile}`;
    const emailAccount = document.getElementById("emailAccount");
    emailAccount.textContent = `${email}`;
  } catch (error) {
    console.error("Error loading profile page.", error);
  }

  try {
    setLogoutListener();
  } catch (error) {
    console.error("Error setting up logout", error);
  }
}

initializeProfilePage();
