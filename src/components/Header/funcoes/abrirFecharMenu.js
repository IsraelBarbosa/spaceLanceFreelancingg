function abrirFecharMenu() {
  const menu = document.querySelector(".header__nav");

  const menuEstaAberto = menu.style.left === "" || menu.style.left === "-320px";

  if (menuEstaAberto) {
    menu.style.left = "0px";
  } else {
    menu.style.left = "-320px";
  }
}

export default abrirFecharMenu;
