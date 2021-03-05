function arrageBySuit(cards) {
  const { clubs, diamonds, hearts, spades } = groupBySuit(cards)
  return [...clubs, ...diamonds, ...hearts, ...spades];
}
