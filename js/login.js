document.getElementById("user-btn").addEventListener("click", function () {
	// !get user-email data
	const userEmail = document.getElementById("user-email");
	const email = userEmail.value;

	// !get user password
	const userPassword = document.getElementById("user-password");
	const password = userPassword.value;

	// !check email and password
	if (email === "sontan@gmail.com" && password === "secret") {
		window.location.href = "bank.html";
	} else {
		alert("tui password vhule gesos toke ami tejjo putro korlam");
	}
});
