document.getElementById("click-open").onclick = function openNav() {
  document.getElementById("mobile-menu").style.width = "100%";
};

document.getElementById("click-close").onclick = function closeNav() {
  document.getElementById("mobile-menu").style.width = "0";
};

/* tries that didn't work
const mobileMenu = document.getElementById("mobile-menu");
const clickOpen = document.getElementById("click-open");
const clickClose = document.getElementById("click-close");

function openNav() {
  mobileMenu.style.width = "100%";
}

function closeNav() {
  mobileMenu.style.width = "0";
}

clickOpen.onclick = openNav();
clickClose.onclick = closeNav();
*/

/*
function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0";
}
*/
