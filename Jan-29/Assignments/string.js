var str = prompt("Enter the string");

var count = 0;

var i;  

        for ( i = 0; i < str.length; i++)
        {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i'
                    || str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' ||
                      str.charAt(i) == 'E' || str.charAt(i) == 'I' || str.charAt(i) == 'O' || str.charAt(i) == 'U' )
            {
                count++;
            }
        }
        console.log(count);
        console.log(str + " " + "has ", + count + " " + "vowels");
    
