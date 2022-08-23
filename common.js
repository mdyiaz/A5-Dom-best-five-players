


// playerName______________________________________________________________

const playersNameArray = [];
console.log(playersNameArray);


function displayPlayersName(allName) {

    if (playersNameArray.length === 6) {
        alert('error');
        return;

    }

    const playersNameOl = document.getElementById('players-name-ol');
    playersNameOl.innerHTML = '';


    for (let i = 0; i < allName.length; i++) {






        const kheloarName = playersNameArray[i].playersName;
        //console.log(kheloarName);

        const li = document.createElement('li');
        li.innerHTML = `

              ${kheloarName}


        `;

        playersNameOl.appendChild(li);

    }


}

function setPlayersName(name) {
    const playersName = (name.parentNode.parentNode.children[0].innerText);
    name.setAttribute("disabled", "");



    const playersNameObject = {
        playersName: playersName
    }

    playersNameArray.push(playersNameObject);

    displayPlayersName(playersNameArray);




}





// playerName Section End________________________________________________________________________________________














function callingManagerAndCoachIdByFunction(salary) {
    const managerAndCoachSalaryFunction = document.getElementById(salary);
    const managerAndCoachSalaryString = managerAndCoachSalaryFunction.value;

    const managerAndCoachSalary = parseFloat(managerAndCoachSalaryString);

    managerAndCoachSalaryFunction.value = '';

    return managerAndCoachSalary;



}





