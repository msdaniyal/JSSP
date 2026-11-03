let grocery1 = 0.0;
let grocery2 = 0.0;
let grocery3 = 0.0;

function calculate_Total() {
    grocery1 = parseFloat(document.getElementById('grocery-1').value);
    grocery2 = parseFloat(document.getElementById('grocery-2').value);
    grocery3 = parseFloat(document.getElementById('grocery-3').value);

    let total = grocery1 + grocery2 + grocery3;

    console.log(total);
    document.getElementById('result').innerText = `The total amount is:$ ${total}`;
}
