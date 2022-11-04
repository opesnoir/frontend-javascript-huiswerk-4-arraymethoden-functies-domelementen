// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// Functionaliteit bouwen
//Opdracht 1 - Array Methoden
//Opdracht 1a:** Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de
//console.

// 1. Je wil een aanpassing over de hele array, daarvoor gebruik je de map () methode;
// 2. De map () methode heeft altijd een callback functie die je moet vullen;
// 3. De callback is een function die wordt gebruikt als argument binnen een andere functie;
// 4. Syntax map () methode: naamVariabel.map((callback) => {};
// 5. maak een variabelnaam aan, om de waarde in op te slaan;
// 6. roep de inventory-array aan en koppel daar de map () methode aan;
// 7. return het type tv;
// 8. Console log de variabel waarin je de waarde hebt opgeslagen;

const typenameTv = inventory.map((array) => {
    return array.type;
});

console.log(typenameTv);

//Opdracht 1b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
//zijn. Log de uitkomst in de console.

// 1. Je wil alle entry's ontvangen die voldoen aan de eis van 'volledig uitverkocht', daarvoor gebruik je de filter() methode;
// 2. De filter() methode heeft altijd een callback functie die je moet vullen;
// 3. De callback is een function die wordt gebruikt als argument binnen een andere functie;
// 4. Syntax filter () methode: naamVariabel.filter((callback) => {};
// 5. maak een variabelnaam aan, om de waarde in op te slaan;
// 6. roep de inventory-array aan en koppel daar de filter () methode aan;
// 7. return: originalstock - sold === 0;
// 8. Console log de variabel waarin je de waarde hebt opgeslagen;

const soldOutTv = inventory.filter((array) => {
    return (array.originalStock - array.sold) === 0
});

console.log(soldOutTv);

//Opdracht 1c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
//beschikken. Log de uitkomst in de console.

// 1. Je wil alle entry's ontvangen die voldoen aan de eis van de optie 'ambilight', daarvoor gebruik je de filter() methode;
// 2. De filter() methode heeft altijd een callback functie die je moet vullen;
// 3. De callback is een function die wordt gebruikt als argument binnen een andere functie;
// 4. Syntax filter () methode: naamVariabel.filter((callback) => {};
// 5. maak een variabelnaam aan, om de waarde in op te slaan;
// 6. roep de inventory-array aan en koppel daar de filter () methode aan;
// 7. ambiLight zit binnen options, je zult dus de de callback.option.ambiLight moeten loggen om erbij te kunnen;
// 8. Return het ambilight;
// 9. Console log de variabel waarin je de waarde hebt opgeslagen;

const ambiLightTv = inventory.filter((array) => {
    return array.options.ambiLight
});

console.log(ambiLightTv);

//Opdracht 1d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
//console.

// 1. Je wil de array van laag naar hoog sorteren, daarvoor gebruik je de sort () methode;
// 2. De filter() methode heeft altijd een callback functie die je moet vullen, gebruik de variabelen a en b;
// 3. De callback is een function die wordt gebruikt als argument binnen een andere functie;
// 4. Syntax filter () methode: naamVariabel.sort(a, b) => {};
// 5. maak een variabelnaam aan, om de waarde in op te slaan;
// 6. roep de inventory-array aan en koppel daar de sort() methode aan;
// 7. return: de prijs van tv-a - de prijs van tv-b, dan gebruikt het systeem -1,0,1 om de volgorde te bepalen;
// 8. Console log de variabel waarin je de waarde hebt opgeslagen;

const sortPriceTv = inventory.sort((a, b) => {
    return a.price - b.price;
});

console.log(sortPriceTv);

//Einde opdracht 1-----------------------------------------