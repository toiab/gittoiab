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

i = 10;

var func = function () {
	var i = 5;
	console.log(i);
}

func();

console.log(i);