// console.log('==========================================');
// console.log('========== arrays 3 - uzduotys =============');
// console.log('================ pvz =====================');

// console.log('============ 1 uzduotis =================='); //Susikurkite masyvą, kuriame būtų pateikti mėgstamiausi valgiai. Pamėginkite masyvą papildyti informacija įvairiais būdais (pridėti naują valgį priekyje, gale, per vidurį, pasirinktoje vietoje). Pamėginkite ištrinti kažkuriuos 3 valgius (iš pasirinktų pozicijų, pvz priekio, galo ir vidurio).

// let favoriteFoods = ["Pica", "Sushi", "Burgeris", "Pasta"];

// console.log("Pradinis masyvas:", favoriteFoods);

// favoriteFoods.unshift("Tacos");
// console.log("Po unshift (priekyje):", favoriteFoods);

// favoriteFoods.push("Steak");
// console.log("Po push (gale):", favoriteFoods);

// favoriteFoods.splice(2, 0, "Kebabas");
// console.log("Po splice (viduryje):", favoriteFoods);

// favoriteFoods.shift();
// console.log("Po shift (nuo pradzios):", favoriteFoods);

// favoriteFoods.pop();
// console.log("Po pop (nuo galo):", favoriteFoods);

// favoriteFoods.splice(1, 1);
// console.log("Po splice (is vidurio):", favoriteFoods);

// console.log("Galutinis masyvas:", favoriteFoods);

// console.log('============== 2 uzduotis ================'); //Susikurkite skaičių masyvą. Naudojant includes, patikrinkite ar masyve yra kuris nors pasirinktas skaičius (pvz 8).

// let numbers = [2, 4, 6, 8, 10, 12];

// console.log(numbers)

// let isThreePresent = numbers.includes(3);

// if (isThreePresent) {
//     console.log("Masyve yra skaičius 3.");
// } else {
//     console.log("Masyve nėra skaičiaus 3.");
// }

// console.log('============== 3 uzduotis ================'); //Susikurkite masyvą, kuriame būtų surašyti bet kokie žodžiai. Panaudokite join metodą, kad masyvą paverstumėte į teksto eilutę. Paeksperimentuokite su skirtingais skirtukais jungiant tekstą (pvz vieną kartą panaudokite tarpą, kitą kablelius ir t.t.).


// let words = ["Labas", "kaip", "sekasi", "šiandien"];

// let sentenceWithSpace = words.join(" ");
// console.log("Tarpas:", sentenceWithSpace);

// let sentenceWithComma = words.join(", ");
// console.log("Kableliais:", sentenceWithComma);

// let sentenceWithDash = words.join(" - ");
// console.log("Bruksniukai:", sentenceWithDash);

// let sentenceWithNewLine = words.join("\n");
// console.log("Nauja eilute:\n" + sentenceWithNewLine);

// console.log('============== 4 uzduotis ================'); //Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki mažiausio. Išveskite tris didžiausius pažymius.

// let grades = [8, 5, 10, 7, 6, 9, 4, 3, 2, 1];

// grades.sort((a, b) => b - a);
// console.log("Nuo didziausio iki maziausio:", grades);

// let topThreeGrades = grades.slice(0, 3);
// console.log("Trys didziausi:", topThreeGrades);

// grades.reverse();
// console.log("Nuo maziausio iki didziausio:", grades);

// console.log('============== 5 uzduotis ================'); //Susikurkite du masyvus, pirmąjame būtų saugomi biologijos pamokos studentų vardai, o antrąjame būtų saugojami matematikos pamokos studentų vardai. Apjunkite šiuos masyvų informaciją į vieną masyvą. Bonus: ar jums pavyktų išskirti tik unikalius vardus? (galima ieškoti kaip panaudoti set).

// let biologyStudents = ["Jonas", "Aistė", "Mantas", "Eglė", "Jonas"];
// let mathStudents = ["Aistė", "Tomas", "Mantas", "Ieva", "Tomas"];

// let allStudents = biologyStudents.concat(mathStudents);
// console.log("Visi:", allStudents);

// let uniqueStudents = [...new Set(allStudents)];
// console.log("Nesikarotija:", uniqueStudents);

