function enableThemeSwap() {
  //document.body.classList.toggle("swapped-mode");
  //console.log(document.body.classList);
  const buttons = document.querySelectorAll(".theme-toggle");
  if (!buttons) {
    return;
  }
  //const currentTheme = localStorage.getItem("theme");
  //console.log(currentTheme);
  //if (currentTheme == "dark") {
  //  document.body.classList.add("dark-theme");
  //}
  //
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Swapping themes...");
      document.documentElement.classList.toggle("swapped-mode");
      //let theme = "light";
      //if (document.body.classList.contains("dark-theme")) {
      //  theme = "dark";
      //}
      //localStorage.setItem("theme", theme);
    });
  });
}

enableThemeSwap();
