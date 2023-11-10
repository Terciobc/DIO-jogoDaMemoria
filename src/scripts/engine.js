const emojis = [
  "😂",
  "😂",
  "😱",
  "😱",
  "😈",
  "😈",
  "🤡",
  "🤡",
  "😏",
  "😏",
  "🙄",
  "🙄",
  "😭",
  "😭",
  "🙏",
  "🙏",
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Outra forma de realizar o processo!
// for (let i = 0; i < emojis.length; i++) {
//   let card = document.createElement("div");
//   card.className = "item";
//   card.innerHTML = shuffleEmojis[i];
//   document.querySelector(".game").appendChild(card);
// }
shuffleEmojis.forEach((emoji) => {
  let card = document.createElement("div");
  card.className = "item";
  card.innerHTML = emoji;
  card.onclick = handleClick;
  document.querySelector(".game").appendChild(card);
});

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }
  if (openCards.length == 2) {
    setTimeout(checkCards, 500);
  }
}

function checkCards() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxOpen");
    openCards[1].classList.add("boxOpen");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }
  openCards = [];

  if (document.querySelectorAll(".boxOpen").length === emojis.length) {
    alert("Parabéns, você venceu!");
  }
}
