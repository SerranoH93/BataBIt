const left = document.getElementById('arrowLeft');
const right = document.getElementById('arrowRight');
const tableCurrency = document.getElementById('tableCurrency');
const tableCommissions = document.getElementById('tableCommissions');
const showDate = document.getElementById('changeColor');


left.addEventListener("click", showCurrency);
right.addEventListener("click", showCommissions);

function showCommissions(){
    tableCurrency.style.display = "none";
    tableCommissions.style.display = "block";
    showDate.style.backgroundColor = "#E7F5FF"
}
function showCurrency(){
    tableCurrency.style.display = "block";
    tableCommissions.style.display = "none";
    

}