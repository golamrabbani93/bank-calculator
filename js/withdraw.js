document.getElementById("withdraw-btn").addEventListener("click", function () {
	const withdrawCheck = document.getElementById("withdraw-amount").value;

	if (withdrawCheck.length === 0) {
		alert("Please Input Your WithDraw Amount");
	} else {
		const withdrawInput = getInputFieldText("withdraw-amount");

		const withdrawTotal = getElementText("total-withdraw");

		const total = withdrawInput + withdrawTotal;

		newAmount("total-withdraw", total);

		const totalBalance = getElementText("total-balance");
		const Balance = totalBalance - withdrawInput;
		newAmount("total-balance", Balance);
	}
});
