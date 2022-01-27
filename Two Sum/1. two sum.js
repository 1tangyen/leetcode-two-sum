/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let indexes = [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				indexes.push(i);
				indexes.push(j);
			}
		}
	}
	return indexes;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const nums2 = target - nums[i];
		if (map.has(nums2)) {
			return [ map.get(nums2), i ];
		} else {
			map.set(nums[i], i);
		}
	}
	return [];
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
