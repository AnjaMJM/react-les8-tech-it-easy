// BEST VERKOPENDE TV --> vervangen door functie bestSellingTv
// export const bestSellingTv = {
//     type: 'UHD 55AU7040',
//     name: 'Crystal',
//     brand: 'Samsung',
//     price: 549,
//     availableSizes: [43, 50, 55, 65],
//     refreshRate: 50,
//     screenType: 'LED-LCD',
//     screenQuality: 'Ultra HD/4K',
//     smartTv: true,
//     sourceImg: 'https://image.coolblue.nl/max/500x500/products/1786196',
//     options: [
//         {
//             name: "wifi",
//             applicable: true
//         },
//         {
//             name: "speech",
//             applicable: false
//         },
//         {
//             name: "hdr",
//             applicable: true
//         },
//         {
//             name: "bluetooth",
//             applicable: true
//         },
//         {
//             name: "ambiLight",
//             applicable: false
//         }
//     ],
//     originalStock: 52,
//     sold: 17,
// }

// STATISCHE VOORRAAD TV'S
export let inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        sourceImg: 'https://media.s-bol.com/71r1kjwlLkWO/1200x793.jpg',
        options: [
            {
                name: "wifi",
                applicable: true,
            },
            {
                name: "speech",
                applicable: false,
            },
            {
                name: "hdr",
                applicable: true,
            },
            {
                name: "bluetooth",
                applicable: false,
            },
            {
                name: "ambiLight",
                applicable: false,
            }
        ],
        originalStock: 23,
        sold: 10,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        sourceImg: 'https://media.s-bol.com/NXrQRlwvDMkL/08R4V33/1200x764.jpg',
        options: [
            {
                name: "wifi",
                applicable: true,
            },
            {
                name: "speech",
                applicable: false,
            },
            {
                name: "hdr",
                applicable: false,
            },
            {
                name: "bluetooth",
                applicable: false,
            },
            {
                name: "ambiLight",
                applicable: false,
            }
        ],
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        sourceImg: 'https://media.s-bol.com/B9n73k76VG2N/vQYEKNn/1200x734.jpg',
        options:     [
            {
                name: "wifi",
                applicable: true,
            },
            {
                name: "speech",
                applicable: true,
            },
            {
                name: "hdr",
                applicable: true,
            },
            {
                name: "bluetooth",
                applicable: true,
            },
            {
                name: "ambiLight",
                applicable: false,
            }
        ],
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        sourceImg: 'https://media.s-bol.com/ROVXLp4q9joq/1200x751.jpg',
        smartTv: true,
        options:     [
            {
                name: "wifi",
                applicable: true,
            },
            {
                name: "speech",
                applicable: true,
            },
            {
                name: "hdr",
                applicable: true,
            },
            {
                name: "bluetooth",
                applicable: true,
            },
            {
                name: "ambiLight",
                applicable: false,
            }
        ],
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        sourceImg: 'https://media.s-bol.com/BPwRO1oZO32W/1200x721.jpg',
        options: [
            {
                name: "wifi",
                applicable: true,
            },
            {
                name: "speech",
                applicable: true,
            },
            {
                name: "hdr",
                applicable: true,
            },
            {
                name: "bluetooth",
                applicable: true,
            },
            {
                name: "ambiLight",
                applicable: true,
            }
        ],
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [50, 55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        sourceImg: 'https://media.s-bol.com/wKJvXVlmPD7z/1200x702.jpg',
        options: [
            {
                name: "wifi",
                applicable: true,
            },
            {
                name: "speech",
                applicable: false,
            },
            {
                name: "hdr",
                applicable: true,
            },
            {
                name: "bluetooth",
                applicable: false,
            },
            {
                name: "ambiLight",
                applicable: true,
            }
        ],
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        sourceImg: 'https://media.s-bol.com/BLOQPk8ArJWo/1200x840.jpg',
        options: [
            {
                name: "wifi",
                applicable: false,
            },
            {
                name: "speech",
                applicable: false,
            },
            {
                name: "hdr",
                applicable: false,
            },
            {
                name: "bluetooth",
                applicable: false,
            },
            {
                name: "ambiLight",
                applicable: false,
            }
        ],
        originalStock: 10,
        sold: 18,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32, 43, 50],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        sourceImg: 'https://media.s-bol.com/ROVXLp4q9joq/1200x751.jpg',
        options: [
            {
                name: "wifi",
                applicable: false,
            },
            {
                name: "speech",
                applicable: false,
            },
            {
                name: "hdr",
                applicable: true,
            },
            {
                name: "bluetooth",
                applicable: false,
            },
            {
                name: "ambiLight",
                applicable: false,
            }
        ],
        originalStock: 10,
        sold: 8,
    },
    {
        type: 'UHD 55AU7040',
        name: 'Crystal',
        brand: 'Samsung',
        price: 549,
        availableSizes: [43, 50, 55, 65],
        refreshRate: 50,
        screenType: 'LED-LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        sourceImg: 'https://image.coolblue.nl/max/500x500/products/1786196',
        options: [
            {
                name: "wifi",
                applicable: true
            },
            {
                name: "speech",
                applicable: false
            },
            {
                name: "hdr",
                applicable: true
            },
            {
                name: "bluetooth",
                applicable: true
            },
            {
                name: "ambiLight",
                applicable: false
            }
        ],
        originalStock: 52,
        sold: 20,
    }
];

// [] Functie aanmaken bestSellingTv
// [] itereer door lijst op zoek naar hoogste waarde 'sold'
// [] return meest verkochte item

export function bestSellingTv() {

    let mostSold = inventory[0]
    let itemsSold = inventory[0].sold

    for (let i = 0; i < inventory.length; i++) {

        if (inventory[i].sold > itemsSold) {
            mostSold = inventory[i]
        }
    }
    return mostSold
}

console.log(bestSellingTv())


// Oefeningen Deel 2 - opdracht 1
//     Opdracht 1a: Gebruik een array-methode om een array te maken met daarin alle tv-type namen. Log de uitkomst in de console.

const tvNames = inventory.map((item) => {
    return item.name
})

console.log(tvNames)

//     Opdracht 1b: Gebruik een array-methode om alle informatie te verzamelen van de tv's die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOut = inventory.filter((item)=>{
    return (item.originalStock = item.sold)
})

console.log(soldOut)

// Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.

const specificTV = inventory.find((item) => {
    return (item.type === "NH3216SMART")
})

console.log(specificTV)

//     Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger). Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.

const sportTV = inventory.map((item) => {
    let suitable = item.refreshRate >= 100
    return {name: item.name, suitable: suitable}
})

console.log(sportTV);

//     Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.

//Maak een functie om de unieke objecten te inspecteren
// Maak hierbinnen een functie om de array 'availableSizes' te kunnen inspecteren.
// filter de tv's met grote schermen d.m.v. array-methode 'some'

const largeTVs = inventory.filter((item) =>item.availableSizes.some(size => size >=65));

console.log(largeTVs);


// Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight beschikken. Log de uitkomst in de console.

// const ambilightTVs = inventory