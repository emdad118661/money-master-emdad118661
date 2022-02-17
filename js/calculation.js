// function for get input from user 
function getInputValue(inputId) {
    const getInput = document.getElementById(inputId);
    const getInputText = getInput.value;
    const getInputValue = parseFloat(getInputText);
    getInput.value = '';
    return getInputValue;
}

//function for get only income from user. input field will not remain empty after operation
function getIncomeValue() {
    const getIncome = document.getElementById('income-input');
    const getIncomeText = getIncome.value;
    const getIncomeValue = parseFloat(getIncomeText);

    return getIncomeValue;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    //get income and expenses from the user
    const incomeAmount = getIncomeValue();
    const foodExpenses = getInputValue('food-input');
    const rentExpenses = getInputValue('rent-input');
    const clothsExpenses = getInputValue('cloths-input');

    //get previous expenses from inner text
    const expensesInnerText = document.getElementById('total-expenses');
    const previousExpenseText = expensesInnerText.innerText;
    const previousExpenseAmount = parseFloat(previousExpenseText);

    //update total expenses
    const totalExpenses = foodExpenses + rentExpenses + clothsExpenses + previousExpenseAmount;
    expensesInnerText.innerText = totalExpenses;

    //get previous balance from inner text
    const balanceInnerText = document.getElementById('total-balance');
    const previousBalanceText = balanceInnerText.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    //update total balance
    const newBalance = incomeAmount - totalExpenses;
    const totalBalance = previousBalanceAmount + newBalance;
    balanceInnerText.innerText = totalBalance;
})

document.getElementById('save-button').addEventListener('click', function () {
    //get income and savings from user
    const savingPersentage = getInputValue('save-input');
    const incomeAmount = getIncomeValue();

    //get previous savings amount 
    const savingAmountText = document.getElementById('saving-amount');
    const previousSavingsText = savingAmountText.innerText;
    const previousSavingsAmount = parseFloat(previousSavingsText);

    //update saving amount
    const newSavingAmount = (savingPersentage * incomeAmount) / 100;
    const totalSavingsAmount = newSavingAmount + previousSavingsAmount;
    savingAmountText.innerText = totalSavingsAmount;

    //get previous balance from inner text
    const balanceInnerText = document.getElementById('total-balance');
    const previousBalanceText = balanceInnerText.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    //get previous remaing balance from inner text
    const remainingBalanceText = document.getElementById('remaining-balance');
    const previousRemainingBalanceText = remainingBalanceText.innerText;
    const previousRemainingBalanceAmount = parseFloat(previousRemainingBalanceText);

    // update remaing balance 
    const newRemainingBalance = previousBalanceAmount - savingAmountText.innerText;
    const totalRemainingBalance = newRemainingBalance + previousRemainingBalanceAmount

    remainingBalanceText.innerText = totalRemainingBalance;
})
