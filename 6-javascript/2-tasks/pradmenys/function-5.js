// console.log('==========================================');
// console.log('========== function - uzduotys =============');
// console.log('================ pvz =====================');
// function tekstas() {
//     return 'kasnors'
// }

// if(tekstas() === 'labas'){

// }else {
//     console.log('neteisingas')
// }

// let pvz = tekstas();

// console.log(tekstas());

// console.log(pvz);

// /**************/

// function sakinys(vardas){
//     let tekstas = 'laba';

//     return tekstas + ' LT ' + vardas;
// }

// console.log(sakinys('Jonui'));

// /***********/

// function lyginisArNe(skaicius){
//     if (skaicius % 2 === 0) {
//     return 'Lyginis';
//     }

//     return 'Nelyginis';
// }

// console.log('============ 1 uzduotis =================='); // Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite šią funkciją ir išspausdinkite gautus rezultatus.

// function sentence() {
//     return 'Sveiki atvyke i Prienus'
// }

// console.log(sentence())

// console.log('============== 2 uzduotis ================'); // Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių. Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.

// function sugeneruotiAtsitiktini() {
//     return Math.floor(Math.random() * 100) + 1;
// }

// console.log(sugeneruotiAtsitiktini()); 
// console.log(sugeneruotiAtsitiktini()); 
// console.log(sugeneruotiAtsitiktini()); 

// console.log('============== 3 uzduotis ================'); // Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį. Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų, perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.

// function sukurtiSakini(vardas, vidurkis) {
//     return `Studentas ${vardas} turi vidurki ${vidurkis}`;
// }

// console.log(sukurtiSakini("Tomas", 8.7)); 
// console.log(sukurtiSakini("Ieva", 9.3));  

// console.log('============== 4 uzduotis ================'); // Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje iškvieskite šią funkciją, perduodant ciklo kintamąjį.

// function rastiMazasiaDalikli(skaicius) {
//     for (let i = 2; i <= skaicius; i++) {
//         if (skaicius % i === 0) {
//             return i; 
//         }
//     }
// }

// for (let i = 10; i <= 20; i++) {
//     console.log(`${i} maziausias daliklis: ${rastiMazasiaDalikli(i)}`);
// }

// console.log('============== 5 uzduotis ================'); // Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis). Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).


// function arPirminis(skaicius) {
//     if (skaicius <= 1) {
//         return false;
//     }

//     for (let i = 2; i < skaicius; i++) {
//         if (skaicius % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// for (let i = 2; i <= 10; i++) {
//     console.log(`${i} ${arPirminis(i)}`);
// }

// console.log('============== 6 uzduotis ================'); // Susikurkite bent 3 matematines funkcijas, priimančias reikiamus argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas, sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat, susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus kintamuosius) (pagal 7 pavyzdį). Iškvieskite šią pagrindinę funkciją bent kartą.

// function sumaDvieju(skaicius1, skaicius2) {
//     return skaicius1 + skaicius2;
// }

// function sumaTriju(skaicius1, skaicius2, skaicius3) {
//     return skaicius1 + skaicius2 + skaicius3;
// }

// function skirtumas(skaicius1, skaicius2) {
//     return skaicius1 - skaicius2;
// }


// function atliktiSkaiciavimus() {

//     let skaicius1 = Math.floor(Math.random() * 10) + 1;
//     let skaicius2 = Math.floor(Math.random() * 10) + 1;
//     let skaicius3 = Math.floor(Math.random() * 10) + 1;


//     console.log(`${skaicius1} + ${skaicius2} = ${sumaDvieju(skaicius1, skaicius2)}`);
//     console.log(`${skaicius1} + ${skaicius2} + ${skaicius3} = ${sumaTriju(skaicius1, skaicius2, skaicius3)}`);
//     console.log(`${skaicius1} - ${skaicius2} = ${skirtumas(skaicius1, skaicius2)}`);
// }

// atliktiSkaiciavimus();


// console.log('=========================================='); //