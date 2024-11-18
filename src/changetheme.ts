function swapTheme() {
  var element = document.body;
  element.classList.toggle("dark-theme");
  const buttons = document.querySelectorAll(".theme-toggle");
  if (!buttons) {
    return;
  }
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log("Swapping themes...");
      document.body.classList.toggle("dark-theme");
      let theme = "light";
      if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
      }
      localStorage.setItem("theme", theme);
    });

  });
}

swapTheme();

