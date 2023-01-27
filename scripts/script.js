const body = document.body;
const menuBtn = document.getElementsByClassName("menu-btn");
const nav = document.getElementById("menu");
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

const handleClick = (e) => {
  const show = body.classList.toggle("show");
  if (!show) {
    subVan.style.visibility = "inherit";
  } else {
  }
};

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", handleClick);
}

// Handling menu

btnCha.addEventListener("click", handleChannel);
btnVan.addEventListener("click", handleVancouver);

function handleChannel() {
  subCha.style.width = "calc(100vw - 150px)";
  subVan.style.width = "0";
  subCha.style.visibility = "visible";
  subVan.style.visibility = "hidden";
}

function handleVancouver() {
  subCha.style.width = "0";
  subVan.style.width = "calc(100vw - 150px)";
  subCha.style.visibility = "hidden";
  subVan.style.visibility = "visible";
}

// Hidden mobile menu changing window size
const mql = window.matchMedia("(min-width: 660px)");

function removeTransition(e) {
  if (e.matches) {
    body.classList.remove("show");
  }
}

mql.addListener(removeTransition);
