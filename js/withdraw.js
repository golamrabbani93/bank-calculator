document.getElementById("withdraw-btn").addEventListener("click", function () {
	// !get withdraw input amount
	const withdrawAmount = document.getElementById("withdraw-amount");
	const withdrawAmountString = withdrawAmount.value;
	const withdraw = parseFloat(withdrawAmountString);

	// !Get show withdraw
	const totalWithDrawAmount = document.getElementById("total-withdraw");
	const totalWithDrawAmountString = totalWithDrawAmount.innerText;
	const totalWithdraw = parseFloat(totalWithDrawAmountString);

	// !show withdraw amount to total withdraw
	const sumWithdraw = withdraw + totalWithdraw;
	totalWithDrawAmount.innerText = sumWithdraw;

	// !get total balance
	const totalBalance = document.getElementById("total-balance");
	const totalBalanceString = totalBalance.innerText;
	const balance = parseFloat(totalBalanceString);
	console.log(balance);

	// !show withdraw amount from total Balance
	const totalWithDrawBalance = balance - withdraw;
	totalBalance.innerText = totalWithDrawBalance;

	// !clear withdraw input field
	withdrawAmount.value = "";
});
