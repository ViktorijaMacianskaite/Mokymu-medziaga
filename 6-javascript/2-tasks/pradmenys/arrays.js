// console.log('==========================================');
// console.log('========== arrays - uzduotys =============');
// console.log('================ pvz =====================');
// // let skaiciai = [7, 8, 4, 9, 6]

// // for (let i = 0; i < skaiciai.length; i++){
// //     console.log(` ${i + 1} elemento reiksme yra: ${skaiciai[i]}`);
// // }


// // let j = 0;

// // while (j < skaiciai.length) {
// //     console.log(` ${j + 1} elemento reiksme yra: ${skaiciai[j]}`);
// //     j++;
// // }

// // // virsuje for ir while isveda vienodas reiksmes

// // /*-------------------*/

// // let randomSkaiciai = []; // nepibreztas masyvas
// // for(let i = 0; i < 10; i++){ // para6om kiek norim atvaizduoti elementu

// // randomSkaiciai.push(
// //     Math.floor(Math.random() * 10) +1
// // );
// //     console.log(randomSkaiciai)

// // }

// // randomSkaiciai = [] // reikia is naujo priskirti reiksme
// // let index = 0;
// // while(index < 10) {
// //     randomSkaiciai.push(
// //         Math.floor(Math.random() * 10) + 1);
// //         index++;
// // }
// // console.log(randomSkaiciai) // skaiciai nesutampa tarp while ir for skiriasi nes generuoja random skaicius siuose loops

// /*------------------------*/

// // let masyvas = [7, 9, 5, 4, 2, 3];
// // for (let i = 0; i < masyvas.length; i++) {
// //     console.log('index', i)
// //     console.log('reiksme', masyvas[i])
// // } // isveda indeksa ir jo reiksme

// /*-------------*/
// // masyvai susidaro is elementu

// // let medziai = ['obelis', 'berzas']

// // for (let i = 0; i < medziai.length; i++) {
// //     console.log(medziai[i])
// // }


// // for (let i = medziai.length -1; i >= 0; i--) {
// // console.log(medziai[i])
// // } // atsalymas atvirkstine tvarka, nes pirmoj operacijoj 3, 2, 1, 0,ir kai atimam is medziai length -1, tai pirma yra 4-1 gaunasi trys ir t.t.

// /*----------*/

// // 8 pvz skaidrese lyginiai nelyginiai skaiciu isvedimai

// /*-*/

// // pvz 11 geras pvz kaip kaiciuojam lyginiu suma ir kiekius + vidurkis

// console.log('============ 1 uzduotis =================='); // Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.


// let studijuProgramos = ['menai', 'matematika', 'literatura', 'it', 'sportas']

// for (i = 0; i < studijuProgramos.length; i++) {
//     console.log(studijuProgramos[i]);
// }

// // lyginiai while, nelyginiai for ciklas, pasidaryti abiem budais
// console.log('============== 2 uzduotis ================'); // Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.


// let saliuSarasas = ['LT', 'LV', 'EE', 'FI', 'SE'];
// k = 0;

// while (k < saliuSarasas.length) { // isvesti i ekrana tol kol nebelieka indexu, k yra indexas
//     console.log(`salis: ${saliuSarasas[k]}`); // k dedame, kad zinotu jog imti is masyvo palei indexa
//        k++;
//      }

// console.log('============== 3 uzduotis ================'); // Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).

// let uzbaigtiProjektai = ['knygos', 'ploksteles', 'piesiniai'];

// for (i = 0; i < uzbaigtiProjektai.length; i++ ) {
//     console.log(` ${i + 1} ivykdytas projektas: ${uzbaigtiProjektai[i]}`);
// }


// console.log('============== 4 uzduotis ================'); //Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.

// let numeriai = [3, 4, 84, 99, 103, 654, 1200, 58955];
// let d = 0;

// while (d < numeriai.length) {   
//     if (numeriai[d] > 5){
//         console.log('daugiau uz 5' + numeriai[d])
//     }
//     d++
//     }

// console.log('============== 5 uzduotis ================');
// //prt sc
// console.log('============== 6 uzduotis ================');
// //prt sc
// console.log('============== 7 uzduotis ================');
// // prt sc
// console.log('============== 8 uzduotis ================'); //Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo kvadratą.

// let numberArray = [25, 54, 23, 68, 99, 100, 155, 145, 124, 548, 514]; 

// for (let i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] % 2 === 0){
//         console.log(`${numberArray[i]} 'kvadratas' (${numberArray[i] * numberArray[i]})`)
//     }
// }
// console.log('============== 9 uzduotis ================'); //Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.


// let studentuPazymiai = [3, 6, 9];

// for (i = 0; i < studentuPazymiai.length; i++) {
   
//     if (studentuPazymiai[i] > 5){
//         console.log(`'teigiamas',  ${studentuPazymiai[i]}`)
//     } else{
//         let truksta = 5 - studentuPazymiai[i];
//         console.log(`neigiamas: ${studentuPazymiai[i]}, nes truko ${truksta} balu`)
//     }
// }


// console.log('============== 10 uzduotis ================'); //Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių, kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus atsakymus.


// let skaiciuMasyvas = [9, 13, 14, 18, 25, 3];
// suma =  0;
// vidurkis = 0;

// for (i = 0; i < skaiciuMasyvas.length; i++) {
//     if (skaiciuMasyvas % 3 === 0){
//         console.log(`dalinasi is triju, ${skaiciuMasyvas[i]}`);
//         suma += skaiciuMasyvas[i];
//     }
//     console.log(`${skaiciuMasyvas[i]}`)
// }

  

// console.log('==========================================');