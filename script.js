// Fonctionalité 1 + 1 bis lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

let footer = document.querySelector("footer");
let numOfClick = 0
footer.addEventListener("click", function(){
    numOfClick++;
    console.log("clique numéro ", numOfClick);
 });

// Fonctionnalité 2 : le menu burger

let MenuBtn = document.querySelector(".navbar-toggler");
let Navbar = document.getElementById("navbarHeader");
MenuBtn.addEventListener("click", function(){
// On click po
    Navbar.classList.toggle("collapse");
});

//Fonctionnalité 3 : Edit = Rouge
let CardOne = document.querySelector("body > main > div > div > div > div:nth-child(1) > div");
let EditOne = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");
EditOne.addEventListener("click", function(){
    let TextOne = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > p");
    TextOne.style = "color: red"
});

//Fonctionnalité 4 : Edit = Vert
let CardTwo = document.querySelector("body > main > div > div > div > div:nth-child(2) > div");
let EditTwo = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");
EditTwo.addEventListener("click", function(){
    let TextTwo = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > p");
    if(TextTwo.style.color === 'green'){
        TextTwo.style = "color: black"
    }else{
        TextTwo.style = "color: green"
    };
});

//Fonctionnalité 5 : EXPLOSION
let ExplosionBtn = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a > strong");
let bootstrapEnabled = true;

ExplosionBtn.addEventListener("dblclick", function(){
    let BootsrapLink = document.querySelector("head > link")
    if(bootstrapEnabled){
        BootsrapLink.disabled = true;
    }else{
        BootsrapLink.disabled = false;
    }
bootstrapEnabled = !bootstrapEnabled;
});

//Fonctionnalité 6 : Impression et recul
let cards = document.querySelectorAll("div.card");

for (let card of cards) { 
  let CardImg = card.firstElementChild;
  let cardBody = card.childNodes[3];
  let p = cardBody.firstElementChild;
  let viewBtn = cardBody.childNodes[3].firstElementChild.firstElementChild;
  let reduceCard = function(){
    p.classList.toggle("collapse");
    if (CardImg.style.width === "20%"){
        CardImg.style.width = "";
    } else {
        CardImg.style.width = "20%";
    } 
  }
  viewBtn.addEventListener("mouseover",reduceCard);
};

//Fonctionnalité 7 : La fléche qui flèche

let mainRow = document.getElementsByClassName("row")[1];
let arrowRight = document.querySelectorAll("a.btn-secondary")[0];

let moveCardRight = function(event){
  event.preventDefault();
  let card1 = mainRow.children[0];
  let card6 = mainRow.children[5];
  mainRow.insertBefore(card6,card1);
}
arrowRight.addEventListener("click",moveCardRight);

//Fonctionnalité 8 : La fléche qui flèche a l'envers

let arrowLeft = document.querySelectorAll("a.btn-primary")[0];
let moveCardLeft = function(event){
  event.preventDefault();
  let card1 = mainRow.children[0];
  let card6 = mainRow.children[5];
  mainRow.insertBefore(card1,null);
}
arrowLeft.addEventListener("click",moveCardLeft);

//Fonctionnalité 9 : La vue qui pars dans tous les sens

let body = document.getElementsByTagName("body")[0];
console.log(body);
let logo = document.querySelector("a.navbar-brand");
console.log(logo);
let selectLogo = function(event){
  event.preventDefault();
  console.log("Je clique sur le logo");
  console.log(event);
}
let moveBody = function(move) {
  move.preventDefault();
  console.log("je touche : " + move.key);
  body.className = "";
  switch(move.key) {
  case "a":
    body.classList.add("col-4");
  break;
  case "y":
    body.classList.add("col-4");
    body.classList.add("offset-md-4");
  break;
  case "p":
    body.classList.add("col-4");
    body.classList.add("offset-md-8");
  break;
  case "b":
    body.className = "";
  break;
  default:
    console.log("Choisi entre 'a','y','p' ou 'b'");
  break;  
  }
};
logo.addEventListener("click",selectLogo);
logo.addEventListener("keypress",moveBody);