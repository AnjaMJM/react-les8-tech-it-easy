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

// uitleg functie: https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/
// The reduce() method takes a user-defined callback function as its first required argument. The function gets called on each element in the array.
//
//     The callback function accepts the following two required parameters:
//
//     The accumulator (here: bought), which is the variable that stores the last returned value from the previous function call.
//     The currentValue (here: currentItem), which represents the current array item.
//
//     The second argument to the reduce() method is the initialValue, which is 0. The initialValue represents the initial value of the accumulator.