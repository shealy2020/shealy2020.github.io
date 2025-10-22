// /assets/js/nav.js
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll("[data-dropdown-toggle]");

  toggles.forEach(toggle => {
    const parent = toggle.closest(".nav-item");

    toggle.addEventListener("click", (e) => {
      // Only act if this nav item has a dropdown
      if (!parent.classList.contains("has-children")) return;

      e.preventDefault();

      // Close other open dropdowns
      document.querySelectorAll(".nav-item.open").forEach(openItem => {
        if (openItem !== parent) openItem.classList.remove("open");
      });

      // Toggle current dropdown
      parent.classList.toggle("open");
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) {
      document.querySelectorAll(".nav-item.open").forEach(openItem => {
        openItem.classList.remove("open");
      });
    }
  });
});
