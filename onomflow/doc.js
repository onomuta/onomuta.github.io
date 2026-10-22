// Language toggle shared by the ONOM FLOW support and privacy pages (same behavior as the LP).
(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-set-lang]");
  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)); });
  }
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  apply(saved || ((navigator.language || "ja").toLowerCase().startsWith("ja") ? "ja" : "en"));
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.dataset.setLang);
      try { localStorage.setItem("lang", b.dataset.setLang); } catch (e) {}
    });
  });
})();
