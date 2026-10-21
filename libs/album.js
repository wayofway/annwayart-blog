(function () {
  var root = document.documentElement;

  function themeName() {
    return root.getAttribute("data-theme") === "night" ? "night" : "paper";
  }

  function langName() {
    return root.getAttribute("data-lang") === "en" ? "en" : "zh";
  }

  function paint() {
    var themeBtn = document.getElementById("theme");
    var langBtn = document.getElementById("lang");
    if (themeBtn) themeBtn.setAttribute("aria-pressed", themeName() === "night" ? "true" : "false");
    if (langBtn) langBtn.setAttribute("aria-pressed", langName() === "zh" ? "true" : "false");
  }

  var langBtn = document.getElementById("lang");
  var themeBtn = document.getElementById("theme");

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var next = langName() === "zh" ? "en" : "zh";
      root.setAttribute("data-lang", next);
      root.lang = next === "en" ? "en" : "zh-CN";
      try { localStorage.setItem("album-lang", next); } catch (error) {}
      paint();
    });
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = themeName() === "night" ? "paper" : "night";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("album-theme", next); } catch (error) {}
      paint();
    });
  }

  paint();

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.addEventListener("click", function (event) {
    if (reduce || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    var link = event.target.closest ? event.target.closest("a") : null;
    if (!link || link.target === "_blank") return;
    var href = link.getAttribute("href");
    if (!href || href.charAt(0) === "#") return;
    if (link.origin !== window.location.origin) return;
    var stage = document.getElementById("stage");
    if (!stage) return;
    event.preventDefault();
    stage.classList.add("out");
    window.setTimeout(function () {
      window.location.href = link.href;
    }, 250);
  });
})();
