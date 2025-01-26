function applyInitialTheme() {
  const userPreferance = localStorage.getItem("theme");

  const systemPreferenceIsDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const isDarkMode =
    userPreferance === "dark" || (!userPreferance && systemPreferenceIsDark);

  document.documentElement.classList.toggle("dark", isDarkMode);

  document.querySelector("#darkIcon").classList.toggle("hidden", isDarkMode);
  document.querySelector("#lightIcon").classList.toggle("hidden", !isDarkMode);
}

applyInitialTheme();

export function toggleMode() {
  try {
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

      const activeIcon = isDarkMode ? iconDarkMode : iconLightMode;
      const inactiveIcon = isDarkMode ? iconLightMode : iconDarkMode;

      const darkModeLogo = document.getElementById("logo");

      localStorage.setItem("theme", isDarkMode ? "dark" : "light");

      activeIcon.classList.remove("hidden");
      inactiveIcon.classList.add("hidden");

      activeIcon.classList.add("animate-bounce");

      if (isDarkMode) {
        animatedHeading.classList.remove("light-mode-gradient");
        animatedHeading.classList.add("dark-mode-gradient");
        animatedHeading.classList.add("dark-mode-gradient");
        darkModeLogo.src = "/public/images/logo-full-01-dark.svg";
      } else {
        animatedHeading.classList.remove("dark-mode-gradient");
        animatedHeading.classList.add("light-mode-gradient");
        darkModeLogo.src = "/public/images/logo-full-01.svg";
      }

      setTimeout(() => {
        activeIcon.classList.remove("animate-bounce");
      }, 500);
    });
  } catch (error) {
    console.error("Error implementing mode toggler.", error);
  }
}
