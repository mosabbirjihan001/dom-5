
function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
function getTextValueById(id){
    const mainBalance = document.getElementById(id).innerText
    const mainBalanceNumber = parseFloat(mainBalance);
    return mainBalanceNumber;
}

function showHistoryById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function displayTime(){
    const historyTime = `${hours}:${minutes}:${seconds}`;
    console.log(historyTime);
}