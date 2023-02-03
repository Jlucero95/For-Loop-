// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
	let balanceOver0 = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i].balance > 0) {
			balanceOver0.push(array[i].balance);
		}
	}

	let maxBal = balanceOver0[0];

	for (let i = 0; i < balanceOver0.length; i++) {
		if (balanceOver0[i] > maxBal) {
			maxBal = balanceOver0[i];
		}
	}

	for (let i = 0; i < array.length; i++) {
		if (array[i].balance === maxBal) {
			return [array[i]];
		}
	}

	return maxBal;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
