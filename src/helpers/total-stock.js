// Opdracht 1e: Schrijf een helperfunctie die berekent hoeveel tv's er nog verkocht moeten worden. Geef de uitkomst in het rood weer op de pagina. Tip: je kunt een helperfunctie gebruiken in een andere helperfunctie.
// [ ] importeer total-bought.js en total-sold.js
// [ ] Maak functie TotalStock
// [ ] Trek aantal verkochte tv's af van totale inkoop
// [ ] Koppel functie aan pagina

import {totalSold} from "./total-sold.js";
import {totalBought} from "./total-bought.js";
import {inventory} from "../constants/inventory.js";

//
export function totalStock() {


    return totalBought(inventory) - totalSold(inventory)
}

console.log(totalStock())

// const totalBoughtValue = totalBought(inventory)
// const totalSoldValue = totalSold(inventory)
//
// console.log("totalSold", totalSoldValue)
// console.log("totalBought", totalBoughtValue)