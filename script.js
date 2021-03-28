function calculateTip() {
    var money = document.getElementById("amount").value;
    var option = document.getElementById("options").value;
    var number = document.getElementById("people").value;

    var tip = (money * option) / number;

    document.getElementById("display").innerHTML = "Tip Amount is: $"+ tip + " each";
    
}
