import { toggleMode } from "./modeToggler";

export function setNavToggler() {
  try {
    const navToggler = document.getElementById('navToggler');
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('closeBtn');
    const toggleBtn = document.getElementById('toggleBtn');



    const toggleDropDown = () => {
      navToggler.classList.toggle('hidden');

      if (!navToggler.classList.contains('hidden')) {
          navToggler.classList.remove('nav-bar');
          navToggler.classList.add('drop-down');
          hamburger.classList.add('hidden');
          closeBtn.classList.toggle('hidden');
          
      } else {
        navToggler.classList.remove('drop-down');
        hamburger.classList.remove('hidden');
        closeBtn.classList.add('hidden');
        setTimeout(() => navToggler.classList.add('hidden'), 500);
      }
      
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        navToggler.classList.remove('hidden', 'drop-down');
        navToggler.classList.add('nav-bar');
      } else {
        navToggler.classList.add('hidden');
        navToggler.classList.remove('nav-bar');
      }
    }

    toggleBtn.addEventListener('click', toggleDropDown);

    window.addEventListener('resize', handleResize);

    handleResize();

    toggleMode();

  } catch (error) {
    console.error("Dropdown menu not working.");
    throw error;
  }
}