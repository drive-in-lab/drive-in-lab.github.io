(function () {
  "use strict";
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var header = document.querySelector(".site-header");
  if (header) {
    var updateScrolled = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
  }
})();
