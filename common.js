function callingManagerAndCoachIdByFunction(salary) {
    const managerAndCoachSalaryFunction = document.getElementById(salary);
    const managerAndCoachSalaryString = managerAndCoachSalaryFunction.value;

    const managerAndCoachSalary = parseFloat(managerAndCoachSalaryString);
    return managerAndCoachSalary;

}