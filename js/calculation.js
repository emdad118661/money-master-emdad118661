// function for get input from user 
function getInputValue(inputId) {
    const getInput = document.getElementById(inputId);
    const getInputText = getInput.value;
    const getInputValue = parseFloat(getInputText);
    getInput.value = '';
    return getInputValue;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeAmount = getInputValue('income-input');
    const foodExpenses = getInputValue('food-input');
    const rentExpenses = getInputValue('rent-input');
    const clothsExpenses = getInputValue('cloths-input');

    //update total expenses
    const expensesInnerText = document.getElementById('total-expenses');
    const previousExpenseText = expensesInnerText.innerText;
    const previousExpenseAmount = parseFloat(previousExpenseText);

    const totalExpenses = foodExpenses + rentExpenses + clothsExpenses + previousExpenseAmount;
    expensesInnerText.innerText = totalExpenses;

    //update total balance
    const balanceInnerText = document.getElementById('total-balance');
    const previousBalanceText = balanceInnerText.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    const newBalance = incomeAmount - totalExpenses;
    const totalBalance = previousBalanceAmount + newBalance;
    balanceInnerText.innerText = totalBalance;

    // const totalBalance = incomeAmount - totalExpenses;
    // console.log(totalExpenses);
    // console.log(totalBalance);
})
