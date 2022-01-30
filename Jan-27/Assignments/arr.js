var num = prompt("Enter a  size of number you want to compare");
num = parseInt(num);

var arr = [ ];

var i = 0;

for (i = 0;  i < num;  i++) {
    arr[i] = parseInt(prompt("Enter the number to compare"));
     }
    console.log(arr);

var max = arr[0];

for (i = 0;   i < num;  i++) {
      if (arr[i]  >  max){
          max = arr[i];
       }
  }

alert(max  + " is maximum number");
console.log(max);
