// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log('pries')
// setTimeout(() => {
//     console.log('timeout');
// }, 5000)

// console.log('po');
// /*****************/
// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3);
// }, 5000)

// console.log(4);
// console.log(5);

// /******************/
// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3);
// }, 0);
// console.log(4);
// console.log(5);

/*****************/

// for(let i = 1; i < 10; i++) {
//     setTimeout( () => {
//         console.log(i)
//     }, 1000);    
// }

/*************/

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json()
// .then(data => console.log(data)));

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
// console.log(response);
//         return response.json()})
//         .then(data => console.log(data));

/*****************************/
// console.log('============ 1 uzduotis ==================')
// function executeAfter2s(callback) {
//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// executeAfter2s(() => {
//     console.log("Ši žinutė atspausdinama po 2 sekundžių.");
// });

// function callHelloLater(callback) {
//     setTimeout(callback, 2000);
// }

// function sayHello() {
//     console.log('hello');
// }

// callHelloLater(sayHello);


// console.log('============ 2 uzduotis ==================')
// //Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su duomenimis.


// function fetchData(url) {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Klaida: ${response.status} - ${response.statusText}`);
//             }
//             return response.json();
//         })
//         .then(data => data)
//         .catch(error => { throw error; });
// }


// /***/
// fetch('https://api.tvmaze.com/people')
//     .then(response => response.json())
//     .then(data => {
//         console.log('Fetched data:', data);
//     })
//     .catch(error => console.log('Error:', error));

// const people = async () => {
//     try {
//         const response = await fetch('https://api.tvmaze.com/people');

//         if (!response.ok) {
//             throw new Error(`nepavyko: ${response.status} - ${response.statusText}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log('Error:', error);
//         return null;
//     }
// };

// people().then(data => {
//     if (data) {
//         console.log('Async function fetched data:', data);
//     } else {
//         console.log('No data returned due to an error.');
//     }
// });




// console.log('============ 3 uzduotis ==================')
// //Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback funkciją(2).Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį callback funkcijai(2).Callback funkcijos esmė - patikrinti ar gautas skaičius yra lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę. Funkcija turėtų būti iškviečiama taip(pavadinimai gali būti kitokie): pirmojiFunkcija(masyvas, callbackFunkcija)

// function pirmojiFunkcija(masyvas, callbackFunkcija) {
//     for (let skaicius of masyvas) {
//         callbackFunkcija(skaicius);
//     }
// }

// function callbackFunkcija(skaicius) {
//     if (skaicius % 2 === 0) {
//         console.log(`${skaicius} yra lyginis`);
//     } else {
//         console.log(`${skaicius} yra nelyginis`);
//     }
// }

// pirmojiFunkcija([1, 2, 3, 4, 5, 6, 7], callbackFunkcija);

// console.log('============ 4 uzduotis ==================')
// //4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo reikšmėmis(žodžiais)) ir callback funkciją.Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną stringą esantį masyve callback funckijai.Callback funkcija turi grąžinti atsiųsto "string" ilgį. - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)     - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo nariui iškviest funkciją koksIlgis(string)

// function koksIlgis(zodis) {
//     return zodis.length;
// }

// function patikrinkZodzioIlgi(masyvas, callbackFunkcija) {
//     masyvas.forEach((zodis) => {
//         const ilgis = callbackFunkcija(zodis);
//         console.log(`Žodis "${zodis}" yra ${ilgis} simbolių ilgio.`);
//     });
// }

// const zodziai = ["labas", "rytas", "Lietuva"];
// patikrinkZodzioIlgi(zodziai, koksIlgis);

// console.log('============ 5 uzduotis ==================')
// //5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir callback funkciją.Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten esantį objektą(tarkim tai automobilis, turintis šias properties: rida, markė, modelis, gamybos metai ir kaina(bet galite susikurti ir savo nuožiūra)) callback funkcijai.Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik  atrinktos objekto properties, tarkim tik markė ir modelis)

// function atrinktiMarkeModeli(automobilis) {
//     return {
//         marke: automobilis.marke,
//         modelis: automobilis.modelis
//     };
// }

// function atrinktiSavokarMasyva(automobiliai, callback) {
//     const naujasMasyvas = [];
//     for (let auto of automobiliai) {
//         const naujasObj = callback(auto);
//         naujasMasyvas.push(naujasObj);
//     }
//     return naujasMasyvas;
// }

// const automobiliai = [
//     { rida: 12000, marke: "Toyota", modelis: "Corolla", metai: 2019, kaina: 14000 },
//     { rida: 22000, marke: "BMW", modelis: "X3", metai: 2018, kaina: 20000 }
// ];

// const rezultatas = atrinktiSavokarMasyva(automobiliai, atrinktiMarkeModeli);
// console.log(rezultatas);

// console.log('============ 6 uzduotis ==================')
// //6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą, kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą.Iškvieskite tą funkciją naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.

// function checkUserLogin(isUserLogedIn) {
//     return new Promise((resolve, reject) => {
//         if (isUserLogedIn) {
//             resolve("Naudotojas prisijungęs");
//         } else {
//             reject("Naudotojas neprisijungęs");
//         }
//     });
// }

// checkUserLogin(true)
//     .then(rezultatas => console.log(rezultatas))
//     .catch(klaida => console.log(klaida));

// checkUserLogin(false)
//     .then(rezultatas => console.log(rezultatas))
//     .catch(klaida => console.log(klaida));

// console.log('============ 7 uzduotis ==================')
//7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu atveju iškvieskite klaidą(throw). Toliau tikrinkite ar amžius yra daugiau nei 18, jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu atveju iškvieskite klaidą(throw) ir parašykite, kad "jūsų amžius turi būti daugiau nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

async function canTakeDrivingExam(age) {
    if (typeof age === "undefined" || typeof age !== "number") {
        throw "Age parametras nėra teisingas skaičius";
    }
    if (age > 18) {
        return "vartotojas gali laikyti vairuotojo egzaminą";
    } else {
        throw "jūsų amžius turi būti daugiau nei 18";
    }
}

canTakeDrivingExam(20)
    .then(rezultatas => console.log(rezultatas))
    .catch(klaida => console.log(klaida));

canTakeDrivingExam(15)
    .then(rezultatas => console.log(rezultatas))
    .catch(klaida => console.log(klaida));

canTakeDrivingExam("dvylika")
    .then(rezultatas => console.log(rezultatas))
    .catch(klaida => console.log(klaida));
