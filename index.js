const shuffle = require('./shuffle');
const cards = require('./playingCards');
const dealCard = require('./dealCard');
const arrageBySuit = require('./arrangeBySuit');
const arrangeByValue = require('./arrangeByValue');

const shuffledDeck = shuffle(cards);

// arrangeByValue(shuffle(cards))
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log(dealCard(shuffledDeck), shuffledDeck.length);
// console.log(arrageBySuit(shuffle(cards)))