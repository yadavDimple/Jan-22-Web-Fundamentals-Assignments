function swap() {
    var a = parseInt(prompt("Enter the value of A Variable in number"));
    var b = parseInt(prompt("Enter the value of B Variable in number"));
    document.write("Your values before swap: " + "a is: " + a + " and b is: " + b + "<br>");
    a = a + b;
    b = a - b;
    a = a - b;
    document.write("Your values after swap: " + "a is: " + a + " and b is: " + b + "<br>");
}