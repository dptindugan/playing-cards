module.exports = (cards) => {
  const clubs = [],
  diamonds = [],
  spades = [],
  hearts = [];

  cards.forEach((card)=> {
    if (card.includes('♠')) {
      spades.push(card)
    }
    if (card.includes('♥')) {
      hearts.push(card)
    }
    if(card.includes('♦')) {
      diamonds.push(card)
    }
    if(card.includes('♣')) {
      clubs.push(card)
    }
  });

  return {
    clubs,
    diamonds,
    spades,
    hearts
  }
}