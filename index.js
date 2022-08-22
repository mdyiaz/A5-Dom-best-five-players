document.getElementById('calculate-player-expenses').addEventListener('click', function () {

    const perPlayerPriceInput = document.getElementById('per-player-price');
    const perPlayerPriceString = perPlayerPriceInput.value;
    const perPlayerPrice = parseFloat(perPlayerPriceString);

    perPlayerPriceInput.value = '';


    const fivePlayersTotalPrice = perPlayerPrice * 5;

    const setPlayerExpenses = document.getElementById('set-player-expenses');
    setPlayerExpenses.innerText = fivePlayersTotalPrice;


})


// second_calculation_____________________________________________________________________________________________________

document.getElementById('calculate-total-cost').addEventListener('click', function () {


    const playerExpenses = document.getElementById('set-player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesMoney = parseFloat(playerExpensesString);


    const managerSalary = callingManagerAndCoachIdByFunction('manager-salary');
    const coachSalary = callingManagerAndCoachIdByFunction('coach-salary');



    const totalCost = playerExpensesMoney + managerSalary + coachSalary;




    const setTotalCost = document.getElementById('total-cost');
    setTotalCost.innerText = totalCost;

})