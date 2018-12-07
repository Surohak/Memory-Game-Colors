let cards = [...document.querySelectorAll(".cell")];
let cardsColor = ["blue","green","red","maroon","yellow","purple","orange","khaki",
			  "blue","green","red","maroon","yellow","purple","orange","khaki"];


const startTime = new Date().getTime();
let activeCard = "";
const activeCards = [];

const gamePairs = cards.length/2;
let gameResult = 0;

const clickCard = function () {
  activeCard = this;
  if(activeCard == activeCards[0]) return;
  activeCard.classList.remove("hidden");
  if(activeCards.length === 0){
    activeCards[0] = activeCard;
    return;
  }
  else {
    cards.forEach(card => card.removeEventListener("click", clickCard))
    activeCards[1] = activeCard;
    setTimeout(function() {
    if(activeCards[0].className === activeCards[1].className){
        activeCards.forEach(card => card.classList.add("off"))
        gameResult++;
        cards = cards.filter(card => !card.classList.contains("off"));
        if(gameResult == gamePairs){
          const endTime = new Date().getTime();
          const gameTime = (endTime-startTime)/1000;
          alert(`You Win: ${gameTime} sec.`)
          location.reload();
        }
    }
    else {
        activeCards.forEach(card => card.classList.add("hidden"))
    }
    activeCard = "";
    activeCards.length = 0;
    cards.forEach(card => card.addEventListener("click",clickCard))

  },500);
};
}

const init = function () {
  cards.forEach(card=> {
    const position = Math.floor(Math.random()*cardsColor.length); 
    card.classList.add(cardsColor[position]);
    cardsColor.splice(position,1);
    card.classList.add("hidden");
    card.addEventListener("click",clickCard)
  })
}
init()


let i = 0;
let txt = 'Memory Game Colors';
let speedTypeWriter = 50;
typeWriter();
function typeWriter() {
  if (i < txt.length){
    document.getElementById("name").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speedTypeWriter);
  }
}