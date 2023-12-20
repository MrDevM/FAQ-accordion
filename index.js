const contaner = document.querySelector(".conta-contaner");
contaner.addEventListener("click", (e) => {
  if (e.target.className == "plus") {
    const minus = e.target.nextElementSibling;
    const p = e.target.parentElement.parentElement.nextElementSibling;
    p.style.display = "block";
    e.target.style.display = "none";
    minus.style.display = "inline";
  } else if (e.target.className == "minus") {
    const plus = e.target.previousElementSibling;
    const p = e.target.parentElement.parentElement.nextElementSibling;
    p.style.display = "none";
    e.target.style.display = "none";
    plus.style.display = "inline";
  }
});
