// console.log('==========================================');
// console.log('========== function - uzduotys =============');
// console.log('================ pvz =====================');


// console.log('============ 1 uzduotis =================='); // Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.

// function skaiciuSuma(masyvas) {
//     let suma = 0;
//     for (let skaicius of masyvas) {
//         suma += skaicius;
//     }
//     return suma;
// }

// let masyvas1 = [5, 10, 15, 20];
// let masyvas2 = [7, 14, 21, 28];

// let suma1 = skaiciuSuma(masyvas1);
// console.log(`Pirmojo suma: ${suma1}`);

// let suma2 = skaiciuSuma(masyvas2);
// console.log(`Antrojo suma: ${suma2}`);

// if (suma1 > suma2) {
//     console.log("Pirmojo suma didesne.");
// } else if (suma1 < suma2) {
//     console.log("Antrojo suma didesne.");
// } else {
//     console.log("Abieju sumos lygios.");
// }


// console.log('============== 2 uzduotis ================'); // Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą. Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip pat, nurodykite šio žodžio ilgį.


// function rastiIlgiausiaZodi(masyvas) {
//     let ilgiausiasZodis = masyvas[0];

//     for (let zodis of masyvas) {
//         if (zodis.length > ilgiausiasZodis.length) {
//             ilgiausiasZodis = zodis;
//         }
//     }

//     return ilgiausiasZodis;
// }

// let zodziuMasyvas = ["medis", "kompiuteris", "zodis", "programavimas", "vanduo"];

// let ilgiausiasZodis = rastiIlgiausiaZodi(zodziuMasyvas);

// console.log(`Ilgiausias: "${ilgiausiasZodis}", ilgis: ${ilgiausiasZodis.length}`);


// console.log('============== 3 uzduotis ================'); //Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. Ji turėtų patikrinti ar visi pažymiai teigiami: jei visi teigiami turėtų grąžintų true kaip atsakymą, o jei yra bent vienas neigiamas - false. Susikurkite du pažymių masyvus. Iškvieskite šią funkciją du kartus, abu kartus perduodant skirtingus masyvus. Gautus atsakymus paverskite į tekstą (jeigu gavote true - išveskite tekstą 'visi studento pažymiai teigiami', jei false - 'studentas turi bent vieną neigiamą pažymį'). Šiam iškonvertavimui iš true/false į tekstą galite pamėginti pasikurti atskirą funkciją, jai perduoti kitos funkcijos atsakymą.

// function arVisiTeigiami(pazymiai) {
//     for (let pazymys of pazymiai) {
//         if (pazymys < 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function atsakymoKonvertavimas(arTeigiami) {
//     if (arTeigiami) {
//         return "Pazymiai teigiami.";
//     } else {
//         return "Yra neigiamas pazymys.";
//     }
// }

// let pazymiai1 = [8, 9, 10, 7, 6];
// let pazymiai2 = [5, 8, -3, 7, 9];

// let rezultatas1 = atsakymoKonvertavimas(arVisiTeigiami(pazymiai1));
// let rezultatas2 = atsakymoKonvertavimas(arVisiTeigiami(pazymiai2));

// console.log(rezultatas1);
// console.log(rezultatas2);



// console.log('==========================================');