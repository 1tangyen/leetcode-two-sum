/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	const newArray = [];
	for (let index1 = 0; index1 <= numbers.length - 1; index1++) {
		for (let index2 = index1 + 1; index2 <= numbers.length - 1; index2++) {
			if (numbers[index1] + numbers[index2] === target) {
				newArray.push(index1 + 1);
				newArray.push(index2 + 1);
			}
		}
	}
	return newArray;
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	let index1 = 0;
	let index2 = numbers.length - 1;

	while (index1 < index2) {
		let sum = numbers[index1] + numbers[index2];
		if (sum == target) {
			return [ index1 + 1, index2 + 1 ];
		} else if (sum < target) {
			index1++;
		} else {
			index2--;
		}
	}
	return [ -1, -1 ];
};
