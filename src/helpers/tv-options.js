// een helperfunctie die op basis van een true of false bepaald welke afbeelding geplaatst moet worden bij de verschillende options
//
// - inventory.options.name of .applicable
// - per object door de lijst heen mappen en alle namen afdrukken
// - a.d.h.v. applicable key met een if statement bepalen welke afbeelding ervoor geplaatst moet worden
import {inventory} from "../constants/inventory.js";

const imgCheck = document.createElement("img");
imgCheck.src = "src/assets/check.png"
imgCheck.width = 14
document.body.appendChild(imgCheck)

const imgMinus = document.createElement("img");
imgMinus.src = "src/assets/minus.png"
imgMinus.width = 14
document.body.appendChild(imgMinus)

// export const tvOptions= inventory.map((object) => {
//     return object.options.map((option) => {
//         if (option.applicable === true) {
//             return imgCheck + option.name
//         } else {
//             return imgMinus + option.name
//         }
//     })
// })

export function tvOptions(array) {
    if (array === true) {
        return imgCheck.src
        // return imgCheck + apply.name
    } else {
        return imgMinus.src
    }
}