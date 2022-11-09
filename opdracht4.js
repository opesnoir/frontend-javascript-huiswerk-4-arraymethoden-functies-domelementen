// #### Opdracht 4 -Functies
//
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```
//
//     * **Opdracht 4a:** Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.
//

//1. functie schrijven die merk + type + naam returned, en buiten de scope de variabel waarin het is opgeslagen returned.

function tvFullName () {
    const fullName = inventory.map((inventory) => {
        return `${inventory.brand} ${inventory.type} ${inventory.name}`;
    });
    return fullName
}

console.log(tvFullName());


// * **Opdracht 4b:** Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals `379` of `159`) teruggeeft in het format `€379,-` of `€159,-`.
//
//1. je wil een array aanpassen, met een functie, van een getal naar een prijs;
//2. aanpasbare variabel toewijzen die dient als variabel waarmee de objectwaarde wordt aangesproken;
//3. return de huidige waarde met een euro teken en een ",-";
//4. console.log de counter ter controle.

function priceFormat () {
    const formattedPrice = inventory.map((inventory) => {
        return "€"+inventory.price+",-";
    });
    return formattedPrice
}

console.log(priceFormat());


// * **Opdracht 4c:** Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`. _Let op:_ om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//
//1. return de huidige waarde met: schermgrootte + "inches" etc.;
//2. inch-waarde * 2,45 = cm-waarde;
//3. de functie die de waarde van inch naar cm omrekent;
//4. de array binnen availableSizes aanspreken;

// je zegt in essentie: ik heb een array en die wil ik aanpassen. Maar deze array zit in een array, dus je zult hem moeten aanroepen.
//Verder wil je over de lengte van de originele array en over de lengte van de array die je wil aanpassen.
/*algemene for loop*/


for (let i = 0; i <inventory.length; i++){
    console.log(inventory[i].availableSizes)
   // const inchToCm = (inventory.availableSizes * 2.45);
}

console.log(inventory[0].availableSizes);



/*wat ik wil doen:*/

/*
let availableSizes = inventory.availableSizes

for (let i = 0; i <inventory.length; i++){
    const inchToCm = (availableSizes * 2.45);
}

console.log(inventory);
*/

/*
const inchToCm = inventory.map((array) => {
    return array.availableSizes * 2.45;
});

console.log(inchToCm);
*/


//Ik heb oprecht geen idee hoe dit op te lossen.
/*const inchToCm = inventory.map((array) => {
    return array.availableSizes * 2.45;
});

console.log(inchToCm);*/

/*function listTvBrands() {
    const tvBrands = inventory.map((array) => {
        return array.brand;
    });
    return tvBrands
}

console.log(listTvBrands());*/

/*function inchToCm() {
    const inches = 0;
    for (let i = 0; i <inventory.length; i++);

    const inchToCms = inventory.map((array) => {
        const cmOutcome = (inventory.availableSizes[i] * 2.45) + "cm"
        return inches;
        return cmOutcome;

    });
    return inchToCm()
}

console.log(inchToCm());*/

/*function inchToCm () {
    const fromInchToCm = inventory.map((inventory) => {
        return inventory.availableSizes * 2.45;
    });
    return fromInchToCm
}

console.log(inchToCm());*/




// * **Opdracht 4d:** Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```
//
// * **Opdracht 4e:** Maak een herbruikbare functie die de informatie van **alle** tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
