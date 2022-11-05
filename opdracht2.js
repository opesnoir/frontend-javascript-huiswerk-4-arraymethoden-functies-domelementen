// VOORRAAD ARRAY MET TV'S
// Opdracht 2 - Elementen in de DOM plaatsen

//_Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
//een oude vertrouwde for-loop voor!
//Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// methode 1: for-loop;
// methode 2: methode met .reduce:
// methode 3: functie die door de originele array mapt:
// methode 4: functie die gebruik maakt van een argument om door de parameter te mappen. Als je een parameter aanmaakt, kun je met die parameter gaan werken. Callback is een functie die als argument wordt doorgegeven binnen in een andere functie.

// 2a methode 1: for-loop:
//1. je wil tellen hoeveel tv's er zijn verkocht. Maak daarvoor een aanpasbare variabel die dient als counter;
//2. variabel naam voor de counter noteren;
//3. begin waarde van de counter-variabel toewijzen, in dit geval 0, gezien de counter leeg moet zijn tijdens het start moment;
//4. aanpasbare variabel toewijzen die dient als variabel waarmee de objectwaarde wordt aangesproken, voor in de for {} statement, in dit geval inventory.sold;
//5. for-loop schrijven: counter > for (){(){}};
//6. return de sum van inventory.sold;
//7. console.log de counter ter controle.

let soldTvCounter = 0;

for (let i = 0; i < inventory.length; i++) {
    soldTvCounter = soldTvCounter + inventory[i].sold;
}

console.log(soldTvCounter);

//2a methode 2: .reduce:
//reduce loopt door de array element-per-element, bij elke stap voegt de waarde van de huidigeWaarde toe aan de vorigeWaarde.
//1. je wil tellen hoeveel tv's er zijn verkocht.
//2. variabel naam voor de counter noteren;
//3. begin waarde van de counter-variabel toewijzen, in dit geval 0, gezien de counter leeg moet zijn tijdens het start moment;
//4. aanpasbare variabel toewijzen die dient opslagplaats voor de waarde waarin sum inclusief initiele waarde wordt opgeslagen;
//5. syntax van de reduce () methode is: declareerbareVariabel [dat zegt of het een let of const is] variabelNaam = teMappenElementNaam.reduce((vorigeWaarde, huidigeWaarde) =>vorigeWaarde + huidigeWaarde, initieleWaarde);
//6. console.log de counter ter controle.

let totalCount = inventory.reduce((previousValue, currentValue) => previousValue + currentValue.sold, 0);
console.log(totalCount);

//2a methode 3: functie die door de originele array mapt:
//1. je wil tellen hoeveel tv's er zijn verkocht.
//2. hiervoor wil je een function maken die door de originele array heenmapt, dat betekent dat je de arraynaam en arraylocatie moet opgeven;
//3. syntax function: function (){};
//4. aanpasbare variabel toewijzen die dient opslagplaats voor de waarde waarin sum inclusief initiele waarde wordt opgeslagen;
//5. return de aanpasbare variabel waarin sum iwordt opgeslagen;
//4. console.log de functie().

function sumSoldTv() {
    let totalCount = inventory.reduce((previousValue, currentValue) => previousValue + currentValue.sold, 0);
    return totalCount;
}

console.log(sumSoldTv());

//extra: de functie sumSoldTv() (hierbovenstaande functie) kan je ook inline schrijven, dan krijg je:
function sumSoldTv2() {
    return inventory.reduce((previousValue, currentValue) => previousValue + currentValue.sold, 0);
}

console.log(sumSoldTv2());


//2a methode 4: functie die gebruik maakt van een argument om door de parameter te mappen. Als je een parameter aanmaakt, kun je met die parameter gaan werken.
// [callback is een functie die als argument wordt doorgegeven binnen in een andere functie]
//1. je wil tellen hoeveel tv's er zijn verkocht.
//2. hiervoor wil je een function maken die gebruik maakt van een argument om door de functie heen te mappen. Dat betekent dat je argumenten moet opgeven;
//3. syntax function: function (){};
//4. aanpasbare variabel toewijzen die dient opslagplaats voor de waarde waarin sum inclusief initiele waarde wordt opgeslagen;
//5. return de aanpasbare variabel waarin sum wordt opgeslagen;
//6. console.log de functie(), en vul binnen de () hetgeen je wil invoeren als argument, om dit binnen de functie te kunnen doorlopen.

function sumSoldTvsWithArgument(array) {
    let soldTvCounter = 0;

    for (let i = 0; i < array.length; i++) {
        soldTvCounter = soldTvCounter + array;
    }
}

const sumSoldTvsOne = inventory.sold;
console.log(sumSoldTv2());

//Vraag: in function sumSoldTvMetParameter logt de functie undifined, ik zie niet wat ik verkeerd doe. Weet jij wat er misgaat?

/*function sumSoldTvMetParameter(array) {
    return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

const totalSoldTvsTwo = inventory.sold;
console.log(totalSoldTvsTwo); //logt undifined, weet niet waarom*/


//Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
// 1. schrijf binnen <p> ... </p>: aantal verkochte tv's;
// 2. schrijf binnen <p> ... </p>: een <span> </span> met de uitkomst van het aantal verkochte tv's;
// 3. syntax voor 1 en 2 = <p > Aantal verkochte tv's: <span id = "verkochteTvsGroeneTekst"> amount sold tv's </span> </p>
// 4. maak een variabel om het element uit html op te halen en in javascript te kunnen gebruiken: let amountSoldTv;
// 5. haal de id van de span op = document.getElementById("verkochteTvsGroeneTekst");
// 6. geef aan wat je in de amountSoldTv variabel wil opslaan, in dit geval is het de sum van het aantal verkochte tv's. Dat laatste heb je opgeslagen in de methode uit opdracht 2a: totalCount en in de functies uit opdracht 2a: sumSoldTv().
// 7. syntax voor 4, 5, 6 is: amountSoldTv.textContent = sumSoldTv()
//extra: als je weet waarom de function sumSoldTvMetParameter(array){} werkt, dan testen met de onderstaande code

let amountSoldTv = document.getElementById("soldTvsGreenText")
amountSoldTv.textContent = sumSoldTv()

//Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
//console.

// methode 1: for-loop;
// methode 2: methode met .reduce:
// methode 3: functie die door de originele array mapt:
// methode 4: functie die gebruik maakt van een argument om door de parameter te mappen.

// methode 1: for-loop:
// maak een counter met de beginwaarde van 0;
// schrijf een for-loop;
// console.log de variabel om te testen of hij werkt.

let counterBoughtTvsForLoop = 0;

for (let i = 0; i < inventory.length; i++) {
    counterBoughtTvsForLoop = counterBoughtTvsForLoop + inventory[i].originalStock;
}

console.log(counterBoughtTvsForLoop);


// methode 2: methode met .reduce:

let counterBoughtTvsReduceMethode = inventory.reduce((previousValue, currentValue) => previousValue + currentValue.originalStock, 0);

console.log(counterBoughtTvsReduceMethode);


// methode 3: functie die door de originele array mapt:

function boughtTvsA() {
    let sumBoughtTvs = inventory.reduce((previousValue, currentValue) => previousValue + currentValue.originalStock, 0);
    return sumBoughtTvs;
}

console.log(boughtTvsA());


// methode 4: functie die gebruik maakt van een argument om door de parameter te mappen.
// stappen:
// 1. schrijf een basisfunctie uit: function functieNaam () {};
// 2. geef de functie een naam: functionWithPararmeterBoughtTvs;
// 3. vul de parameter in, je gaat namelijk door de parameter heenmappen;
// 4. maak een te veranderen variabel (let) om de formule uitkomst in op te slaan, de variabel naam: sumBoughtTvs2;
// 5. schrijf de formule en zet de beginwaarde op 0: .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
// 6. schrijf de return: return sumBoughtTvs;
// 7. console.log de functie: functionWithPararmeterBoughtTvs ()
// werkt niet, vragen wat er misgaat
/*function functionWithPararmeterBoughtTvs(array) {
    const sumBoughtTvs2 = array((previousValue, currentValue) => {
        previousValue + currentValue, 0
    })
    return sumBoughtTvs2;
}

const sumBoughtTvs2Output = functionWithPararmeterBoughtTvs(inventory.originalStock)
console.log(sumBoughtTvs2Output);*/

//Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
// 1. schrijf binnen <p> ... </p>: aantal ingekochte tv's;
// 2. schrijf binnen <p> ... </p>: een <span> </span> met de uitkomst van het aantal ingekochte tv's;
// 3. syntax voor 1 en 2 = <p> Aantal ingekochte tv's: <span id = "boughtTvsBlueText"> amount bought tv's </span> </p>
// 4. maak een variabel om het element uit html op te halen en in javascript te kunnen gebruiken: let amountSoldTv;
// 5. haal de id van de span op = document.getElementById("verkochteTvsGroeneTekst");
// 6. geef aan wat je in de amountSoldTv variabel wil opslaan, in dit geval is het de sum van het aantal verkochte tv's. Dat laatste heb je opgeslagen in de methode uit opdracht 2a: totalCount en in de functies uit opdracht 2a: sumSoldTv().
// 7. syntax voor 4, 5, 6 is: amountSoldTv.textContent = sumSoldTv()
//als je weet waarom de function sumSoldTvMetParameter(array){} werkt, dan testen met de onderstaande code
// als ik amountBoughtTv.textContent = functionBoughtTvs() invoer werkt hij niet... geen idee waarom.

let amountBoughtTv = document.getElementById("boughtTvsBlueText")
amountBoughtTv.textContent = counterBoughtTvsReduceMethode

//Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.

let stockTv = boughtTvsA() - sumSoldTv()
console.log(stockTv);

let amountStockTvs = document.getElementById("stockTvsRedText")
amountStockTvs.textContent = stockTv

//Einde opdracht 2----------------------