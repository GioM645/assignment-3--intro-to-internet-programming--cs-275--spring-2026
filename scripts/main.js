/* eslint-disable */


let opener = document.getElementById("open-modal");
let modal = document .querySelector(".modal-content");
let modalPlaceholder = document.getElementById("open-modal");
let modalVis = document.querySelector("open-modal");
let modalMaker = document.createElement("img");
modalMaker.setAttribute("src", "sign.jpg");
modalMaker.setAttribute("style", "opacity:0%;");
modal.appendChild(modalMaker);
let modalTracker = 0;
//modalMaker.setAttribute("style", "opacity:0%");

modalPlaceholder.onclick = (event) => {
  if(modalTracker < 1){
    modalTracker = modalTracker+1;
    modalMaker.removeAttribute("style");
    modalMaker.setAttribute("style", "opacity:100%;");
  }else if(modalTracker >= 1){
    modalTracker = modalTracker-1;
    modalMaker.removeAttribute("style");
    modalMaker.setAttribute("style", "opacity:0%;");
  }
};
