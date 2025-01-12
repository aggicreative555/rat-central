export function setNavToggler() {
  try {
    const navToggler = document.getElementById('navToggler');
    const hamburger = document.getElementById('hamburger');


    hamburger.addEventListener('click', () => {
        navToggler.classList.toggle('hidden');

        if (!navToggler.classList.contains('hidden')) {
            navToggler.classList.remove('nav-bar');
            navToggler.classList.add('drop-down');
        } else {
            navToggler.classList.remove('drop-down');
        }
    });


  } catch (error) {
    console.error("Dropdown menu not working.");
    throw error;
  }
}