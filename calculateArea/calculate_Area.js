let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElement('length').value);
    width = parseFloat(document.getElement('width').value);

    let area = length * width;
    document.getElementById('result').innerText = 'The area of the rectangle is: ${area}';

}