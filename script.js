var pluss = 1;
let e = document.getElementsByClassName("numero");
let iconElements = document.querySelectorAll(".icon i");
let panier_itemsElement = document.querySelectorAll(".img-item");
let total_itemDivPrix = document.getElementsByClassName("total-item");
let qte = JSON.parse(document.getElementsByClassName("numero")[0].innerHTML);
let prixProduit = document.querySelectorAll(".prix-h3 span")[0].innerHTML;
let panier_items=document.getElementsByClassName('panier-items')[0];





let iconClass = iconElements[0];
function functionPlus() {
  pluss++;
  if (pluss >= 10) {
    pluss = 10;
  }
  e[0].innerHTML = pluss;
}
function functionMince() {
  pluss--;
  if (pluss <= 1) {
    pluss = 1;
  }
  e[0].innerHTML = pluss;
}
function functionHeart() {
  console.log(iconElements);
  console.log(iconClass.getAttribute("class"));
  if (iconClass.getAttribute("class") == "fa-regular fa-heart") {
    console.log("voila");
    iconClass.removeAttribute("class");
    iconClass.setAttribute("class", "fa-solid fa-heart");
    addToPanier();
  } else {
    iconClass.removeAttribute("class");
    iconClass.setAttribute("class", "fa-regular fa-heart");
  }
}
function addToPanier() {
  let img = document.createElement("img");

  if (iconClass.getAttribute("class") == "fa-solid fa-heart") {

  img.setAttribute("src", "images/i1.jpeg");
  panier_itemsElement[0].appendChild(img);

//   console.log("this is mine ", JSON.parse(document.getElementsByClassName("prix-h3")[0].innerHTML));


  console.log("prix produit " + JSON.parse(prixProduit));

  total_itemDivPrix[0].innerHTML = prixProduit * qte;
  }else{
        panier_items.repanier-itemsmoveChild(panier_itemsElement    )
  }
  
}
