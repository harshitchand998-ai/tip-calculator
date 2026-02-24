function calculateTip() {

    let bill = document.getElementById("bill").value;
    let tipPercent = document.getElementById("tip").value;


    let tipAmount = bill * ( tipPercent / 100);
    let total = bill + tipAmount;


    document.getElementById("totalAmount").innerText = total;
}