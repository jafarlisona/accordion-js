const title = document.querySelectorAll(".label");
const text = document.querySelectorAll(".content");
for (let i = 0; i < title.length; i++) {
  title[i].addEventListener("click", () => {
    text[i].classList.toggle("show");
  });
}
