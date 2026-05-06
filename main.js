// SDK import
const TCGdex = require ('tcgdex/sdk').default;
const tcgdex = new TCGdex('en');


// Getting data for specific card

const card = await tcgdex.card.get('swsh3-136');

// getting image for card

const cardpng = card.getImageURL ('high', 'png');

(async () => {
const card = await tcgdex.card.get('swsh3-136');
console.log(card.name); // "Furret"
})();

console.log (card);
console.log (cardpng);
console.log ('30');