// console.log('============== 6 uzduotis ================'); //Susikurkite du masyvus. Pirmame masyve bus išvardinta pirmo semestro paskaitų temos, o antrame masyve - antro semestro paskaitų temos. Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia būtų pateikta pirmo semestro informacija ir tada antro.

// let firstSemesterLectures = ["Matematika", "Fizika", "Biologija", "Chemija"];
// let secondSemesterLectures = ["Informatika", "Istorija", "Geografija", "Anglų kalba"];

// let allLectures = [...firstSemesterLectures, ...secondSemesterLectures];
// console.log("Visos:", allLectures);

// console.log('============== 7 uzduotis ================'); //Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. Padarykite šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. Išveskite abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo masyvo, turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir sutvarkyti.

// let colors = ["Raudona", "Žalia", "Mėlyna", "Geltona", "Balta"];

// let colorsCopy = [...colors];
// colors.length = 0;

// console.log("Tuscias:", colors);
// console.log("Kopija:", colorsCopy);

// console.log('============== 8 uzduotis ================');

// // Susikurkite masyvą, kuriame būtų saugomi miestų pavadinimai. Atlikite paiešką masyve su indexOf surasdami kurioje pozicijoje yra pasirinktas miestas.

// let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"];

// let cityToFind = "Klaipėda";

// let cityIndex = cities.indexOf(cityToFind);

// if (cityIndex !== -1) {
//     console.log(`${cityToFind} yra ${cityIndex}`);
// } else {
//     console.log(`${cityToFind} nera`);
// }

// console.log('============== 9 uzduotis ================'); // Susikurkite bet kokį masyvą. Parašykite programą kuri išsiaiškintų ar masyve yra bent vienas dublikatas.

// let arrayNumbers = [1, 2, 3, 4, 2];
// let hasDuplicates = false;

// for (let i = 0; i < arrayNumbers.length; i++) {
//     for (let j = i + 1; j < arrayNumbers.length; j++) {
//         if (arrayNumbers[i] === arrayNumbers[j]) {
//             hasDuplicates = true;
//             break;
//         }
//     }
// }
// console.log(hasDuplicates);

// console.log('============== 10 uzduotis ================'); //Parašykite programą, kuri galėtų masyvą išskaidyti į pasirinkto dydžio gabalėlius (chunk size). Pvz turint masyvą [1, 2, 3, 4, 5, 6] ir pasirinkus chunk size 2, turėtų gautis toks masyvas - [[1, 2], [3, 4], [5, 6]].


// let arrayNO = [1, 2, 3, 4, 5, 6, 7];
// let chunkSize = 2;
// let chunks = [];

// for (let i = 0; i < arrayNO.length; i += chunkSize) {
//     let chunk = []; 
//     for (let j = i; j < i + chunkSize && j < arrayNO.length; j++) {
//         chunk.push(arrayNO[j]); 
//     chunks.push(chunk); 
//     }
// }
// console.log(chunks); 

// console.log('============== 11 uzduotis ================'); //Susikurkite du skaičių masyvus. Susikurkite trečią, tačiau tuščią masyvą. Parašykite programą kuri sudėtų pirmų dviejų masyvų skaičius į trečiąjį, tačiau nekartojant jau trečiame egzistuojančių reikšmių (sudėtų tik unikalius skaičius). Pvz jeigu turime masyvus [1, 2, 3, 4] ir [2, 3, 5, 6], tai trečiasis turėtų gautis [1, 2, 3, 4, 5, 6].


// let array1 = [1, 2, 3, 4];
// let array2 = [2, 3, 5, 6];

// let uniqueArray = [];

// for (let num of array1) {
//     if (!uniqueArray.includes(num)) { 
//         uniqueArray.push(num);
//     }
// }

// for (let num of array2) {
//     if (!uniqueArray.includes(num)) { 
//         uniqueArray.push(num);
//     }
// }

// console.log("Pirmas masyvas:", array1);
// console.log("Antras masyvas:", array2);
// console.log("Unikalus masyvas:", uniqueArray);


// console.log('============== 12 uzduotis ================');

// console.log('============== 13 uzduotis ================');

// console.log('============== 14 uzduotis ================'); 

// console.log('============== 15 uzduotis ================');


// console.log('==========================================');