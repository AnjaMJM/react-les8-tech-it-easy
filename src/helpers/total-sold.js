// Opdracht 1a: Hoeveel tv's zijn er al verkocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.
// [ ] importeer inventory.js
// [ ] Maak functie TotalSold
// [ ] Itereer door objecten en extraheer aantal verkochte tv's
// [ ] Tel aantal verkochte tv's bij elkaar op
// [ ] Koppel functie aan pagina

import {inventory} from "../constants/inventory.js";

export function totalSold(items) {
    return items.reduce((totalSold, currentItem) => {
        return totalSold + currentItem.sold;
    }, 0);
}

console.log(totalSold(inventory))