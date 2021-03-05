const suits = ['♠', '♥', '♦', '♣']
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
]

const cards = [];
suits.forEach((suit)=> {
  values.forEach((value) => {
    cards.push(suit.concat(value));
  })
})