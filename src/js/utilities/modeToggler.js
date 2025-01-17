export function toggleMode() {
    
    try {
        const modeToggler = document.getElementById("modeToggler");
        const iconDarkMode = document.getElementById('darkIcon');
        const iconLightMode = document.getElementById('lightIcon');

        if (!modeToggler || !iconDarkMode || !iconLightMode) {
            console.error("Mode toggler or icons not found in the DOM.");
            return;
        }

        modeToggler.addEventListener("click", () => {
            const htmlElement = document.documentElement;
            const isDarkMode = htmlElement.classList.toggle("dark");

            const activeIcon = isDarkMode ? iconDarkMode : iconLightMode;
            const inactiveIcon = isDarkMode ? iconLightMode : iconDarkMode;

            activeIcon.classList.remove('hidden');
            inactiveIcon.classList.add('hidden');

            activeIcon.classList.add('animate-bounce');

            setTimeout(() => {
                activeIcon.classList.remove('animate-bounce');

            }, 500);

        });


    } catch {
        console.error('Error implementing mode toggler.', error);
    }
}
