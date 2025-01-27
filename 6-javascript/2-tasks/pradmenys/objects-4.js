// console.log('==========================================');
// console.log('========== object 2 - uzduotys =============');
// console.log('================ pvz =====================');


// console.log('============ 1 uzduotis =================='); //Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse, gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius, darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).


// let imones = [
//     {
//         pavadinimas: "Tech",
//         ikurimoMetai: 2010,
//         darbuotojai: 150,
//         metinisPelnas: 200000
//     },
//     {
//         pavadinimas: "Energy",
//         ikurimoMetai: 2015,
//         darbuotojai: 80,
//         metinisPelnas: 125000
//     },
//     {
//         pavadinimas: "Future",
//         ikurimoMetai: 2005,
//         darbuotojai: 200,
//         metinisPelnas: 300000
//     }
// ];

// console.log(imones)

// const dabartiniaiMetai = new Date().getFullYear();

// imones.forEach(imone => {
//     const amzius = dabartiniaiMetai - imone.ikurimoMetai;
//     console.log(`${imone.pavadinimas} buvo ikurta ${imone.ikurimoMetai} metais, siuo metu jai yra ${amzius} metu. Joje dirba ${imone.darbuotojai} darbuotoju.`);
// });

// let bendraDarbuotojuSuma = imones.reduce((suma, imone) => suma + imone.darbuotojai, 0);
// let vidutinisAmzius = imones.reduce((suma, imone) => suma + (dabartiniaiMetai - imone.ikurimoMetai), 0) / imones.length;

// console.log(`Bendras darbuotoju kiekis per visas imones: ${bendraDarbuotojuSuma}`);
// console.log(`Vidutinis imoniu amzius: ${vidutinisAmzius.toFixed(0)} metu`);


// console.log('============== 2 uzduotis ================'); //Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.: bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.

// let ligonines = [
//     {
//         pavadinimas: "Vilniaus ligonine",
//         adresas: "Vilnius",
//         darbuotojai: 200,
//         lankytojaiPerMetus: 50000,
//         ikurimoMetai: 1995
//     },
//     {
//         pavadinimas: "Kauno ligonine",
//         adresas: "Kaunas",
//         darbuotojai: 120,
//         lankytojaiPerMetus: 30000,
//         ikurimoMetai: 2010
//     },
//     {
//         pavadinimas: "Klaipedos ligonine",
//         adresas: "Klaipeda",
//         darbuotojai: 150,
//         lankytojaiPerMetus: 40000,
//         ikurimoMetai: 2005
//     }
// ];


// ligonines.forEach(ligonine => {
//     console.log(`${ligonine.pavadinimas} yra adresu: ${ligonine.adresas}`);
// });

// let bendrasLankytojuKiekis = ligonines.reduce((suma, ligonine) => suma + ligonine.lankytojaiPerMetus, 0);
// let bendrasDarbuotojuKiekis = ligonines.reduce((suma, ligonine) => suma + ligonine.darbuotojai, 0);

// console.log(`Bendras lankytoju kiekis: ${bendrasLankytojuKiekis}`);
// console.log(`Bendras darbuotoju kiekis: ${bendrasDarbuotojuKiekis}`);

// console.log('==========================================');