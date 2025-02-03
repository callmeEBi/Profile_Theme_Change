let $ = document;
let circle = Array.from($.getElementsByClassName("color_circle"));
let colors = ["#03a9f4", "#e91e63", "#4caf50", "#9c27b0", "#ff9800"];

circle.forEach(function (item, index) {
  item.addEventListener("click", function () {
    $.documentElement.style.setProperty("--primary-color", colors[index]);
  });
});
