// console.log('==========================================');
// console.log('========== object 1 - uzduotys =============');
// console.log('================ pvz =====================');

// let studentas = {
//     vardas: 'Jonas',
//     amzius: 20,
//     kursas: 'medicina'
// }

// console.log(studentas)

// /******************/

// let studentas1 = {
//     vardas: 'Jonas',
//     amzius: 20,
//     kursas: 'medicina',
//     studijos: {
//         kursas: 'medicina',
//         metai: 4,
//         kartojantis: false,
//         pazymiai: [8, 7, 7, 6, 8]
//     },
//     miestas: 'Vilnius'
// }

// /*********************/

// let studentai = [

//         {vardas: 'Petras',
//         amzius: 22,
//         kursas: 'medicina',
//         studijos: {
//         kursas: 'medicina',
//         metai: 4,
//         kartojantis: false,
//         pazymiai: [8, 7, 7, 6, 8]
//         },
        
//     },
    
//         {vardas: 'Zose',
//         amzius: 22,
//         kursas: 'medicina',
//         studijos: {
//         kursas: 'medicina',
//         metai: 4,
//         kartojantis: false,
//         pazymiai: [8, 7, 7, 6, 8]}
       
//     },
    
// ]

// console.log(studentai)

// /*************/
// let studentas2 = {
//     vardas: 'Jonas',
//     amzius: 20,
//     kursas: 'medicina',
//     studijos: {
//         kursas: 'medicina',
//         metai: 4,
//         kartojantis: false,
//         pazymiai: [8, 7, 7, 6, 8]
//     },
    
// }

// console.log(studentas2.amzius)
// console.log(studentas2.miestas)
// console.log(studentas2.studijos.metai)

// /***********************/


// let studentas4 = {
//     vardas: 'Zose',
//     amzius: 18,
//     kursas: 'filosofija',
//     studijos: {
//         kursas: 'filosofija',
//         metai: 1,
//         kartojantis: false,
//         pazymiai: [8, 3, 7, 6, 8]
//     },
//     miestas: 'Vilnius'
// }

// console.log(studentas4['amzius'])
// console.log(studentas4['studijos']['kursas'])

// /************/

// let studentas5 = {
//     vardas: 'Petras',
//     amzius: 18,
//     kursas: 'filosofija',
//     studijos: {
//         kursas: 'filosofija',
//         metai: 1,
//         kartojantis: false,
//         pazymiai: [8, 3, 7, 6, 8]
//     },
//     miestas: 'Vilnius',
// }

// studentas5.miestas = 'Kaunas',
 
// console.log(studentas5)

// console.log('============ 1 uzduotis =================='); // Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, ūgis, kelintame kurse mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.

// let student = {
//     personalInfo: {
//         vardas: "Jonas",
//         pavarde: "Jonaitis",
//         amzius: 20,
//         ugis: 1.8 // metrais
//     },
//     akademineInfo: {
//         studijuPrograma: "Informatika",
//         atsiskaitytiKreditai: 45,
//         kursas: 2,
//         pazymiai: [9, 8, 7, 10, 6],
//     },
//     mokykla: {
//         pavadinimas: "Vilniaus universitetas"
//     }
// };

// console.log(student);

// console.log("Studento vardas:", student.personalInfo.vardas);
// console.log("Studiju programa:", student.akademineInfo.studijuPrograma);
// console.log("Mokykla:", student.mokykla.pavadinimas);



// console.log('============== 2 uzduotis ================');// Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba panaudoti new Date(Date.now()).getFullYear() funkciją).

// let movie = {
//     title: "Inception",
//     director: "Christopher Nolan",
//     budget: 1600, 
//     earnings: 8360, 
//     genre: "Science Fiction",
//     duration: 148, 
//     releaseYear: 2010,
//     cast: [
//         { firstName: "Leonardo", lastName: "DiCaprio" },
//         { firstName: "Joseph", lastName: "Gordon-Levitt" },
//         { firstName: "Ellen", lastName: "Page" },
//         { firstName: "Tom", lastName: "Hardy" }
//     ]
// };

