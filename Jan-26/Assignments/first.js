var num1=prompt("please enter 1st number");
var num2=prompt("please enter 2nd number");
var num3=prompt("please enter 3rd number");

num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);

if(num1 < num2 && num1 < num3){
    alert(num 1 is minimum)
}
    else if(num2 < num1  &&  num2 < num3){
       alert(num 2 is minimum);

}
     else{
         alert(num 3 is minimum);
}
