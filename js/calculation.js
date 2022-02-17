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
    const totalExpenses = foodExpenses + rentExpenses + clothsExpenses;
    const totalBalance = incomeAmount - totalExpenses;
    console.log(totalExpenses);
    console.log(totalBalance);
})
