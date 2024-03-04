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