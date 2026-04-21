/* eslint-disable */
let body = document.querySelector("body");
let modal = document .querySelector(".modal-content");
let openModal = document.getElementById("open-modal");
let modalMaker = document.createElement("img");
let modalBacking = document.createElement("div");
modalBacking.setAttribute("class", "modal-background");
modalBacking.setAttribute("style", "opacity:0%;")
modalMaker.setAttribute("src", "MAXIMIZE-YOUR-MODALS.png");
modalMaker.setAttribute("style", "opacity:0%;");
body.appendChild(modalBacking);
modal.appendChild(modalMaker);

let menuOpener = document.getElementById("open-menu");
let changeMenu = document.getElementById("main-menu-opener");
changeMenu.setAttribute("style", "opacity:0%;");

let modalTracker = 0;
let menuChecker = 0;

openModal.onclick = (event) => {
  if(modalTracker < 1){
    modalTracker = modalTracker+1;
    modalMaker.removeAttribute("style");
    modalMaker.setAttribute("style", "opacity:100%;");
    modalBacking.removeAttribute("style");
    modalBacking.setAttribute("style", "opacity:100%;")
  }else if(modalTracker >= 1){
    modalTracker = modalTracker-1;
    modalMaker.removeAttribute("style");
    modalMaker.setAttribute("style", "opacity:0%;");
    modalBacking.removeAttribute("style");
    modalBacking.setAttribute("style", "opacity:0%;")
  }
};

menuOpener.onclick = (event) => {
    console.log("Click run");
    if(menuChecker < 1){
    console.log("Click ONE");
    menuChecker = menuChecker+1;
    changeMenu.removeAttribute("style");
    changeMenu.setAttribute("style", "opacity:100%;");
  }else if(menuChecker >= 1){
    console.log("Click ONE");
    menuChecker = menuChecker-1;
    changeMenu.removeAttribute("style");
    changeMenu.setAttribute("style", "opacity:0%;");
  }
};
