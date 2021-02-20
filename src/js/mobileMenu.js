function mobileMenu() {
  document.getElementById("click-open").onclick = function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
    document.body.style.overflow = "hidden";
  };

  document.getElementById("click-close").onclick = function closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
    document.body.style.overflow = "scroll";
  };
}

export default mobileMenu;
