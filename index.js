document.getElementById('calculate-player-expenses').addEventListener('click', function () {

    const perPlayerPriceInput = document.getElementById('per-player-price');
    const perPlayerPriceString = perPlayerPriceInput.value;
    const perPlayerPrice = parseFloat(perPlayerPriceString);

    perPlayerPriceInput.value = '';


    const fivePlayersTotalPrice = perPlayerPrice * 5;

    const setPlayerExpenses = document.getElementById('set-player-expenses');
    setPlayerExpenses.innerText = fivePlayersTotalPrice;


})


// second_calculation_____________________________________________________________________________________________________-