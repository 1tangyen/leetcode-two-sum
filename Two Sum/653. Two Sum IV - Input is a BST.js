/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
	if (!root) return false;
	const set = new Set();
	const stack = [ root ];
	while (stack.length) {
		const node = stack.pop();
		if (set.has(k - node.val)) return true;
		set.add(node.val);
		if (node.right) stack.push(node.right);
		if (node.left) stack.push(node.left);
	}
	return false;
};
