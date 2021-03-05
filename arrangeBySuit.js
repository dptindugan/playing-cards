const groupBySuit = require('./groupBySuit');

function arrageBySuit(cards) {
  const { clubs, diamonds, hearts, spades } = groupBySuit(cards)
  return [...clubs, ...diamonds, ...hearts, ...spades];
}

module.exports = arrageBySuit;