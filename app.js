var h1 = document.createElement("h1");
h1.textContent = "RESPONSIVE CARDS CSS";

var titleDiv = document.querySelector(".title");

titleDiv.appendChild(h1);

var containerCenter = document.querySelector(".container");

containerCenter.style.display = "flex";
containerCenter.style.justifyContent = "center";
containerCenter.style.marginTop = "150px";
containerCenter.style.flexDirection = "column";
containerCenter.style.alignItems = "center";

var containerWrapper = document.querySelector(".wrapper");

containerWrapper.style.display = "flex";
containerWrapper.style.flexDirection = "row";
containerWrapper.style.gap = "40px";
var containerCard = document.querySelector(".card");

containerCard.style.border = "2px solid black";
containerCard.style.height = "350px";
containerCard.style.width = "350px";
containerCard.style.borderRadius = "10px";

var containerCard2 = document.querySelector(".card2");

containerCard2.style.border = "2px solid black";
containerCard2.style.height = "350px";
containerCard2.style.width = "350px";
containerCard2.style.borderRadius = "10px";

var containerCard3 = document.querySelector(".card3");

containerCard3.style.border = "2px solid black";
containerCard3.style.height = "350px";
containerCard3.style.width = "350px";
containerCard3.style.borderRadius = "10px";
