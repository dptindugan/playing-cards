module.exports = (deck) => {
  const card = deck[0];

  let value = card.substring(1)
  let suit = card.charAt(0)
  deck.shift();
  
  const numberToWords = (num) => {
    const numberWords = ['', '', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
    if(isNaN(parseInt(num))) {
      switch(num) {
        case 'A':
          return 'Ace';
        case 'J':
          return 'Jack';
        case 'Q':
          return 'Queen';
        case 'K':
          return 'King';
      }
    };

    return numberWords[parseInt(num)]
  }

  const unixToWord = (str) => {
    switch (str) {
      case '♠':
        return 'Spades';
      case '♥':
        return 'Hearts';
      case '♦':
        return 'Diamonds';
      case '♣':
        return 'clubs';
    }
  }

  return `${numberToWords(value)} of ${unixToWord(suit)}`;
}