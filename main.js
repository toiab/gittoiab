var myString = "Hello World2"
console.log(myString)

function great(name) {
	return "Hello " + name;
}
console.log (great("Kolia"));

var n = 3;

if (n > 10 ) {
	n = 40;
	console.log (n)
} else {
	n*=2;
	console.log (n)
}

var cikl;
for (cikl = 0; cikl < 100000; cikl++) {
	cikl*=2;
	console.log(cikl);
}
