// Opdracht 3a: Zorg ervoor dat wanneer een gebruiker op de 'Meest verkocht eerst'-knop klikt, de inventory-array wordt gesorteerd op aantal verkochte items van hoog naar laag. Log de uitkomst in de console.
// Opdracht 3b: Zorg ervoor dat wanneer een gebruiker op de 'Goedkoopste eerst'-knop klikt, de inventory-array wordt gesorteerd op prijs van laag naar hoog. Log de uitkomst in de console.
// Opdracht 3c: Zorg ervoor dat wanneer een gebruiker op 'Meest geschikt voor sport eerst'-knop klikt, de inventory -array wordt gesorteerd op verversingssnelheid van hoog naar laag. Log de uitkomst in de console.
//

import {inventory} from "../constants/inventory.js";

export const sortByItemsSold = inventory.sort((a,b) => {
    return b.sold - a.sold
})

console.log("most sold", sortByItemsSold)

export const sortByItemPrice = inventory.sort ((a, b) =>{
    return a.price - b.price
})

console.log("cheapest first", sortByItemPrice)

export const sortBySportSuitability = inventory.sort ((a, b) => {
    return b.refreshRate - a.refreshRate
})

console.log("best for sport", sortBySportSuitability)