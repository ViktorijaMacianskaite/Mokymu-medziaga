// console.log('==========================================');
// console.log('========== arrays 4 - uzduotys =============');
// console.log('================ pvz =====================');

// console.log('============ 1 uzduotis =================='); //Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.

// let numbers = [3, 7, 2, 9, 6, 4];

// let numberEven = numbers.find(num => num % 2 === 0);

// console.log(numberEven);


// console.log('============== 2 uzduotis ================'); //Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.


// let nr = [-3, 0, 5, -8, 2, 7];

// let firstPositive = nr.find(num => num > 0);

// console.log(firstPositive);


// console.log('============== 3 uzduotis ================'); //Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4], tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7, 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.

// let numbers1 = [8, -2, 3, 4];
// let numbers2 = [7, 5, 3];

// let index1 = numbers1.findIndex(num => num < 0);
// let index2 = numbers2.findIndex(num => num < 0);

// console.log(index1); 
// console.log(index2);

// console.log('============== 4 uzduotis ================'); // Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.


// let numbersFor = [8, 12, 5, 3, 15, 9];

// let indexFor = numbersFor.findIndex(num => num >= 10);

// console.log(indexFor);

// console.log('============== 5 uzduotis ================'); // Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7, 18, 4], atsakymas bus 12.

// let numbersFife = [5, 9, 12, 7, 18, 4];
// let result = undefined;


// numbersFife.forEach(numFive => {
//     if (numFive > 10 && numFive % 3 === 0 && result === undefined) {
//         result = numFive; 
//     }
// });

// console.log(result);

// console.log('============== 6 uzduotis ================'); // Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas yra -6.


// let numbersSix = [5, 8, -3, -6, 4, 7];

// let resultSix = numbersSix.filter(numSix => numSix < 0 && numSix % 2 === 0)[0];

// console.log(resultSix);

// console.log('============== 7 uzduotis ================'); //Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o jeigu masyvas [8, 9, -3, 2], tai atsakymas false.

// let numbersSeven = [7, 5, 9, 8];

// let allPositiveSeven = numbersSeven.every(num => num > 0);

// console.log(allPositiveSeven);

// console.log('============== 8 uzduotis ================'); //Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu masyvas [7, 3, 6, 8, 10], tai atsakymas false

// let numbersEight = [2, 4, 8, 7]; 

// let allEvenEight = numbersEight.every(num => num % 2 === 0);

// console.log(allEvenEight); 


// console.log('============== 9 uzduotis ================'); // Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.

// let numbersNine = [20, 4, 7, 9]; 

// let LessThanFive = numbersNine.some(num => num < 5);

// console.log(LessThanFive); 

// console.log('============== 10 uzduotis ================'); // Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu masyvas yra [-8, -6, -4], tai atsakymas yra false.

// let numbersTen = [-7, -2, -3, -6];

// let positiveNumbers = numbersTen.filter(num => num > 0);

// let hasPositiveNumber = positiveNumbers.length > 0;

// console.log(hasPositiveNumber); 

// console.log('============== 11 uzduotis ================'); // Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz, masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.

// let numbersEleven = [3, 7, 2, 9, 6, 4];

// let allPositive = numbersEleven.every(num => num > 0);

// let hasEvenNumber = numbersEleven.some(num => num % 2 === 0);

// let resultEleven = allPositive && hasEvenNumber;

// console.log(resultEleven); 

// console.log('============== 12 uzduotis ================'); //

// let numbersTwelve = [4, -3, -2, 8, 9, 5];

// let positiveNumbersTwelve = numbersTwelve.filter(num => num > 0);

// console.log(positiveNumbersTwelve); 

// console.log('============== 13 uzduotis ================'); // Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai (skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz, jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2].

// let ratings = [5, 1, 4, 5, 1, 3, 4, 5, 2];

// let lowRatings = ratings.filter(rating => rating === 1 || rating === 2);

// console.log(lowRatings); 

// console.log('============== 14 uzduotis ================'); // Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių. Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8].

// let numbersFourteen = [5, -3, 2, 7, 8, -4, 1];

// let positiveEvenNumbersFourteen = numbersFourteen.filter(num => num > 0 && num % 2 === 0);

// console.log(positiveEvenNumbersFourteen); 

// console.log('============== 15 uzduotis ================'); // Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2, 6, 4], o padvigubinus galutinis variantas bus [4, 12, 8].

// let numbersFifteen = [3, 7, 2, 9, 6, 4];

// let doubledEvenNumbers = numbersFifteen
//     .filter(num => num % 2 === 0)
//     .map(num => num * 2);

// console.log(doubledEvenNumbers); 

// console.log('============== 16 uzduotis ================'); // Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9], išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3.

// let studentGrades = [7, 8, 10, 6, 5, 9];

// let goodGrades = studentGrades.filter(grade => grade >= 8);

// console.log(goodGrades);
// console.log(goodGrades.length);

// console.log('============== 17 uzduotis ================'); // įdėti į masyvą n skaičių fibanačio sekos - pvz jei n yra lygus 5, tuomet reikia įdėti į masyvą penkis skaičius fibanačio sekos. fibanačio sekos pvz: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

// function generateFibonacci(n) {
//     let fibonacciSequence = [0, 1]; 

//     for (let i = 2; i < n; i++) {
//         let nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
//         fibonacciSequence.push(nextNumber);
//     }

//     return fibonacciSequence.slice(0, n); 
// }

// let n = 5; 
// let fibonacciNumbers = generateFibonacci(n);

// console.log(fibonacciNumbers); 

// /****************/
// let fib = [];
// let z = 5;

// for(let i = 0; i < n; i++){
//     if(i > 1){
//         fib.push(
//                 fib[i - 1] + fib[i - 2]
//          ) 
//         } else{
//             fib[i] = i;
//         }
//     }

//     console.log(fib)

// console.log('==========================================');