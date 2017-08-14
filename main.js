console.log("I'm in main JS");

var dataToConvert = document.getElementById("submit").addEventListener("click", convertDatTemp);
var enterToConvert = document.getElementById("submit").addEventListener("keypress", iPressedEnter);
var answerContainer = document.getElementById("theansweris");

function iPressedEnter (keypress) {
	if (13 == keypress.keyCode) {
		convertDatTemp();
	}
}

function convertDatTemp (clickEvent) {

	var fahrenheitChecked = document.getElementById("fahrenheit").checked
	var celsiusChecked = document.getElementById("celsius").checked
	
	//this if else statement runs the temperature converter function based on the box checked in form
	if (fahrenheitChecked) {
		var convertedFValue = makeMeFahrenheit();
		var classColor = textColor(convertedFValue, 'fahrenheit');
		printToDom(convertedFValue, classColor, 'fahrenheit');
	} else if (celsiusChecked) {
		var convertedCValue = makeMeCelsius();
		var classColor = textColor(convertedCValue, 'celsius');
		printToDom(convertedCValue, classColor, 'celsius');
	}

	// //this if else statement runs the function that determines the class of the return text
	// if (fahrenheitChecked) {
	// 	var classColor = textColor(convertedFValue, 'fahrenheit')
	// } else if (celsiusChecked) {
	// 	var classColor = textColor(convertedCValue, 'celsius')
	// }

	// //this if else statment is what will return the printed value to the DOM
	// if (fahrenheitChecked) {  
	// 	printToDom(convertedFValue, classColor, 'fahrenheit');
	// } else if (celsiusChecked) {
	// 	printToDom(convertedCValue, classColor, 'celsius');
	// }
}

function makeMeCelsius(temp) {
	var tempToConvert = convertme.value;
	var convertedTemp = parseInt((tempToConvert - 32) * (5 / 9));
	return convertedTemp;
}

function makeMeFahrenheit(temp) {
	var tempToConvert = convertme.value;
	var convertedTemp = parseInt((tempToConvert * 9) / 5 + 32);
	return convertedTemp;
}

function textColor(temp,type) {
	if ((temp >= 90 && type === 'fahrenheit') || (temp >= 32 && type === 'celsius')) {
		return 'hot-shit';
	} else if ((temp <= 32 && type === 'fahrenheit') || (temp <= 0 && type === 'celsius')) {
		return 'cold-shit';
	} else {
		return 'normal-shit';
	}
}

function printToDom (datgoodtemp, textcolor, typeoftemp) {
	domString = "";
	domString += '<h1 class="' + textcolor + '">Hey idiot, I did the math for you and your converted temp is ' + datgoodtemp + "° " + typeoftemp + '</h1>'
	answerContainer.innerHTML = domString;
}