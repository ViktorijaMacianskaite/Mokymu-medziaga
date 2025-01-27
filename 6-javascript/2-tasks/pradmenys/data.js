// console.log('==========================================');
// console.log('========== data - uzduotys =============');
// console.log('================ pvz =====================');
// // let now = new Date();
// // let date1 = new Date ('May 11')

// // console.log(now);
// // console.log(date1)
// // console.log(now.setFullYear(2022));
// // console.log(now.toDateString());
// // console.log(now.toTimeString());
// // console.log(now.toISOString());
// // console.log(now.toLocaleDateString('lt'));
// // console.log(now.toLocaleTimeString('lt'));
// // console.log(now.get());

// console.log('============ 1 uzduotis =================='); // isvesti datas now ir now - n dienu.isvesti lt formatu pvz: n = 5, 2025-01 - 23 - 2025-01 - 18 

// let now = new Date();
// console.log(now.toLocaleDateString('lt'));

// function fiveDaysBefore() {
//     let fiveDaysAgo = new Date(now);
//     fiveDaysAgo.setDate(now.getDate() - 5);

//     console.log(fiveDaysAgo)
// }

// fiveDaysBefore()

// console.log('============== 2 uzduotis ================'); //palyginti dvi datas ir pasakyti kuri yra veliau uz kita. date 1 veliau uz date2 arba date2 veliau uz date1

// let date1 = new Date('2025-01-23');
// let date2 = new Date('2025-01-23');

// if (date1 > date2) {
//     console.log("date1 veliau date2");
// } else if (date1 < date2) {
//     console.log("date2 veliau date1");
// } else {
//     console.log("date1 ir date2 yra lygios"); 
// }

// console.log('============== 2 uzduotis ================'); //datu skirtuma palei dienas ir valandas metus

// let dateA = new Date('2025-01-23');
// let dateB = new Date('2025-01-18');


// let differenceInMilliseconds = dateA - dateB;

// let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

// console.log(differenceInDays);  


// console.log('==========================================');