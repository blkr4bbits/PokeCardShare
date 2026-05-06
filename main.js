const TCGdex = require('@tcgdex/sdk').default;
const tcgdex = new TCGdex('en');


(async () => {
    const card = await tcgdex.card.get('swsh3-133');
    console.log(card.set);
    
})();

