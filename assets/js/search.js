/*
 * Lightweight, dependency-free filter for the People / News / Publications
 * listing pages. All content is already rendered server-side (good for SEO);
 * this just shows/hides items client-side based on a text query and,
 * optionally, a <select> filter.
 *
 * Markup contract:
 *   <input data-search-input>
 *   <select data-filter-select></select>                (optional)
 *   <div data-search-list>
 *     <div data-searchable data-search="lowercase text" data-category="2024">...</div>
 *   </div>
 *   <p data-no-results hidden>No results</p>
 */
(function () {
  "use strict";

  function setup(list) {
    var container = list.closest("[data-search-root]") || document;
    var input = container.querySelector("[data-search-input]");
    var select = container.querySelector("[data-filter-select]");
    var items = Array.prototype.slice.call(list.querySelectorAll("[data-searchable]"));
    var noResults = container.querySelector("[data-no-results]");

    function applyFilters() {
      var query = (input && input.value || "").trim().toLowerCase();
      var category = select && select.value || "";
      var visibleCount = 0;

      items.forEach(function (item) {
        var text = item.getAttribute("data-search") || "";
        var itemCategory = item.getAttribute("data-category") || "";
        var matchesQuery = query === "" || text.indexOf(query) !== -1;
        var matchesCategory = category === "" || itemCategory === category;
        var visible = matchesQuery && matchesCategory;
        item.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (noResults) noResults.hidden = visibleCount !== 0;
    }

    if (input) input.addEventListener("input", applyFilters);
    if (select) select.addEventListener("change", applyFilters);
  }

  document.querySelectorAll("[data-search-list]").forEach(setup);
})();
