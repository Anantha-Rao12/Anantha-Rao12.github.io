document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  function setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      darkIcon.style.display = "none";
      lightIcon.style.display = "inline-block";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      darkIcon.style.display = "inline-block";
      lightIcon.style.display = "none";
      localStorage.setItem("theme", "light");
    }
  }

  themeToggle.addEventListener("click", function() {
    if (document.body.classList.contains("dark-mode")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  });

  // On page load, check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Default to light mode
    setTheme("light");
  }
});
