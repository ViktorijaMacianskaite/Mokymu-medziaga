// console.log('==========================================');
// console.log('========== object 2 - uzduotys =============');
// console.log('================ pvz =====================');

// let studentasa = {
//     vardas: 'Jonas',
//     amzius: 20,
//     kursas: 'medicina',
//     studijos: {
//         kursas: 'medicina',
//         metai: 4,
//         kartojantis: false,
//         pazymiai: [8, 7, 7, 6, 8]
//     },
//     miestas: 'Vilnius'
// }

// for (let savybe in studentasa){
//     console.log(savybe)
// }
// /************/
// let studentasb = {
//     vardas: 'Jonas',
//     amzius: 20,
//     kursas: 'medicina',
//     studijos: {
//         kursas: 'medicina',
//         metai: 4,
//         kartojantis: false,
//         pazymiai: [8, 7, 7, 6, 8]
//     },
//     miestas: 'Vilnius'
// }

// for (let savybe in studentasb) {
//     console.log(savybe + ':' + studentasb[savybe])
// }

// console.log('============ 1 uzduotis ==================');// Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.). 

// let knygynas = {
//     pavadinimas: "Knygu sala",
//     adresas: "Gedimino pr. 10, Vilnius",
//     plotas: 200, 
//     knyguKiekis: 15000,
//     darboValandos: "9:00 - 18:00",
//     arAtidarytas: true
// };

// console.log("Knygyno informacija:");
// for (let savybe in knygynas) {
//     console.log(`${savybe}: ${knygynas[savybe]}`);
// }

// console.log("\n Savybes, kuriu reiksmes nera string tipo:");
// for (let savybe in knygynas) {
//     if (typeof knygynas[savybe] !== "string") {
//         console.log(`${savybe}: ${knygynas[savybe]}`);
//     }
// }

// console.log('============== 2 uzduotis ================'); // Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius. Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir išveskite jo vardą su pavarde.

// // Sukuriame du studentų objektus

// let studentas1 = {
//     vardas: "Jonas",
//     pavarde: "Jonaitis",
//     studijuPrograma: "Informatika",
//     pazymiai: [8, 7, 9, 10, 6]
// };

// let studentas2 = {
//     vardas: "Marta",
//     pavarde: "Marciukaitė",
//     studijuPrograma: "Matematika",
//     pazymiai: [7, 6, 8, 9, 5]
// };

// function pazymiuVidurkis(pazymiai) {
//     let suma = pazymiai.reduce((acc, pazymys) => acc + pazymys, 0);
//     return suma / pazymiai.length;
// }

// let studento1Vidurkis = pazymiuVidurkis(studentas1.pazymiai);
// let studento2Vidurkis = pazymiuVidurkis(studentas2.pazymiai);

// console.log(`Studentas 1: ${studentas1.vardas} ${studentas1.pavarde}`);
// console.log(`Studiju programa: ${studentas1.studijuPrograma}`);
// console.log(`Pazymiai: ${studentas1.pazymiai}`);
// console.log(`Pazymiu vidurkis: ${studento1Vidurkis.toFixed(2)}`);

// console.log("\n");

// console.log(`Studentas 2: ${studentas2.vardas} ${studentas2.pavarde}`);
// console.log(`Studiju programa: ${studentas2.studijuPrograma}`);
// console.log(`Pazymiai: ${studentas2.pazymiai}`);
// console.log(`Pazymiu vidurkis: ${studento2Vidurkis.toFixed(2)}`);

// console.log("\n");


// if (studento1Vidurkis > studento2Vidurkis) {
//     console.log(`Studento su didesniu vidurkiu vardas ir pavarde: ${studentas1.vardas} ${studentas1.pavarde}`);
// } else if (studento2Vidurkis > studento1Vidurkis) {
//     console.log(`Studento su didesniu vidurkiu vardas ir pavarde: ${studentas2.vardas} ${studentas2.pavarde}`);
// } else {
//     console.log("Abieju studentu pazymiu vidurkiai yra vienodi.");
// }

// console.log('==========================================');