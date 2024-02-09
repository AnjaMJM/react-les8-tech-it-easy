// Opdracht 1c: Hoeveel tv's heeft Tech It Easy in totaal ingekocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.
// [ ] importeer inventory.js
// [ ] Maak functie TotalBought
// [ ] Tel aantal verkochte tv's bij elkaar op
// [ ] Koppel functie aan pagina

import {inventory} from "../constants/inventory.js";

export function totalBought(items) {
    return items.reduce((bought, currentItem) => {
        return bought + currentItem.originalStock
    }, 0);
}

console.log(totalBought(inventory))

// uitleg functie: https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/
// The reduce() method takes a user-defined callback function as its first required argument. The function gets called on each element in the array.
//
//     The callback function accepts the following two required parameters:
//
//     The accumulator (here: bought), which is the variable that stores the last returned value from the previous function call.
//     The currentValue (here: currentItem), which represents the current array item.
//
//     The second argument to the reduce() method is the initialValue, which is 0. The initialValue represents the initial value of the accumulator.