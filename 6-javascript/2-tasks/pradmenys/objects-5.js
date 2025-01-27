// console.log('==========================================');
// console.log('========== object 2 - uzduotys =============');
// console.log('================ pvz =====================');

// let studentaiPvz = [

//     {
//         vardas: 'Jonas',
//         pazymiai: [3, 5, 7]
//     },
//     {
//         vardas: 'Tomas',
//         pazymiai: [3, 5, 7, 5]
//     },
//     {
//         vardas: 'Romas',
//         pazymiai: [3, 5, 7, 7]
//     }
// ]

// for (let studentas of studentaiPvz){
// console.log('vardas ' + studentas.vardas)

// let suma = 0;

// for(let pazimys of studentas.pazymiai) {
//     suma += pazimys;
// }
// console.log('vidurkis: ' + suma/studentas.pazymiai.length.toFixed(2))
// }


// console.log('============ 1 uzduotis =================='); //Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų žinoma ši informacija: vardas ir pavardė, amžius, pažymiai, studijų programa, kursas. Kiekvieną studentą išveskite taip: pirmoje eilutėje visi studento duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai, trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. Išvedus visus studentus dėkite brūkšnį (pvz.: -----) ir išveskite bendrą visų studentų pažymių vidurkį.

// let studentai = [
//     {
//         vardas: "Jonas",
//         pavarde: "Jonaitis",
//         amzius: 22,
//         pazymiai: [8, 7, 9, 10, 6],
//         studijuPrograma: "Informatika",
//         kursas: 3
//     },
//     {
//         vardas: "Petras",
//         pavarde: "Petrauskas",
//         amzius: 21,
//         pazymiai: [9, 8, 9, 7, 10],
//         studijuPrograma: "Matematika",
//         kursas: 2
//     },
//     {
//         vardas: "Toma",
//         pavarde: "Tomaite",
//         amzius: 20,
//         pazymiai: [10, 10, 9, 9, 9],
//         studijuPrograma: "Chemija",
//         kursas: 1
//     }
// ];

// let bendraPazymiuSuma = 0;
// let studentuSkaicius = studentai.length;

// for (let studentas of studentai) {

//     console.log(`Vardas: ${studentas.vardas} ${studentas.pavarde}, Amzius: ${studentas.amzius}, Studiju Programa: ${studentas.studijuPrograma}, Kursas: ${studentas.kursas}`);
//     console.log("Pazymiai:", studentas.pazymiai);

//     let pazymiuSuma = 0;
//     for (let pazymys of studentas.pazymiai) {
//         pazymiuSuma += pazymys;
//     }

//     let pazymiuVidurkis = pazymiuSuma / studentas.pazymiai.length;

//     pazymiuVidurkis = pazymiuVidurkis.toFixed(2);

//     console.log("Pazymiu vidurkis:", pazymiuVidurkis);

//     bendraPazymiuSuma += pazymiuSuma;

//     console.log("-----");
// }

// let bendrasVidurkis = bendraPazymiuSuma / (studentuSkaicius * studentai[0].pazymiai.length);
// bendrasVidurkis = bendrasVidurkis.toFixed(2);

// console.log("Bendras visu studentu pazymiu vidurkis:", bendrasVidurkis);



// console.log('============== 2 uzduotis ================'); // Susikurkite parduotuvės objektą, kuriame būtų ši informacija: pavadinimas, adresas, darbuotojų kiekis, prekių objektų masyvas. Apie kiekvieną prekę parduotuvėje žinoma ši informacija: pavadinimas; kodas; kaina; savikaina; turimas kiekis. Išveskite parduotuvės bendrą informaciją, tuomet užrašą "prekės" ir atskirose eilutėse turimas prekes su kuria nors jų informacija (pvz.: pavadinimai, kainos ir turimi kiekiai). Galiausiai paskaičiuokite kiek iš viso parduotuvė turi visų prekių (sudėkite jų kiekius). Raskite ir išveskite kurios prekės turima daugiausiai, o kurios mažiausiai.

// let parduotuve = {
//     pavadinimas: "TechParduotuve",
//     adresas: "Vilniaus g. 10, Vilnius",
//     darbuotojuKiekis: 25,
//     prekes: [
//         { pavadinimas: "Televizorius", 
//           kaina: 500, 
//           turimasKiekis: 10 
//         },
//         { pavadinimas: "Kompiuteris", 
//           kaina: 1200, 
//           turimasKiekis: 5 
//         },
//         { pavadinimas: "Mobilus telefonas", 
//           kaina: 800, 
//           turimasKiekis: 20 }
//     ]
// };


// console.log(`${parduotuve.pavadinimas}, ${parduotuve.adresas}`);
// console.log(`Darbuotojų kiekis: ${parduotuve.darbuotojuKiekis}`);
// console.log("Prekės:");


// let bendrasPrekiuKiekis = 0;
// let daugiausiaiPrekiu = parduotuve.prekes[0];
// let maziausiaiPrekiu = parduotuve.prekes[0];

// for (let preke of parduotuve.prekes) {
//     console.log(`${preke.pavadinimas} - Kaina: ${preke.kaina} EUR, Turimas kiekis: ${preke.turimasKiekis}`);
//     bendrasPrekiuKiekis += preke.turimasKiekis;

//     if (preke.turimasKiekis > daugiausiaiPrekiu.turimasKiekis) console.log(`Daugiausiai: ${daugiausiaiPrekiu.pavadinimas}`);

//     if (preke.turimasKiekis < maziausiaiPrekiu.turimasKiekis) console.log(`Maziausiai: ${maziausiaiPrekiu.pavadinimas}`);
// }

// console.log(`Bendras turimų prekių kiekis: ${bendrasPrekiuKiekis}`);



// console.log('==========================================');