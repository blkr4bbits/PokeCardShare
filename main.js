const TCGdex = require('@tcgdex/sdk').default;
const tcgdex = new TCGdex('en');


(async () => {
    const card = await tcgdex.card.get('swsh3-122');
    console.log(card.name);
    console.log(card.getImageURL('high', 'png'));

})();

