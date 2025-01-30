let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function(){
 //console.log('clicked')
let employeesCount = parseInt(document.getElementById('employe-count').value);
    let emploeeMakesPerDay = parseInt(document.getElementById('employee-makes-per-day').value);
    let orders = parseInt(document.getElementById('orders').value);

    // console.log('employees count', employeesCount);
    // console.log('employees makes per day', emploeeMakesPerDay);
    // console.log('orders', orders)
    let bakeryTotal = employeesCount * emploeeMakesPerDay;
    let ordersaMAde = bakeryTotal >= orders;

    // let logInfo = {
    //     // employeesCount,
    //     // emploeeMakesPerDay,
    //     // orders,
    //     bakeryTotal,
    //     ordersaMAde
    // };

    // console.log(logInfo)

    let resultsInfo = document.getElementById('results');
    resultsInfo.innerHTML = 'naujas';
});