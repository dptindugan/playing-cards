const groupBySuit = require('./groupBySuit');


module.exports = (cards, direction) => {

  const { clubs, diamonds, hearts, spades } = groupBySuit(cards);

  const compareValue = (firstValue, secondValue) => {
    if (direction === 'descending') return firstValue < secondValue;
    return firstValue > secondValue
  }


  function getFaceValue(value) {
    let faceValue; 
  
    if (isNaN(parseInt(value))) {
      switch(value) {
        case 'A':
          faceValue = 1
          break;
        case 'J':
          faceValue = 11
          break;
        case 'Q':
          faceValue = 12
          break;
        case 'K':
          faceValue = 13
          break;
        }
      return parseInt(faceValue);
    }
  
    return parseInt(value)
  }

  function sortDeck(cards) {
    let temp;

    for(let x = 0; x < cards.length-1; x++) {
      for(let y = x+1; y < cards.length; y++) {
  
        let firstValue = cards[x].substring(1); 
        let secondValue = cards[y].substring(1);
  
        firstValue = getFaceValue(firstValue);
        secondValue = getFaceValue(secondValue);
        
        if(compareValue(firstValue, secondValue)) {
          temp = cards[x] 
          cards[x] = cards[y] 
          cards[y] = temp
        }
      }
    }
  }

  sortDeck(clubs);
  sortDeck(diamonds);
  sortDeck(hearts);
  sortDeck(spades);

  return [...clubs, ...diamonds, ...hearts, ...spades]
}