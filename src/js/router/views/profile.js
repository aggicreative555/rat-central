import { authGuard } from "../../utilities/authGuard";
import { load } from "../../utilities/authGuard";

function initializeProfilePage () {

  try {
    authGuard();
  } catch (error) {
    console.error("Error setting up authGuard", error);
  }

  try {
    const user = load('user');
    const profile = user.name;
    const email = user.email;
    const title = document.querySelector('h2');
    title.textContent = `${profile}`;
    const emailAccount = document.getElementById('emailAccount');
    emailAccount.textContent = `${email}`;

    const profilePic = document.getElementById('profilePic');
    const imageUrl = "https://i.pinimg.com/736x/48/a1/32/48a13246cb33767982acd2530b8acb20.jpg";
    profilePic.style.backgroundImage = `url('${imageUrl}')`;
    

  } catch (error) {
    console.error('Error loading profile page.', error);

  }

  try {
    setLogoutListener();
  } catch (error) {
    console.error("Error setting up logout", error);
  }
}

initializeProfilePage();
