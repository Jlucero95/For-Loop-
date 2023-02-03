// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
	let balanceOver0 = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i].balance > 0) {
			balanceOver0.push(array[i].balance);
		}
	}

	let minBal = balanceOver0[0];

	for (let i = 0; i < balanceOver0.length; i++) {
		if (balanceOver0[i] < minBal) {
			minBal = balanceOver0[i];
		}
	}

	for (let i = 0; i < array.length; i++) {
		if (array[i].balance === minBal) {
			return [array[i]];
		}
	}

	return minBal;
}

//   let maxValue = arr[0];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > maxValue) {
// 		maxValue = arr[i];
// 	}
// }
// return maxValue;
// }
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
