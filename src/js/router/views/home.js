const modeToggler = document.querySelector("#mode-toggler");
	
modeToggler.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});
