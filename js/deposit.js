document.getElementById("deposit-btn").addEventListener("click", function () {
	//! get deposit input amount
	const depositAmount = document.getElementById("deposit-amount");
	const depositAmountString = depositAmount.value;
	const deposit = parseFloat(depositAmountString);

	// !get Total Show Deposit
	const totalDepositAmount = document.getElementById("total-deposit");
	const totalDepositAmountString = totalDepositAmount.innerText;
	const totalDeposit = parseFloat(totalDepositAmountString);

	// !show deposit amount to total deposit
	const sumDeposit = totalDeposit + deposit;
	totalDepositAmount.innerText = sumDeposit;

	// !get total balance
	const totalBalance = document.getElementById("total-balance");
	const totalBalanceString = totalBalance.innerText;
	const balance = parseFloat(totalBalanceString);

	// !show deposit amount to total Balance
	const totalDepositBalance = balance + deposit;
	totalBalance.innerText = totalDepositBalance;

	// !clear deposit input field
	depositAmount.value = "";
});
