var num=prompt("enter the number");

num=parseInt(num);

if(isNaN(num)) {
             alert("please enter valid number");

            }
           else if(num%2==0 ||num%3== 0)
                  {
                     console.log(num  + " is not a prime number ");
                   }
              else{
                    console.log(num  + " is a prime number ");
                     }