// console.log("Filmo informacija:", movie);

// let profit = movie.earnings - movie.budget;
// console.log("Filmo pelnas:", profit, "EUR");

// let actorCount = movie.cast.length;
// console.log("Filme dalyvavo aktorių:", actorCount);

// let currentYear = new Date(Date.now()).getFullYear();
// let movieAge = currentYear - movie.releaseYear;
// console.log("Filmui yra metų:", movieAge);


// console.log('============== 3 uzduotis ================');// Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius, žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?


// let knyga1 = {
//     pavadinimas: "Pirma knyga",
//     autorius: "Autorius Vienas",
//     zanras: "Fantastika",
//     kaina: 15, // EUR
//     puslapiai: 350,
//     skyriai: ["Prologas", "Skyrius 1", "Skyrius 2", "Skyrius 3", "Epilogas"],
//     isleistaMetais: 2015,
//     randamaKnygynuose: true
// };

// let knyga2 = {
//     pavadinimas: "Antra knyga",
//     autorius: "Autorius Du",
//     zanras: "Mokslinis fantastika",
//     kaina: 25, 
//     puslapiai: 420,
//     skyriai: ["Ivadas", "Dalis 1", "Dalis 2", "Dalis 3", "Dalis 4", "Pabaiga"],
//     isleistaMetais: 2020,
//     randamaKnygynuose: false
// };


// console.log("Knyga 1:", knyga1);
// console.log("Knyga 2:", knyga2);


// if (knyga1.puslapiai < knyga2.puslapiai) {
//     console.log(`Knyga "${knyga1.pavadinimas}" yra plonesne.`);
// } else if (knyga2.puslapiai < knyga1.puslapiai) {
//     console.log(`Knyga "${knyga2.pavadinimas}" yra plonesne.`);
// } else {
//     console.log("Abu knygos turi tiek pat puslapiu.");
// }


// if (knyga1.skyriai.length > knyga2.skyriai.length) {
//     console.log(`Knygoje "${knyga1.pavadinimas}" yra daugiau skyriu.`);
// } else if (knyga2.skyriai.length > knyga1.skyriai.length) {
//     console.log(`Knygoje "${knyga2.pavadinimas}" yra daugiau skyriu.`);
// } else {
//     console.log("Abiejose knygose yra tiek pat skyriu.");
// }


// let dvigubaKainaKnyga1 = knyga1.kaina * 2;
// if (dvigubaKainaKnyga1 > knyga2.kaina) {
//     console.log(`Jei knygos "${knyga1.pavadinimas}" kaina butu padvigubinta, ji butu brangesne uz "${knyga2.pavadinimas}".`);
// } else {
//     console.log(`Net jei knygos "${knyga1.pavadinimas}" kaina butu padvigubinta, ji vis tiek nebutu brangesne uz "${knyga2.pavadinimas}".`);
// }


// console.log('============== 4 uzduotis ================'); // Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje (pirma prekė kainuoja - …, antra prekė kainuoja - …, ir t.t.). Raskite ir išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės pelningumą ((kaina - savikaina) * kiekis sandėlyje).


// let preke1 = {
//     pavadinimas: "Preke Vienas",
//     kaina: 15,
//     savikaina: 8,
//     kodas: "P001",
//     kiekisSandelyje: 50,
//     dezesMatmenys: { x: 10, y: 20, z: 15 }
// };

// let preke2 = {
//     pavadinimas: "Preke Du",
//     kaina: 25,
//     savikaina: 15,
//     kodas: "P002",
//     kiekisSandelyje: 30,
//     dezesMatmenys: { x: 15, y: 25, z: 10 }
// };

// let preke3 = {
//     pavadinimas: "Preke Trys",
//     kaina: 20,
//     savikaina: 10,
//     kodas: "P003",
//     kiekisSandelyje: 40,
//     dezesMatmenys: { x: 20, y: 15, z: 10 }
// };

// console.log("Preke 1:", preke1);
// console.log("Preke 2:", preke2);
// console.log("Preke 3:", preke3);

