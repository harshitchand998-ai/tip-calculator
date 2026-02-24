function calculateTip() {

    let bill = parseFloat(document.getElementById("bill").value);
    let tipPercent = parseFloat(document.getElementById("tip").value);


    let tipAmount = bill * (tipPercent / 100);
    let total = bill + tipAmount;


    document.getElementById("totalAmount").innerText = total.toFixed(2);
}