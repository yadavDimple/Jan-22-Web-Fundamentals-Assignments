function fizzbuzz() {
    var n = prompt("enter your number");
    n = parseInt(n);
    while (isNaN(n)) {
        alert("Please enter valid number");
        var n = prompt("Enter your number ");
    }


    for (i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            document.write(" fizzBuzz");


        } else if (i % 3 == 0) {
            document.write(" fizz");



        } else if (i % 5 == 0) {
            document.write(" buzz");

        } else {
            document.write(" " + i);
        }

    }
}