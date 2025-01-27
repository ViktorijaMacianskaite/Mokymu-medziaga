// console.log('==========================================');
// console.log('========== arrays 2- uzduotys =============');
// console.log('================ pvz =====================');

// console.log('============ 1 uzduotis =================='); //Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …


// let miskas = ['egle', 'pusis', 'azuolas', 'klevas', 'drebule'];
// for (let [index, element] of miskas.entries()) {
//     console.log(`${index} - ${element}`);
// }


// console.log('============== 2 uzduotis ================'); //Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.

// // pirkinių sąrašo masyvas ir  duomenys
// let shoppingList = ['Duona', 'Pienas', 'Kiaušiniai', 'Sviestas', 'Obuoliai'];

// // kiek yra pirkinių sąraše
// console.log(`Pirkinių skaičius: ${shoppingList.length}`);

// // Naudojant for...of (su reikšmėmis)
// console.log('Pirkinių sąrašas (for...of):');
// for (let item of shoppingList) {
//     console.log(`- ${item}`);
// }

// // Naudojant for...in (su indeksais)
// console.log('Pirkinių sąrašas (for...in):');
// for (let index in shoppingList) {
//     console.log(`- ${shoppingList[index]}`);
// }

// console.log('============== 3 uzduotis ================'); //Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.
// // Sukuriame masyvą studento pažymiams saugoti
// let grades = [8, 9, 7, 10, 6, 9];

// // vidurkis:
// let total = 0;
// for (let grade of grades) {
//     total += grade; // pazymiu suma
// }
// let average = total / grades.length; // vidurkis

// // visi pazymiai
// console.log("Studento pažymiai:");
// for (let grade of grades) {
//     console.log(`- ${grade}`);
// }

// // vidurkis
// console.log(`Pažymių vidurkis: ${Math.floor(average)}`);

// console.log('============== 4 uzduotis ================'); //Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus per dieną kilometrus, kurie yra didesni nei 150.

// let kilometers = [120, 145, 90, 160, 200, 140, 180];

// console.log("Nuvažiuoti kilometrai, didesni nei 150:");
// for (let kilometer of kilometers) {
//     if (kilometer > 150) {
//         console.log(kilometer);
//     }
// }

// console.log('============== 6 uzduotis ================'); //Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą. 

// let carBrands = ['Toyota', 'Honda', 'BMW', 'Audi']; 

// for (let brand of carBrands) {
//     console.log(`Automobilio marke ${brand} sudaro: ${brand.length} raidės`); 
// }

// console.log('============== 7 uzduotis ================'); //Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.


// let errorCodes = ['ui87', 'sys12', 'db34', 'zz33'];

// // klaidu aprasymas
// let errorMessages = {
//     'ui87': 'Klaida navigacijoje',
//     'sys12': 'Truksta atminties sistemoje',
//     'db34': 'Klaida prisijungiant',
// };

// for (let code of errorCodes) {
//     if (errorMessages[code]) {
//         console.log(`Kodas ${code}: ${errorMessages[code]}`);
//     } else {
//         console.log(`Kodas ${code}: Nenustatyta klaida`);
//     }
// }

// console.log('============== 8 uzduotis ================'); //Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės užteks maždaug 11 dienų ir t.t.


// let stockQuantities = [74, 54, 32, 120, 95];

// for (let quantity of stockQuantities) {
//     let daysToSell = Math.floor(quantity / 5); 
//     console.log(`${quantity} prekiu uzteks ${daysToSell} d.`);
// }

// console.log('============== 9 uzduotis ================'); //Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų pažymių kiekį.


// let lesssiongrades = [];

// for (let i = 0; i < lesssiongrades.length; i++) {
//     lesssiongrades.push(Math.floor(Math.random() * 10) + 1); 
// }
// console.log(lesssiongrades)

// let sum = 0;
// let negativeGrades = 0;
// let positiveGrades = 0;
// let positiveGradesList = [];

// for (let lessiongrade of lesssiongrades) {
//     sum += lessiongrade;
//     if (lessiongrade < 5) {
//         negativeGrades++;
//     } else {
//         positiveGrades++; 
//         positiveGradesList.push(lessiongrade); 
//     }
// }

// let gradesaverage = sum / lesssiongrades.length; 

// console.log("Teigiami:", positiveGradesList);
// console.log("Vidurkis:", gradesaverage.toFixed(2)); 
// console.log("Neigiami:", negativeGrades);

// console.log('============== 10 uzduotis ================'); //Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir nurodykite kuris studentas turi didesnį vidurkį.

// let student1Grades = [8, 7, 9, 6, 5];  
// let student2Grades = [5, 6, 4, 7, 8];  

// let student1Sum = 0;
// for (let grade of student1Grades) {
//     student1Sum += grade;
// }
// let student1Average = student1Sum / student1Grades.length; 

// console.log("Studento 1 pazymiai:", student1Grades);
// console.log("Studento 1 vidurkis:", student1Average.toFixed(2));

// let student2Sum = 0;
// for (let grade of student2Grades) {
//     student2Sum += grade;
// }
// let student2Average = student2Sum / student2Grades.length;  

// console.log("Studento 2 pazymiai:", student2Grades);
// console.log("Studento 2 vidurkis:", student2Average.toFixed(2));

// if (student1Average > student2Average) {
//     console.log("Studento 1 didesnis vidurkis.");
// } else if (student1Average < student2Average) {
//     console.log("Studento 2 didesnis vidurkis.");
// } else {
//     console.log("Vidurkis vienodas");
// }

// console.log('==========================================');