// console.log(
//     `Pirma preke kainuoja - ${preke1.kaina}, antra preke kainuoja - ${preke2.kaina}, trecia preke kainuoja - ${preke3.kaina}.`
// );

// let brangiausiaPreke = [preke1, preke2, preke3].reduce((brangiausia, preke) =>
//     preke.kaina > brangiausia.kaina ? preke : brangiausia
// );
// console.log(
//     `Brangiausia preke yra "${brangiausiaPreke.pavadinimas}", jos kaina yra ${brangiausiaPreke.kaina}.`
// );

// console.log(
//     `Prekes "${preke1.pavadinimas}" dezes turis: ${preke1.dezesMatmenys.x * preke1.dezesMatmenys.y * preke1.dezesMatmenys.z
//     }.`
// );
// console.log(
//     `Prekes "${preke2.pavadinimas}" dezes turis: ${preke2.dezesMatmenys.x * preke2.dezesMatmenys.y * preke2.dezesMatmenys.z
//     }.`
// );
// console.log(
//     `Prekes "${preke3.pavadinimas}" dezes turis: ${preke3.dezesMatmenys.x * preke3.dezesMatmenys.y * preke3.dezesMatmenys.z
//     }.`
// );

// console.log(
//     `Prekes "${preke1.pavadinimas}" pelningumas: ${(preke1.kaina - preke1.savikaina) * preke1.kiekisSandelyje
//     }.`
// );
// console.log(
//     `Prekes "${preke2.pavadinimas}" pelningumas: ${(preke2.kaina - preke2.savikaina) * preke2.kiekisSandelyje
//     }.`
// );
// console.log(
//     `Prekes "${preke3.pavadinimas}" pelningumas: ${(preke3.kaina - preke3.savikaina) * preke3.kiekisSandelyje
//     }.`
// );


// console.log('============== 5 uzduotis ================'); //Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys). Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai, spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis įrašykite dabartinius metus arba panaudokite new Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300 kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).

// let automobilis = {};

// automobilis.marke = "Toyota";
// automobilis.modelis = "Corolla";
// automobilis.rida = 1200; 
// automobilis.gamybosMetai = 2015;
// automobilis.spalva = "Pilka";
// automobilis.darbinisTuris = 1.6; 
// automobilis.arDauzta = false;
// automobilis.arParduodama = true;

// console.log("Automobilio informacija:", automobilis);

// let dabartiniaiMetai = new Date(Date.now()).getFullYear();
// let automobilioAmzius = dabartiniaiMetai - automobilis.gamybosMetai;
// console.log(`Automobiliui yra ${automobilioAmzius} metai.`);

// let vidutineRidaPerMetus = automobilis.rida / automobilioAmzius;
// console.log(
//     `Vidutiniskai per metus automobilis nuvaziavo ${vidutineRidaPerMetus.toFixed(
//         2
//     )} km.`
// );


// console.log('============== 6 uzduotis ================'); // Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją. Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai padarykite.

// let knyga = {};

// knyga.pavadinimas = "Haris Poteris ir Paslapciu kambarys";
// knyga.autorius = "J. K. Rowling";
// knyga.puslapiuKiekis = 341;
// knyga.kaina = 15.99; // eurais
// knyga.isleidimoMetai = 1998;
// knyga.arGalimaSkaitytiInternete = true;

// console.log("Knygos informacija:", knyga);

// let siemet = new Date(Date.now()).getFullYear();
// let knygosAmzius = siemet - knyga.isleidimoMetai;
// console.log(`Knygai yra ${knygosAmzius} metai.`);

// let kainaUzPuslapi = knyga.kaina / knyga.puslapiuKiekis;
// console.log(
//     `Vidutiniskai vienas knygos puslapis kainuoja ${kainaUzPuslapi.toFixed(
//         2
//     )} eurus.`
// );

// if (knyga.arGalimaSkaitytiInternete) {
//     console.log("Si knyga galima skaityti internete.");
// } else {
//     console.log("Si knyga negalima skaityti internete.");
// }

// console.log('==========================================');