// console.log('==========================================');
// console.log('========== function - uzduotys =============');
// console.log('================ pvz =====================');

// function isvestiMasyva(komentaras, masyvas) {
//     console.log(komentaras);
//     for (const elementas of masyvas) {
//         console.log('-', elementas);
//     }
//     console.log();
// }

// let skaiciai = [8, 5, 3];
// let zmones = ['Asta', 'Inga'];

// isvestiMasyva('Skaiciai:', skaiciai)

// /*************/

// function masyvoIsvedimas(mas) {
//     console.log('Duomenys', mas.join(','));
// }

// function skaiciuSuma(masyvas){
//     let suma = 0;
//     for (let item of masyvas) {
//         suma += item;
//     }
//     console.log('skaiciu suma:', suma);
// }

// let skaiciai1 = [4, 5, 7];
// let skaiciai2 = [9, 15, 24];

// masyvoIsvedimas(skaiciai1);
// masyvoIsvedimas(skaiciai2);

// skaiciuSuma(skaiciai1);
// skaiciuSuma(skaiciai2);


// /*****************/

// function didziausiaReiksme(mas) {
//     let didziausiaReiksme = mas[0];

// for(let elementas of mas){
//     if (elementas > didziausiaReiksme) {
//         didziausiaReiksme = elementas;
//     }
// }

// console.log('didziausias', didziausiaReiksme)
// }

// let skaiciaiA = [1, 6, 7]
// let skaiciaiB = [2, 9, 7]

// console.log(skaiciaiA)
// didziausiaReiksme(skaiciaiA)

// console.log(skaiciaiB)
// didziausiaReiksme(skaiciaiB)

// console.log('============ 1 uzduotis =================='); // Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.

// function isvestiZodziusSuIlgiais(zodziai) {
//     for (let zodis of zodziai) {
//         console.log(`Zodis: "${zodis}", Ilgis: ${zodis.length}`);
//     }
// }

// let zodziuMasyvas = ["obuolys", "kriause", "slyva", "arbuzas", "morka"];

// isvestiZodziusSuIlgiais(zodziuMasyvas);

// console.log('============== 2 uzduotis ================'); //Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.

// function apdorotiSkaicius(skaiciai) {
//     for (let skaicius of skaiciai) {
//         let kvadratas = skaicius * skaicius;
//         let dalisIsDvieju = skaicius / 2;
//         console.log(`Skaicius: ${skaicius}, Kvadratas: ${kvadratas}, Padalinta is dvieju: ${dalisIsDvieju}`);
//     }
// }

// let pirmasMasyvas = [1, 2, 3, 4, 5];
// let antrasMasyvas = [6, 7, 8, 9, 10];

// apdorotiSkaicius(pirmasMasyvas);
// apdorotiSkaicius(antrasMasyvas);

// console.log('============== 3 uzduotis ================'); //Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba objektus studentų pažymiams saugoti ir užpildykite juos duomenimis. Iškvieskite šią funkciją perduodant visus reikalingus duomenis.

// function isvestiStudentoInformacija(vardas, pavarde, pazymiai) {
   
//     console.log(`Studento vardas: ${vardas} ${pavarde}`);

//     console.log("Studento pazymiai:", pazymiai);

//     let suma = 0;
//     for (let pazymys of pazymiai) {
//         suma += pazymys;
//     }
//     let vidurkis = suma / pazymiai.length;

//     console.log(`Pazymiu vidurkis: ${vidurkis.toFixed(2)}`);
// }

// let studentas1 = {
//     vardas: "Jonas",
//     pavarde: "Jonaitis",
//     pazymiai: [8, 7, 9, 10, 6]
// };

// let studentas2 = {
//     vardas: "Petras",
//     pavarde: "Petrauskas",
//     pazymiai: [9, 8, 7, 10, 6]
// };

// isvestiStudentoInformacija(studentas1.vardas, studentas1.pavarde, studentas1.pazymiai);

// isvestiStudentoInformacija(studentas2.vardas, studentas2.pavarde, studentas2.pazymiai);

// console.log('============== 4 uzduotis ================'); // Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus. Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.

// function sugeneruotiAtsitiktinius(masyvas, kiekis) {
//     for (let i = 0; i < kiekis; i++) {
//         masyvas.push(Math.floor(Math.random() * 100) + 1);
//     }
// }

// function rastiDidziausiaSkciu(masyvas) {
//     let didziausias = Math.max(...masyvas);
//     console.log(`Didziausias: ${didziausias}`);
// }

// let masyvas1 = [];
// let masyvas2 = [];
// let masyvas3 = [];

// sugeneruotiAtsitiktinius(masyvas1, 5); 
// sugeneruotiAtsitiktinius(masyvas2, 5); 
// sugeneruotiAtsitiktinius(masyvas3, 5); 

// console.log("Masyvas 1:", masyvas1);
// console.log("Masyvas 2:", masyvas2);
// console.log("Masyvas 3:", masyvas3);

// rastiDidziausiaSkciu(masyvas1);
// rastiDidziausiaSkciu(masyvas2);
// rastiDidziausiaSkciu(masyvas3);

// console.log('==========================================');