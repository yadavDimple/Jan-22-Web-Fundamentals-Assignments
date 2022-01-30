var str = prompt("Enter the string");

var count = 0;

var i;  

        for ( i = 0; i < str.length; i++)
        {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i'
                    || str.charAt(i) == 'o' || str.charAt(i) == 'u')
            {
                count++;
            }
        }
        console.log(count);
    