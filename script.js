const langSelect = document.getElementById("language-select");

langSelect.addEventListener("change", function () {
  const lang = this.value;

  // Select all elements with data-en and data-bm attributes
  const translatable = document.querySelectorAll("[data-en]");

  translatable.forEach(el => {
    el.innerHTML = el.dataset[lang]; // Sets content based on language
  });
});
