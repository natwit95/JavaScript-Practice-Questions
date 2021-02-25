// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.



let longestCommonPrefix = function (strs) {
	if (strs.length <= 0) {
		return "";
	}

	let result = strs[0].split("");

	for (let str of strs) {
		for (let i = 0; i < result.length; i++) {
			if (result[i] !== str[i]) {
				result.splice(i, result.length);
			}
		}
	}

	return result.join("");
};
