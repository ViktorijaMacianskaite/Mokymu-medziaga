console.log('==========================================');
console.log('========== test - uzduotys =============');

console.log('============ 1 uzduotis =================='); //Sukurkite funkciją, kuri paverstų eurus į dolerius.Sugeneruokite atsitiktinį skaičių(eurų sumą) nuo 1 iki 1000. Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį doleriais.

function konvertuoti(eurai) {
    let kursas = 1.04;
    return eurai * kursas;
}

let randomEur = Math.floor(Math.random() * 1000) +1;

let USD = konvertuoti(randomEur);

console.log(`Suma ${randomEur} EUR`);
console.log(`Suma ${USD} USD`);


console.log('============== 2 uzduotis ================'); //Sukurkite funkciją, kuri paverstų dolerius į eurus. Sugeneruokite atsitiktinį skaičių(dolerių sumą) nuo 1 iki 1000.Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį eurais.

function konvertuotiUSD(doleriai) {
    let kursasUSD = 0.96;
    return doleriai * kursasUSD;
}

let radnomUSD = Math.floor(Math.random() * 1000) +1;

let EUR = konvertuotiUSD(radnomUSD);

console.log(`Suma ${radnomUSD} USD`);
console.log(`Suma ${EUR.toFixed(2)} USD`);

console.log('============== 3 uzduotis ================'); //Parašykite programą, kuri suskaičiuotų žmogaus BMI (body mass index), kai yra žinomas žmogaus ūgis ir svoris.

let svoris = 74, ugis = 166;

function BMIskaiciavima(svoris, ugis) {
    let ugisM = ugis /100;
    let BMI = svoris/ (ugisM **2);
    return BMI
}

let BMI = BMIskaiciavima(svoris, ugis);

console.log(`BMI yra: ${BMI.toFixed(2)}`);

console.log('============== 4 uzduotis ================'); // Parašykite programą, kuri iš duoto žmogaus amžiaus metais pasakytų kiek tai yra sekundėmis, minutėmis, valandomis, dienomis.




console.log('============== 5 uzduotis ================'); // Parašykite programą, kuri konvertuos termometro duomenis iš Farenheito į Celsijų, ir atvirkščiai.Celsijaus (C) = (Fo - 32) / 1800.

function celsijusIfarenheitus(c) {
    return (c * 9)/ 5 +32;
}

let far = 150;
let cel = 18;

let celcijus = celsijusIfarenheitus(far);
let farenheitas = celsijusIfarenheitus(cel);

console.log(`${farenheitas} yra ${celcijus}`);
console.log(`${celcijus} yra ${farenheitas}`);

console.log('============== 6 uzduotis ================'); // Sukurkite kodą, kuris išspausdins į konsolę 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 vienoje eilutėje.Prieš vienetą ir po dešimties neturėtų būti brūkšniuko.

// let numeriai = '';

// for(let i = 1; i <= 10; i++) {
//     numeriai += i;
//     if (i<10) {
//         numeriai += ' - ';
//     }
// }

// console.log(numeriai);

let numeriai = [];

for( let i = 1; i <= 10; i++) {
    numeriai.push(i);
}

console.log(numeriai);

let numeriaiBruksneliai = numeriai.join(' - ');

console.log(numeriaiBruksneliai);

console.log('============== 7 uzduotis ================'); //Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.

// *

// * *

// * * *

// * * * *

// * * * * *

for (let i=1; i <= 5; i++) {
    let eilute = '';
    for (let z= 1; z <= i; z++){
        eilute += '* ';
    }
    console.log(eilute);
}


console.log('============== 8 uzduotis ================'); // Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.

let siandien = new Date();
let metai = siandien.getFullYear();
let kaledos = new Date(metai, 11, 25);

if (siandien > kaledos) {
    kaledos = new Date(metai + 1, 11, 5);
    }

    console.log(kaledos);

let skirtumas = kaledos - siandien;
let ikikaledu = Math.floor(skirtumas / (1000 * 60 * 60 * 24));

console.log(`Iki Kaledu: ${ikikaledu} dienos`);

console.log('============== 9 uzduotis ================'); // Parašykite kodą, kuris apjungia masyvo duomenis į vieną tekstinę eilutę.Turėtumėte gauti tokį rezultatą:
// Tomas, Dainius, Paulius, Jonas
// Tomas + Dainius + Paulius + Jonas

let vardai = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

let pirmasSujungimas = vardai.join(', ');
let antrasSujungimas = vardai.join(' + ');

console.log(pirmasSujungimas);
console.log(antrasSujungimas);

console.log('============== 10 uzduotis ================'); // Parašykite kodą, kuris sugeneruos dvylikos simbolių slaptažodį. laptažodyje privalo būti bent po vieną: didžioji raidė, mažoji raidė, skaičius, specialusis simbolis.Visi slaptažodžio simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.

console.log('==========================================');