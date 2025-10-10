let modeTogglerInitialized = false;

function applyInitialTheme() {
  const userPreference = localStorage.getItem("theme");
  const systemPreferenceIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkMode = userPreference === "dark" || (!userPreference && systemPreferenceIsDark);

  document.documentElement.classList.toggle("dark", isDarkMode);
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  const iconDark = document.getElementById("darkIcon");
  const iconLight = document.getElementById("lightIcon");
  if (iconDark && iconLight) {
    iconDark.classList.toggle("hidden", !isDarkMode);
    iconLight.classList.toggle("hidden", isDarkMode);
  }
}

document.addEventListener("DOMContentLoaded", applyInitialTheme);

export function toggleMode() {
  try {
    if (modeTogglerInitialized) return;
    modeTogglerInitialized = true;

    const modeToggler = document.getElementById("modeToggler");
    const iconDarkMode = document.getElementById("darkIcon");
    const iconLightMode = document.getElementById("lightIcon");
    const animatedHeading = document.getElementById("animatedHeading");

    if (!modeToggler || !iconDarkMode || !iconLightMode) {
      console.error("Mode toggler or icons not found in the DOM.");
      return;
    }

    modeToggler.addEventListener("click", () => {
      const htmlElement = document.documentElement;

      const isDarkMode = htmlElement.classList.toggle("dark");
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      
      const activeIcon = isDarkMode ? iconDarkMode : iconLightMode;
      const inactiveIcon = isDarkMode ? iconLightMode : iconDarkMode;

      activeIcon.classList.remove("hidden");
      inactiveIcon.classList.add("hidden");

      activeIcon.classList.add("animate-bounce");

      if (animatedHeading) {
        animatedHeading.classList.toggle("light-mode-gradient", !isDarkMode);
        animatedHeading.classList.toggle("dark-mode-gradient", isDarkMode);
      }

      setTimeout(() => {
        activeIcon.classList.remove("animate-bounce");
      }, 300);
    });

  } catch (error) {
    console.error("Error implementing mode toggler.", error);
  }
}
