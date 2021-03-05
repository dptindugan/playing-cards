const shuffledDeck = shuffle(cards);

console.log('shuffled deck', shuffledDeck);
console.log('==============');

console.log('arrange by suit');
console.log(arrageBySuit(shuffle(cards)));
console.log('==============');

console.log('arrange by value')
console.log('ascending', arrangeByValue(shuffle(cards)));
console.log('descending', arrangeByValue(shuffle(cards), 'descending'));
console.log('==============');

console.log('deal cards');
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log(dealCard(shuffledDeck), shuffledDeck.length);
console.log('==============');
