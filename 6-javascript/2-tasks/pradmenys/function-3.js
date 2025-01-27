// console.log('==========================================');
// console.log('========== function - uzduotys =============');
// console.log('================ pvz =====================');


// console.log('============ 1 uzduotis =================='); //Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.


// function pasisveikink(vardas){
//     console.log('welcome ' + vardas);
// }

// function atsisveikink(vardas){
//     console.log('bye ' + vardas);
// }

// pasisveikink(vardas);
// atsisveikink(vardas);

// console.log('============== 2 uzduotis ================'); //Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs - tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų, duodant skirtingus skaičius.


// function palygintiSkaicius(skaicius1, skaicius2) {
//     if (skaicius1 > skaicius2) {
//         console.log(`${skaicius1} yra didesnis uz ${skaicius2}`);
//     } else if (skaicius1 < skaicius2) {
//         console.log(`${skaicius2} yra didesnis uz ${skaicius1}`);
//     } else {
//         console.log(`Skaiciai ${skaicius1} ir ${skaicius2} yra lygus`);
//     }
// }

// palygintiSkaicius(10, 5);
// palygintiSkaicius(3, 8);
// palygintiSkaicius(7, 7);
// palygintiSkaicius(-4, 2);
// palygintiSkaicius(0, 0);

// console.log('============== 3 uzduotis ================'); // Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė, modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant skirtingus duomenis jai.

// function isvestiAutomobilioDuomenis(marke, modelis, gamybosMetai, darbinisTuris) {
//     console.log(`Automobilio duomenys:`);
//     console.log(`Marke: ${marke}`);
//     console.log(`Modelis: ${modelis}`);
//     console.log(`Gamybos metai: ${gamybosMetai}`);
//     console.log(`Darbinis turis: ${darbinisTuris} l`);
//     console.log("-----");
// }

// isvestiAutomobilioDuomenis("Toyota", "Corolla", 2020, 1.8);
// isvestiAutomobilioDuomenis("BMW", "X5", 2018, 3.0);

// console.log('============== 4 uzduotis ================');//

// function suma(a, b) {
//     console.log(`${a} + ${b} = ${a + b}`);
// }

// function skirtumas(a, b) {
//     console.log(`${a} - ${b} = ${a - b}`);
// }

// function sandauga(a, b) {
//     console.log(`${a} * ${b} = ${a * b}`);
// }

// function dalmuo(a, b) {
//     if (b !== 0) {
//         console.log(`${a} / ${b} = ${a / b}`);
//     } else {
//         console.log(`${a} / ${b} = nera apibreztas (dalinimas is nulio)`);
//     }
// }

// function skaiciavimas() {
//     const skaicius1 = Math.floor(Math.random() * 100); 
//     const skaicius2 = Math.floor(Math.random() * 100); 

//     console.log(`Sugeneruoti skaiciai: ${skaicius1} ir ${skaicius2}`);
//     suma(skaicius1, skaicius2);
//     skirtumas(skaicius1, skaicius2);
//     sandauga(skaicius1, skaicius2);
//     dalmuo(skaicius1, skaicius2);
//     console.log("-----");
// }

// skaiciavimas();
// skaiciavimas();
// skaiciavimas();


// console.log('==========================================');