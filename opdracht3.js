//Opdracht 3 - Array methoden en functies
//Deze opdracht is af

//Opdracht 3a:** Gebruik een array-methode om alle tv-merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
//pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
//dubbele namen in zitten, is niet erg.

// 3 manieren om hetzelfde resultaat te behalen:
// Manier 1 een methode zonder functie (3a);
// manier 2 een functie waarbij je door de originele array mapt (3b1);
// manier 3 functie inclusief argument, waarbij je door de parameter heen mapt (3b2).

// Manier 1 een methode zonder functie;
// hier gebruik je een methode zonder functie, tot slot plaats je in de console.log de variabelnaam om hem te loggen.
const tvBrands = inventory.map(array => {
    return array.brand;
});

console.log(tvBrands);

//Opdracht 3b:** Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
//onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
//-declaratie niet aan te roepen!

// manier 2 een functie waarbij je door de originele array mapt (3b1);
// hier gebruik je een functie om in principe hetzelfde te doen als in manier 1;
// je mapt nog steeds door de originele array heen.
function listTvBrands() {
    const tvBrands = inventory.map((array) => {
        return array.brand;
    });
    return tvBrands
}

console.log(listTvBrands());


// opdracht 2 kan ook met een functie inclusief argument, die door een parameter mapt, te weten:
// manier 3 functie inclusief argument, waarbij je door de parameter heen mapt (3b2).

function tvBrandsList (array) {
    const tvBrands = array.map((tvObject) => {
        return tvObject.brand;
    });
    return tvBrands;
}

const output = tvBrandsList(inventory);
console.log(output);

//-----------------------