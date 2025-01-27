// console.log('==========================================');
// console.log('========== object 2 - uzduotys =============');

// console.log('============ 1 uzduotis =================='); // Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. Visas šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią savybę.


// let knygos = [
//     {
//         pavadinimas: "Haris Poteris ir isminties akmuo",
//         autorius: "J.K. Rowling",
//         puslapiuSkaicius: 320
//     },
//     {
//         pavadinimas: "Ziedu Valdovas: Ziedo brolija",
//         autorius: "J.R.R. Tolkien",
//         puslapiuSkaicius: 480
//     },
//     {
//         pavadinimas: "Alchemikas",
//         autorius: "Paulo Coelho",
//         puslapiuSkaicius: 192
//     }
// ];

// console.log("Visos knygos:");
// console.log(knygos);

// console.log("\n");

// console.log("Pirma knyga:");
// console.log(knygos[0]);

// console.log("\n");

// console.log("Antros knygos pavadinimas:");
// console.log(knygos[1].pavadinimas);


// console.log('============== 2 uzduotis ================'); // Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis. Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais atskirose eilutėse.

// let prekes = [
//     {
//         pavadinimas: "Kompiuteris",
//         kaina: 1200,
//         spalva: "Juoda"
//     },
//     {
//         pavadinimas: "Telefonas",
//         kaina: 800,
//         spalva: "Sidabrine"
//     },
//     {
//         pavadinimas: "Televizorius",
//         kaina: 1500,
//         spalva: "Pilka"
//     }
// ];

// prekes.forEach(preke => {
//     console.log(`Pavadinimas: ${preke.pavadinimas}, Kaina: ${preke.kaina} EUR, Spalva: ${preke.spalva}`);
// });

// console.log('============== 2 uzduotis ================'); // Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis. Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių (dabartiniai metai - gamybos metai).

// let automobiliai = [
//     {
//         pavadinimas: "Toyota",
//         metai: 2015,
//         spalva: "Balta"
//     },
//     {
//         pavadinimas: "BMW",
//         metai: 2018,
//         spalva: "Juoda"
//     },
//     {
//         pavadinimas: "Audi",
//         metai: 2020,
//         spalva: "Pilka"
//     }
// ];

// const dabartiniaiMetai = new Date().getFullYear();

// automobiliai.forEach(auto => {
//     const amzius = dabartiniaiMetai - auto.metai;
//     console.log(`Pavadinimas: ${auto.pavadinimas}, Metai: ${auto.metai}, ${amzius} metu`);
// });

// console.log('==========================================');