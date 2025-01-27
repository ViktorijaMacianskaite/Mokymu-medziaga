// // // let i=0;

// // // while (i < 5) {
// // //     console.log(i)
// // // } begalinis ciklas

// // let i = 0;

// // while (i < 5) {
// //     console.log(i)
// //     i++;
// // }

// // // tas pats:

// // for (let i = 0; i < 5; i++) {
// //     console.log(i)
// // }

// // //-------------------------------------------------------------//

// // let prekiuKiekis = 24;

// // while(prekiuKiekis > 0) {
// // console.log('turimas prekiu kiekis', prekiuKiekis)
// // let kiekNupirko = Math.floor(Math.random() * 5) + 1;
// // console.log('nupirko:', kiekNupirko, '\n');
// // prekiuKiekis -= kiekNupirko;

// // }

// // while (prekiuKiekis > 0) {
// //     console.log('turimas prekiu kiekis', prekiuKiekis)
// //     let kiekNupirko = Math.floor(Math.random() * 5) + 1;
// //     if (kiekNupirko> prekiuKiekis) {
// //         kiekNupirko = prekiuKiekis;
// //     }
// //     console.log('nupirko:', kiekNupirko, '\n');
// //     prekiuKiekis -= kiekNupirko;

// // }


// // skaiciuks = 49

// // while (true) {
// //     let skaiciuks = Math.floor(Math.random() * 100) +1 ;
// //     console.log(skaiciuks)

// //     if (skaiciuks % 7 === 0 && skaiciuks % 2 === 0) {
// //         console.log('dalinasi is 7 ir 2', skaiciuks)
// //     }
// //     break;
// // }

// // let blokoAukstis = 100;
// // let turinioAukstis = 120;

// // console.log('pradiniai duomenys')
// // console.log('bloko aukstis', blokoAukstis)
// // console.log('turinio aukstis', turinioAukstis)

// // while (turinioAukstis > blokoAukstis) {
// //     blokoAukstis += 10;
// // }

// // console.log('atnaujinti duomenys')
// // console.log('bloko aukstis', blokoAukstis)
// // console.log('turinio aukstis', turinioAukstis)

// // let dk = 100
// // let ap = 10

// // while (ap < dk) {
// //     console.log('jau ap ' + ap + '% duomenu');
// //     ap += Math.floor(Math.random() * 10);
// // }

// // console.log('baigta')


// // let suma = 0;
// // skaicius = 0;

// // while (suma < 500) {
// //     skaicius = Math.floor(Math.random() * 100) +1;
// //     suma += skaicius
// //      console.log(skaicius)
// // }

// console.log('==========================================');
// console.log('=========== while  - uzduotys ============');
// console.log('============ 1 uzduotis ==================');

// let i = 1;

// while (i <= 20) {
//     console.log(i)
//     i++;
// }


// console.log('============== 2 uzduotis ================');

// let h = 1;

// while (h <= 50) {
    
//    if ( h % 2 ===0 ) {
//        console.log(h + ' lyginis');
//    } else if (h % 2 !==0) {
//     console.log(h + ' nelyginis')
//    }
//    h++;
    
// }

// console.log('============== 3 uzduotis ================');

// let g = 25;

// while (g <= 50) {
    
//     if (g % 3 === 0) {
//         console.log('dalinasi is 3');
//     }
//     g++;

// }

// console.log('============== 4 uzduotis ================');
// let m = 1;

// while (m <= 50) {
    
//     if (m % 3 === 0 || m % 5 === 0) {
//         console.log('dalinasi is 3 ir 5');
//         break;
//     }
//    m++;
// }

// console.log('============== 5 uzduotis ================');

// let k = 1;
// let suma = 0

// while (k <= 50) {
//     if (k % 2 === 0) {
//       suma += k
//     }
//     k++;
// }

// console.log('lyginiu suma ' + suma )

// console.log('============== 6 uzduotis ================');

// let number = 1;

// while (number < 5) {
//     console.log(number, (number **2));
//     number++;
// }

// console.log('============== 7 uzduotis ================');

// let no = 50;
// x = 0;

// while( x !== no){
//     x = Math.floor(Math.random() *50) + 1;
//     x ++;
//     console.log(x);
// }

// console.log('============== 8 uzduotis ================');

// let nr = 19;
// v = 0;
// susumuota = 0;

// while (v !== nr) {
//     v = Math.floor(Math.random() * 5) + 1;
//     susumuota += v;
//     v++;
//     console.log('suma', susumuota);
//     break
// }

// console.log('============== 9 uzduotis ================');

// let sofa = 3;
// let kede = 9;
// let stalas = 1;

// while (sofa > 0 || kede > 0 || stalas > 0) {
// // ${sofa} tarp teksto isvesti sofa reiksme

// let preke1 = Math.floor(Math.random() * 10);
// let preke2 = Math.floor(Math.random() * 10);
// let preke3 = Math.floor(Math.random() * 10);
// }

// console.log('============== 10 uzduotis ================');

// // pirminis kuris dalinasi is saves ir is vieneto, be liekanos

// console.log('============== 11 uzduotis ================');
// faktorialas 

// console.log('============== 12 uzduotis ================');

// skaiciuz = 2593;
// naujasSkaicius = 0;

// while (skaiciuz > 0) {
//     naujasSkaicius = naujasSkaicius * 10 + skaiciuz % 10; 
//     skaiciuz = Math.floor(skaiciuz / 10);
// }

// console.log(naujasSkaicius)

// console.log('============== 13 uzduotis ================');

// let klientoPinigai = 2.45;
// let kavosKaina = 0.6;
// let graza = 0

// if(klientoPinigai > kavosKaina) {
//     graza = klientoPinigai - kavosKaina;
// }

// console.log('Graza', graza);

// if (graza > 0);{
    // let moneta50 = Math.floor(graza / 0.5);
    // let moneta20 = Math.floor((graza - moneta50 * 0.5) / 0.2);
    // let moneta10 = Math.floor((graza - moneta50 * 0.5 - moneta20 * 0.2) / 0.1);
    // let moneta1 = Math.floor((graza - moneta50 * 0.5 - moneta20 * 0.2 - moneta10 *0.1) / 0.01);

    // console.log('50 centu' ,moneta50);
    // console.log('20 centu', moneta20);
    // console.log('10 centu', moneta10);
    // console.log('1 centu', moneta1);


//     moneta50 = 0;
//     moneta20 = 0;
//     moneta10 = 0;
//     moneta1 = 0;
//     graza *= 100

//     while (graza > 0) {
//         if (graza >= 50) {
//             moneta50++;
//             graza -= 50;
//         } else if ( graza >= 20) {
//             moneta20++;
//             graza -= 20;
//         } else if( graza >= 10) {
//             moneta20++;
//             graza -= 10;
//         } else if ( graza > 0) {
//             moneta1++;
//             graza -= 1;
//         }
// }
//     console.log('50 centu', moneta50);
//     console.log('20 centu', moneta20);
//     console.log('10 centu', moneta10);
//     console.log('1 centu', moneta1);
// }


// console.log('==========================================');