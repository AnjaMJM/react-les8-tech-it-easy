// Opdracht 1c: Hoeveel tv's heeft Tech It Easy in totaal ingekocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.
// [ ] importeer inventory.js
// [ ] Maak functie TotalBought
// [ ] Tel aantal verkochte tv's bij elkaar op
// [ ] Koppel functie aan pagina

import {inventory} from "../constants/inventory.js";

export function totalBought(items) {
    return items.reduce((totalBought, currentItem) => {
        return totalBought + currentItem.originalStock;
    }, 0);
}

console.log(totalBought(inventory))