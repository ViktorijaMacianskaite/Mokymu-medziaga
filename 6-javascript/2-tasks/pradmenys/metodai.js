// console.log('==========================================');
// console.log('========== metodai - uzduotys =============');
// console.log('================ pvz =====================');

// let preke = {
//     pavadinimas: 'piestukas',
//     kaina: 1.5,
//     kiekis: 49,
//     isvestiInfo: () => {
//         console.log(preke.pavadinimas)
//     }
// }

// console.log(preke);
// console.log(preke.isvestiInfo())

// /*******************/
// let preke2 = {
//     pavadinimas:'rankine',
//     kaina: 1.5,
//     kiekis: 49,
//     isvestiInfo2: () => {
//         console.log(this.pavadinimas) // jei keistus preke2
//     }
// }

// /*****************/

// //pvz skaidrese

// console.log('============ 1 uzduotis =================='); //Susikurkite darbuotojo objektą, kuriame turėtumėte šias savybes: vardas, pavardė, dabartinis atlyginimas, etatas. Šiame objekte sukurkite funkciją, kuri per argumentus priimtų procentus ir paskaičiuotų koks būtų darbuotojo atlyginimas, jei jo atlyginimas būtų pakeltas per nurodytą kiekį procentų. Taip pat, susikurkite funkciją, kuri per argumentus priimtų atnaujintą etato skaičių, ji turėtų paskaičiuoti kiek pasikeistų darbuotojo atlyginimas, jei jis pradėtų dirbti nurodytu etatu (tarkim jei dirba pilnu etatu ir atlyginimas 1000 eurų, tai per pusę sumažinus etatą (argumentuose būtų 0.5) jo atlyginimas kristų iki 500). Iškvieskite šias objekto funkcijas ir išsiveskite gautus atsakymus.

// let darbuotojas = {
//     vardas: "Jonas",
//     pavarde: "Jonaitis",
//     dabartinisAtlyginimas: 1000,
//     etatas: 1.0,

//     keltiAtlyginima: function (procentai) {
//         let padidintasAtlyginimas = this.dabartinisAtlyginimas * (1 + procentai / 100);
//         return `Jei atlyginimas butu padidintas ${procentai}%, jis butu ${padidintasAtlyginimas.toFixed(2)} EUR.`;
//     },

//     keistiEtata: function (naujasEtatas) {
//         let pakeistasAtlyginimas = this.dabartinisAtlyginimas * naujasEtatas / this.etatas;
//         return `Jei etatas keiciamas i ${naujasEtatas}, atlyginimas butu ${pakeistasAtlyginimas.toFixed(2)} EUR.`;
//     }
// };

// console.log(darbuotojas.keltiAtlyginima(20)); 
// console.log(darbuotojas.keistiEtata(0.5)); 

// console.log('=============== 2 dalis =================');

// console.log('============ 1 uzduotis =================='); //Praeitame skyriuje sukurtą darbuotojo objektą pasikopijuokite į naują gamyklos (factory) funkciją, kuri galėtų sukurti daugiau tokių objektų. Pritaikykite objektą, kad duomenis prisiskirtų iš funkcijos argumentų. Už funkcijos ribų sukurkite ir sudėkite keletą tokių darbuotojų į masyvą. Tuomet mėginkite prasukti ciklą pro sukurtą darbuotojų masyvą ir išsiveskite darbuotojų duomenis, taip pat, pakvieskite skaičiavimų funkcijas ir pasižiūrėkite gaunamus rezultatus.

// function sukurtiDarbuotoja(vardas, pavarde, atlyginimas, etatas) {
//     return {
//         vardas,
//         pavarde,
//         atlyginimas,
//         etatas,

//         keltiAtlyginima(procentai) {
//             return this.atlyginimas * (1 + procentai / 100);
//         },

//         keistiEtata(naujasEtatas) {
//             return this.atlyginimas * naujasEtatas / this.etatas;
//         }
//     };
// }

// let darbuotojai = [
//     sukurtiDarbuotoja("Jonas", "Jonaitis", 1000, 1.0),
//     sukurtiDarbuotoja("Petras", "Petraitis", 800, 0.75),
//     sukurtiDarbuotoja("Ona", "Onute", 1200, 0.5)
// ];

// darbuotojai.forEach((darbuotojas) => {
//     console.log(`Darbuotojas: ${darbuotojas.vardas} ${darbuotojas.pavarde}`);
//     console.log(`Atlyginimas padidintas 20%: ${darbuotojas.keltiAtlyginima(20).toFixed(2)} EUR`);
//     console.log(`Atlyginimas, jei etatas 0.5: ${darbuotojas.keistiEtata(0.5).toFixed(2)} EUR`);
//     console.log("-----");
// });


// console.log('==========================================');