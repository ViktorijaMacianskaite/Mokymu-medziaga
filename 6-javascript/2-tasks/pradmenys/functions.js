// console.log('==========================================');
// console.log('========== Funkcijos - uzduotys =============');
// console.log('================ pvz =====================');

// // function manoPirmojiFunkcija(){ // funkcija, pavadinimias (paramettai)
// //     console.log('Mano pirmoji funkcija')
// // }

// // manoPirmojiFunkcija() // iskvieciame funkcija

// // /***********/

// // function eilerastis(){
// //     console.log('labas rytas');
// //     console.log('su peleda');
// //     console.log('opa');
// // }

// // eilerastis(); // iskviesti galime tiek keik norime kartu
// // eilerastis();
// // eilerastis();

// // // for(let i = 0;i < 40; i++){
// // //     eilerastis()
// // // }

// // /*******************/

// // function pasisveikinti(){
// //     console.log('sveiki');
// // }

// // function atsisveikinti() {
// //     console.log('iki');
// // }

// // pasisveikinti();
// // atsisveikinti();

// // /**********************/

// // const sveikinti = () => {
// //     console.log('hi')
// // } // seniau naudotos, su senomis programomims note js, framework

// // /*******************/

// // function isvedimas(){
// //     let skaicius = 6;
// //     console.log(skaicius);
// //     console.log(this) // parodo visa informacija
// // }

// // isvedimas()
// console.log('============ 1 uzduotis =================='); //Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote programavimą. Iškvieskite šią funkciją tris kartus.

// function vm(){
//     console.log('Vardas: Viktorija')
//     console.log('Programavimas padetu pakeisti darbo krypti')
// }

// vm()

// console.log('============== 2 uzduotis ================'); //Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5 kartus.

// function eilerastisEglute(){
//     console.log('Skarute Eglota');
//     console.log('Zalute Egla');
//     console.log('Gaurute meskuota');
//     console.log('Ja silo lanke');
//     console.log('Nauju dienu meta');
//     console.log('Ja moks puosiniai');
//     console.log('****************')
// }

// eilerastisEglute();
// eilerastisEglute();
// eilerastisEglute();
// eilerastisEglute();
// eilerastisEglute();

// console.log('============== 3 uzduotis ================'); //Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite visas tris funkcijas po vieną kartą.

// function suo(){
//     console.log('Merfis');
// }

// function katukas(){
//     console.log('Cruella');
// }

// function katanukas() {
//     console.log('Perla');
// }

// suo();
// katukas();
// katanukas();

// console.log('============== 4 uzduotis ================'); //Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutėje, kitoje kita. Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią trečiąją funkciją už visų funkcijų ribų.

// function sakinys() {
//     console.log('Sveiki atvyke i:');
// }

// function vieta(){
//     console.log('Venesuela');
// }

// function sakinysVieta(){
//     sakinys();
//     vieta();
// }

// sakinysVieta();

// console.log('============== 5 uzduotis ================'); // Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius. Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą kartų.

// function sugeneruotiAtsitiktiniai() {
 
//     let skaicius1 = Math.floor(Math.random() * 10) + 1;
//     let skaicius2 = Math.floor(Math.random() * 10) + 1;

//     let suma = skaicius1 + skaicius2;

//     console.log(`${skaicius1} + ${skaicius2} = ${suma}`);
// }

// sugeneruotiAtsitiktiniai();
// sugeneruotiAtsitiktiniai();
// sugeneruotiAtsitiktiniai();

// console.log('============== 6 uzduotis ================'); // Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma informacija apie policininką (vardas, pavardė, amžius, alga, etatas, specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite į sakinį, ar išveskite sąrašu ar pan.).

// function policininkoInfo() {

//     let vardas = "Jonas";
//     let pavarde = "Jonaitis";
//     let amzius = 35;
//     let alga = 1200;
//     let etatas = "Pilnas";
//     let specializacija = "Keliu policija";

//     console.log("Informacija apie policininka:");
//     console.log(`Vardas: ${vardas}`);
//     console.log(`Pavarde: ${pavarde}`);
//     console.log(`Amzius: ${amzius}`);
//     console.log(`Alga: ${alga} EUR`);
//     console.log(`Etatas: ${etatas}`);
//     console.log(`Specializacija: ${specializacija}`);
// }

// policininkoInfo();

// console.log('============== 7 uzduotis ================'); //Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje, skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.

// function atsitiktiniaiSkaiciai() {
//     let skaiciai = 0; 
//     for (let i = 0; i < 10; i++) {
//         let atsitiktinis = Math.floor(Math.random() * 100) + 1; 
//         skaiciai += atsitiktinis + " "; 
//     }
//     console.log(skaiciai.trim()); 
// }

// for (let i = 0; i < 5; i++) {
//     atsitiktiniaiSkaiciai();
// }

// console.log('============== 8 uzduotis ================'); // Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.

// function randomNumbers() {
//     let atsitiktinis = Math.floor(Math.random() * 100) + 1; 
//     console.log(atsitiktinis); 
// }

// for (let i = 0; i < 10; i++) {
//     randomNumbers();
// }


// console.log('==========================================');