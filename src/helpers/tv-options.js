// een helperfunctie die op basis van een true of false bepaald welke afbeelding geplaatst moet worden bij de verschillende options
//
// - inventory.options.name of .applicable
// - per object door de lijst heen mappen en alle namen afdrukken
// - a.d.h.v. applicable key met een if statement bepalen welke afbeelding ervoor geplaatst moet worden


const imgCheck = document.createElement("img");
imgCheck.src = "src/assets/check.png"


const imgMinus = document.createElement("img");
imgMinus.src = "src/assets/minus.png"


export function tvOptions(array) {
    if (array === true) {
        return imgCheck.src
        // return imgCheck + apply.name
    } else {
        return imgMinus.src
    }
}