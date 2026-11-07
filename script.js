// Home page: animate the match bars when the page loads
var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) {
  document.querySelectorAll(".bar i").forEach(function (bar) {
    var target = bar.style.width;
    bar.style.width = "0";
    bar.style.transition = "width 0.8s ease";
    setTimeout(function () { bar.style.width = target; }, 100);
  });
}

// Pricing page: keep only one FAQ answer open at a time
var faqs = document.querySelectorAll("details");
faqs.forEach(function (item) {
  item.addEventListener("toggle", function () {
    if (item.open) {
      faqs.forEach(function (other) {
        if (other !== item) { other.open = false; }
      });
    }
  });
});
