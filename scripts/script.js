const body = document.body;
const menuBtn = document.getElementsByClassName("menu-btn");
const nav = document.getElementById("menu");
const menuLeft = document.getElementById("menu-left");
const subCha = document.getElementById("sub-channel");
const subVan = document.getElementById("sub-vancouver");
const btnCha = document.getElementById("channel");
const btnVan = document.getElementById("vancouver");

const channel = [
  "DH News",
  "Dished",
  "Listed",
  "Urbanized",
  "Venture",
  "Offside",
  "Curated",
  "Mapped",
  "Canada",
];
const vancouver = [
  "Vancouver",
  "Calgary",
  "Edmonton",
  "Montreal",
  "Toronto",
  "Seattle",
  "Portland",
];

// Add items in divs
for (let i = 0; i < channel.length; i++) {
  const li = document.createElement("li");
  const aa = document.createTextNode(channel[i]);
  li.appendChild(aa);
  subCha.appendChild(li);
}

for (let i = 0; i < vancouver.length; i++) {
  const li = document.createElement("li");
  const aa = document.createTextNode(vancouver[i]);
  li.appendChild(aa);
  subVan.appendChild(li);
}

// Handling Hamburger Menu Button
const handleClick = (e) => {
  const show = body.classList.toggle("show");
  if (!show) {
    subCha.style.display = "none";
    subVan.style.display = "none";
  }
};

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", handleClick);
}

// Hidden mobile menu changing window size
const mql = window.matchMedia("(min-width: 660px)");
function removeTransition(e) {
  if (e.matches) {
    // body.classList.remove("show");
    subCha.style.display = "none";
    subVan.style.display = "none";
  }
}

mql.addListener(removeTransition);

// Handling Sub-menu in Mobile view & Desktop View
btnCha.addEventListener("click", handleChannel);
btnVan.addEventListener("click", handleVancouver);

function handleChannel() {
  if (!mql.matches) {
    subCha.style.display = "grid";
    subVan.style.display = "none";
  } else {
  }
}

function handleVancouver() {
  if (!mql.matches) {
    subCha.style.display = "none";
    subVan.style.display = "grid";
  } else {
  }
}
