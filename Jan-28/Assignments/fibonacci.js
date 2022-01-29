var n = prompt("Enter the number to print fabonacci series");
n = parseInt(n);
n1=0;
n2=1;

	 console.log(n1);
	 console.log(n2);

for(var i=1; i<n;  i++){
	console.log(n2);
	var temp = n1+n2;
	n1 = n2;
	n2 = temp;
}