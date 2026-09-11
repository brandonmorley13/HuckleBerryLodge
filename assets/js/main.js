/*
 * Huckle Berry Lodge — shared site behavior
 * Nav toggle, FAQ accordion, gallery filters. No dependencies, no build step.
 */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ------------------------------------------------ */
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- FAQ accordion ------------------------------------------------------ */
  function initAccordion() {
    var items = document.querySelectorAll("[data-accordion-item]");
    items.forEach(function (item) {
      var question = item.querySelector("[data-accordion-q]");
      if (!question) return;
      question.addEventListener("click", function () {
        var wasOpen = item.classList.contains("is-open");
        item
          .closest("[data-accordion]")
          .querySelectorAll("[data-accordion-item]")
          .forEach(function (sibling) {
            sibling.classList.remove("is-open");
            var q = sibling.querySelector("[data-accordion-q]");
            if (q) q.setAttribute("aria-expanded", "false");
          });
        if (!wasOpen) {
          item.classList.add("is-open");
          question.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---- Gallery filter chips ------------------------------------------------ */
  function initGalleryFilters() {
    var chips = document.querySelectorAll("[data-filter-chip]");
    var grid = document.querySelector("[data-gallery-grid]");
    if (!chips.length || !grid) return;
    var items = grid.querySelectorAll("[data-category]");

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        var category = chip.getAttribute("data-filter-chip");

        items.forEach(function (item) {
          var matches = category === "all" || item.getAttribute("data-category") === category;
          item.hidden = !matches;
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initAccordion();
    initGalleryFilters();
  });
})();
