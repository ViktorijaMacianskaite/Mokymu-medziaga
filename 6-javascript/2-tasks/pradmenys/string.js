// console.log('==========================================');
// console.log('========== string - uzduotys =============');
// console.log('================ pvz =====================');

// let eilute = 'mano sakinys msg';
// //console.log(eilute[0]);

// // for(let i = 0; i< eilute.length; i++) {
// //     console.log(eilute[i]);
// // }

// /*************/
// let eilute2 = 'mano sakinys msg';
// console.log(eilute2.startsWith('mano'));
// console.log(eilute2.endsWith('mano'));

// /**************/

// let eilute3 = 'mano sakinys msg';
// console.log(eilute3.includes('mano'));
// console.log(eilute3.indexOf('maano'));
// console.log(eilute3.indexOf('mano3'));

// /*******************/

// let eilute4 = '      mano sakinys msg    ';
// eilute.replace(
//     'mano',
//     'my'
// )

// console.log(eilute4) // isveda vistiek mano, nes retun grazina nauju pavidalu jei norim kad pakeistu reikia rasyti eilute = eilute.return

// /*****************/

// console.log(eilute3.toLocaleUpperCase('maano'));
// console.log(eilute3.toLowerCase());

// console.log(eilute3) // jei norim irgi reikia rasyti eilute = to upper ar to lower

// /***********/
// console.log(eilute4)
// console.log(eilute4.trim()) // neikina tarous is prieko ir is galo trim start is priekio trim end tikis galo.
// console.log(eilute4)

// console.log('============ 1 uzduotis =================='); //Apversti string tipo kintamojo reikšmę.pvz: labas -> sabal.for ir metodu. 

// //for:
// function apverstiString(ciklas) {
//     let apverstas = '';
//     for (let i = ciklas.length - 1; i >= 0; i--) {
//         apverstas += ciklas[i];
//     }
//     return apverstas;
// }

// let zodisapversti = "labas";
// console.log(apverstiString(zodisapversti)); 

// //metodas:
// let zodis = "labas";
// // let apverstas = zodis.split('').reverse().join('');
// // console.log(apverstas); 


// console.log('============== 2 uzduotis ================'); // Funkcija, kuri tikrins ar tekste yra tam tikras sakinys. naudojant tik for true / false pvz : Funkcija, kuri tikrins ar tekste yra tam tikras sakinys. yra -> true, nera -> false

// function patikrintiZodi(sakinys, ieskomasZodis) {
//     for (let i = 0; i < sakinys.length; i++) {
//         if (sakinys.substring(i, i + ieskomasZodis.length) === ieskomasZodis) {
//             return true;
//         }
//     }
//     return false;
// }

// let sakinys = "Sakinys tekste.";

// let ieskomasZodis = "tekste";
// console.log(patikrintiZodi(sakinys, ieskomasZodis)); 

// ieskomasZodis = "labas";
// console.log(patikrintiZodi(sakinys, ieskomasZodis)); 


// console.log('============== 3 uzduotis ================');

// console.log('==========================================');