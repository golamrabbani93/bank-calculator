function getInputFieldText(id) {
	const inputFieldText = document.getElementById(id);
	const inputFieldString = inputFieldText.value;
	const input = parseFloat(inputFieldString);
	inputFieldText.value = "";
	return input;
}

function getElementText(id) {
	const elementText = document.getElementById(id);
	const elementTextstring = elementText.innerText;
	const text = parseFloat(elementTextstring);
	return text;
}

function newAmount(id1, id2) {
	const previousAmount = document.getElementById(id1);
	previousAmount.innerText = id2;
	return previousAmount;
}
