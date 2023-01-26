const body = document.body;
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const handleClick = (e) => {
  body.classList.toggle("show");
};

menuBtn.addEventListener("click", handleClick);

// Hidden mobile menu changing window size
const mql = window.matchMedia("(min-width: 660px)");

function removeTransition(e) {
  if (e.matches) {
    body.classList.remove("show");
  }
}

mql.addListener(removeTransition);
