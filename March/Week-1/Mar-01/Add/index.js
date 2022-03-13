function add() {
    var Num1 = document.getElementById("num1");
    var number1 = Num1.value;
    var Num2 = document.getElementById("num2");
    var number2 = Num2.value;
    var result = document.getElementById("res");
    result.innerText = parseInt(number1) + parseInt(number2);
}