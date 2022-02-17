// function for get input from user 
function getInputValue(inputId) {
    const getInput = document.getElementById(inputId);
    const getInputText = getInput.value;
    const getInputValue = parseFloat(getInputText);
    getInput.value = '';
    return getInputValue;
}

function getIncomeValue() {
    const getIncome = document.getElementById('income-input');
    const getIncomeText = getIncome.value;
    const getIncomeValue = parseFloat(getIncomeText);
    // getInput.value = '';
    return getIncomeValue;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeAmount = getIncomeValue();
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
})

document.getElementById('save-button').addEventListener('click', function () {
    //get income and saving 
    const savingPersentage = getInputValue('save-input');
    const incomeAmount = getIncomeValue();

    //get previous savings amount 
    const savingAmountText = document.getElementById('saving-amount');
    const previousSavingsText = savingAmountText.innerText;
    const previousSavingsAmount = parseFloat(previousSavingsText);

    //calculate saving amount with previous
    const newSavingAmount = (savingPersentage * incomeAmount) / 100;
    const totalSavingsAmount = newSavingAmount + previousSavingsAmount;
    savingAmountText.innerText = totalSavingsAmount;
})
