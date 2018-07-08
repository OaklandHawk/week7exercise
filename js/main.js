var myH1 = document.getElementById("myH1");
	myH1.innerText = "Dogs are awesome!";
var myNewH1 = document.getElementById("myNewH1");

function getInfo() {
	var userInput = document.getElementById("userInput").value;
	console.log(userInput);
		myNewH1.innerText = userInput;
}



var stringArray = ["Hi", "my", "name", "is", "Taylor"];

for(var i = 0; i < stringArray.length; i++) {
	console.log(stringArray[i]);
} 



var myObj = {
	name: "Taylor",
	age: "24",
	isMale: true
};

console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.isMale);

var myH2 = document.getElementById("myH2");
var myH3 = document.getElementById("myH3");
var myH4 = document.getElementById("myH4");

	myH2.innerText = myObj.name;
	myH3.innerText = myObj.age;
	myH4.innerText = myObj.isMale;



var myArray = [
	{
		player: "Kent Bazemore",
		team: "Hawks",
		number: "24"
	},
	{
		player: "LeBron James",
		team: "Lakers",
		number: "23"
	},
	{
		player: "Kevin Durant",
		team: "Warriors",
		number: "35"
	}
];

for(var i = 0; i < myArray.length; i++) {
	console.log(myArray[i].player);
	console.log(myArray[i].team);
	console.log(myArray[i].number);
}



document.body.style.color = "red";