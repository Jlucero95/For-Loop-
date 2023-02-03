// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
	let findSum = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i].withdrawals) {
			let sum = 0;
			for (let n = 0; n < array[i].withdrawals.length; n++) {
				sum += array[i].withdrawals[n];
			}
			findSum.push(sum);
		} else if (!array[i].withdrawals) {
			findSum.push(0);
		}
	}

	return findSum;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file

// If any of the tests fails, refactor the code and run the test command after you've fixed the function
