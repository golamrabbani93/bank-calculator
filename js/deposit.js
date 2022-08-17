document.getElementById("deposit-btn").addEventListener("click", function () {
	const inputFieldText = document.getElementById("deposit-amount").value;

	if (inputFieldText.length === 0) {
		alert("Please Input Deposit Amount");
	} else {
		const inputField = getInputFieldText("deposit-amount");

		const elementText = getElementText("total-deposit");

		const total = inputField + elementText;
		newAmount("total-deposit", total);

		const totalBalanceElement = getElementText("total-balance");

		const totalBalance = inputField + totalBalanceElement;
		newAmount("total-balance", totalBalance);
	}
});
