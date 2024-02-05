// Opdracht 2a: Maak een helper functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// linken naar alle keys in log
// gewenste string van maken
// generieke string die door invoeren van juiste array positie de juiste tv genereert

import {bestSellingTv} from "../constants/inventory.js";


export function tvTitle(object) {
    return `${object.brand} ${object.type} - ${object.name}`
}

console.log(tvTitle(bestSellingTv()))

// Opdracht 2b: Maak een helperfunctie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

export function tvPrice(object) {
    return `€${object.price},-`
}

console.log(tvPrice(bestSellingTv()))

//  Opdracht 2c: Maak een helperfunctie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.


export function tvSize(object) {
    let sizes = [];

    for (let i = 0; i < object.availableSizes.length; i++) {
        let sizeInInches = object.availableSizes[i];
        let sizeInCm = sizeInInches / 2.54;
        let sizeString = `${sizeInInches} inches (${sizeInCm.toFixed(0)} cm)`;
        sizes.push(sizeString);
    }

    return sizes.join(' | ');
}

console.log(tvSize(bestSellingTv()))

// een helperfunctie die op basis van een true of false bepaald welke afbeelding geplaatst moet worden bij de verschillende options
//
// - inventory.options name of applicable
// per object door de lijst heen mappen en alle namen afdrukken
// a.d.h.v. applicable key met een if statement bepalen welke afbeelding ervoor geplaatst moet worden

// export const tvSpecifications= objects.map((object)) {
//     const icon = new Image(14);
//
//     if (object.options.applicable === true) {
//         return icon.src = "./assets/screenshots/check.png"
//     } else {
//         return icon.src = "./assets/screenshots/minus.png"
//     }
//
// }

// const img = document.createElement("img");
// img.src = "./assets/screenshots/check.png"
// document.body.appendChild(img)