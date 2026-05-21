let currentTip = 0;

function calculate() {
    const bill = parseFloat(document.getElementById('bill').value);
    const people = parseInt(document.getElementById('people').value);
    
    document.getElementById('bill-error').innerText = (bill <= 0) ? "Please enter a valid bill" : "";
    document.getElementById('people-error').innerText = (people < 1) ? "Must be at least 1" : "";

    if (bill > 0 && people >= 1) {
        let tipTotal = (bill * currentTip) / 100;
        let grandTotal = bill + tipTotal;
        let share = grandTotal / people;

        document.getElementById('tip-amount').innerText = tipTotal.toFixed(2);
        document.getElementById('total-amount').innerText = grandTotal.toFixed(2);
        document.getElementById('per-person').innerText = share.toFixed(2);
    }
}

function setTip(val) { currentTip = val; calculate(); }
function setCustomTip(val) { currentTip = parseFloat(val) || 0; calculate(); }
function reset() { location.reload(); }

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', calculate);
});
