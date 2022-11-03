// VOORRAAD ARRAY MET TV'S
// Opdracht 2 - Elementen in de DOM plaatsen

//_Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
//een oude vertrouwde for-loop voor!
//Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

//1. aanpasbare variabel toewijzen die dient als counter;
//2. variabel naam voor de counter noteren;
//3. waarde van de variabel toewijzen, in dit geval 0, gezien de counter leeg moet zijn tijdens het start moment;
//4. aanpasbare variabel toewijzen die dient als variabel waarmee de objectwaarde wordt aangesproken, in dit geval inventory.sold;
//5. for-loop schrijven;
//6. code voor de counter moet de sum van inventory.sold weergeven;
//7. aanpasbare variabel toewijzen die dient om de sum van inventory.sold op te slaan;
//8. console.log de variabel met de sum;
//9. zet het geheel in een functie;
//10. de parameter voor de functie is soldItems;
//11. test functie.

// for-loop werkt niet
/*let counterInitialSumSold = 0;

const soldTvInventory = inventory.map(array => {
  return array.sold;
});

for (let i = 0; i < inventory.length; i++) {
let totalSoldTvs = counterInitialSumSold + soldTvInventory;
}*/

//methode met .reduce:
let totalCount = inventory.reduce((previousValue, currentValue) => previousValue + currentValue.sold, 0);
console.log(totalCount);

//methode functie die door de originele array mapt:
function sumSoldTv () {
    let totalCount = inventory.reduce((previousValue, currentValue) => previousValue + currentValue.sold, 0);
    return totalCount;
}

console.log(sumSoldTv());

//methode functie die gebruik maakt van een argument om door de parameter te mappen. Als je een parameter aanmaakt, kun je met die parameter gaan werken.
// callback is een functie die als argument wordt doorgegeven binnen in een andere functie.

//Vraag aan docent / sme'er // de functie "sumSoldTvMetParameter(array)" werkt niet goed, hij logt 0, ik hoor graag waarom dat zo is. Ik zie namelijk niet wat ik fout doe.
/*function sumSoldTvMetParameter(array) {
    let totalCount = array.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.sold, 0;
    })
    return totalCount;
}

const totalSoldTvs = sumSoldTvMetParameter(inventory);
console.log(totalSoldTvs);*/


//Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
// 1. schrijf binnen <p> ... </p>: aantal verkochte tv's;
// 2. schrijf binnen <p> ... </p>: een <span> </span> met de uitkomst van het aantal verkochte tv's;
// 3. syntax voor 1 en 2 = <p > Aantal verkochte tv's: <span id = "verkochteTvsGroeneTekst"> amount sold tv's </span> </p>
// 4. maak een variabel om het element uit html op te halen en in javascript te kunnen gebruiken: let amountSoldTv;
// 5. haal de id van de span op = document.getElementById("verkochteTvsGroeneTekst");
// 6. geef aan wat je in de amountSoldTv variabel wil opslaan, in dit geval is het de sum van het aantal verkochte tv's. Dat laatste heb je opgeslagen in de methode uit opdracht 2a: totalCount en in de functies uit opdracht 2a: sumSoldTv().
// 7. syntax voor 4, 5, 6 is: amountSoldTv.textContent = sumSoldTv()
//als je weet waarom de function sumSoldTvMetParameter(array){} werkt, dan testen met de onderstaande code

let amountSoldTv = document.getElementById("soldTvsGreenText")
amountSoldTv.textContent = sumSoldTv()

//Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
//console.

// methode 1: for-loop;
// methode 2: methode met .reduce:
// methode 3: functie die door de originele array mapt:
// methode 4: functie die gebruik maakt van een argument om door de parameter te mappen. Als je een parameter aanmaakt, kun je met die parameter gaan werken. Callback is een functie die als argument wordt doorgegeven binnen in een andere functie.

// methode 1: for-loop:
// maak een counter met de beginwaarde van 0;
// schrijf een for-loop;
// console.log de variabel om te testen of hij werkt.


let counterBoughtTvsForLoop = 0;

for (let i = 0; i < inventory.length; i++) {
    counterBoughtTvsForLoop = counterBoughtTvsForLoop + inventory[i].originalStock;
}

console.log(counterBoughtTvsForLoop)


// methode 2: methode met .reduce:
// stappen:
// 1. maak een variabel waarin je de waarde van de counter opslaat: "let counterBoughtTvsReduceMethode";
// 2. schrijf een .reduce methode = .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
// 3. voeg aan de methode, de inventory en de arraylocatie waar de ingekochte tv's zijn opgeslagen (dat is originalStock) toe;
// 4. schrijf de syntax van de formule inclusief inventory, parameters en originalStock - inventory: inventory.reduce && ((previousValue, currentValue) => && currentValue.originalStock;
// 5. zet de 'teller' na originalStok op 0 door te schrijven  0);
// 6. console.log de variabel counterBoughtTvsReduceMethode


let counterBoughtTvsReduceMethode = inventory.reduce((previousValue, currentValue) => previousValue + currentValue.originalStock, 0);

console.log(counterBoughtTvsReduceMethode);


// methode 3: functie die door de originele array mapt:
// stappen:
// 1. schrijf een basisfunctie uit: function functieNaam () {};
// 2. geef de functie een naam: functionBoughtTvs;
// 3. laat de parameter leeg, je gaat namelijk door de originele array heenmappen dus dat verwerk je binnen de {};
// 4. maak een te veranderen variabel (let) om de formule uitkomst in op te slaan, de variabel naam: sumBoughtTvs;
// 5. schrijf de formule en zet de beginwaarde op 0: .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
// 6. schrijf de return: return sumBoughtTvs;
// 7. console.log de functie: functionBoughtTvs ()

function functionBoughtTvs() {
    let sumBoughtTvs = inventory.reduce((previousValue, currentValue) => previousValue + currentValue.originalStock, 0);
    return sumBoughtTvs;
}

console.log(functionBoughtTvs());


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


//Einde opdracht 2----------------------