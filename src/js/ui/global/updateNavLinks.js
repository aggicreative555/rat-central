import { toggleMode } from "../../utilities/modeToggler";
import { renderProfilePic } from "./renderProfilePic";

export function updateNavLinks () {
    const navToggler = document.getElementById('navToggler');

    navToggler.innerHTML = '';

    const isLoggedIn = !!localStorage.getItem('accessToken');

    if (isLoggedIn) {
        navToggler.innerHTML = `
        <a href="/post/" title="Explore page" aria-label="Explore page" class="link">Explore</a>
        <a href="/post/create/" title="Create Post" aria-label="Create post page" class="btn-accent flex items-center">Create Post<span class="material-symbols-rounded pl-2 text-text-dark">add</span></a>
        <a href="/profile/" title="Profile" aria-label="Profile page" class="size-12 bg-brown-800/20 border-2 border-brown-800/10 hover:bg-brown-800/50 transition-all duration-300 rounded-full px-4 bg-cover bg-center bg-blend-overlay" id="profilePic"></a>
        <button id="modeToggler" title="Dark/light theme button" aria-label="Dark or light theme toggle">
        <span id="lightIcon" class="material-symbols-rounded">brightness_4</span>
        <span id="darkIcon" class="hidden material-symbols-rounded">brightness_low</span>
        </button>
        `

        renderProfilePic();
    

    } else if (!isLoggedIn) {
        navToggler.innerHTML = `
        <a href="/auth/login/" title="Login page" aria-label="Login page" class="btn-accent">Login</a>
        <a href="/auth/register/" title="Register page" aria-label="Register page" class="link">Register</a>
        <button id="modeToggler" title="Dark/light theme button" aria-label="Dark or light theme toggle">
        <span id="lightIcon" class="material-symbols-rounded">brightness_4</span>
        <span id="darkIcon" class="hidden material-symbols-rounded">brightness_low</span>
        </button>
        `
    }

    toggleMode();

}