// window.matchMedia
// API para detectar media queries
// console.log(window.matchMedia("(prefers-color-scheme: dark)"));

const checkbox = document.querySelector("#checkbox");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  checkbox.setAttribute("checked", true);
}

checkbox.addEventListener("change", function (event) {
  // console.log(this);
  // if (this.checked) {
  //   document.body.classList.add("is-dark-mode");
  // } else {
  //   document.body.classList.remove("is-dark-mode");
  // }
  document.body.classList.toggle("is-dark-mode");
});
