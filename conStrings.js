// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

 

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 

// Constraints:

// 1 <= words.length <= 104
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.


//STEPS
// create a set containing all allowed characters,
// iterate over all words using reduce accumulating the number of good words
// split each word into the array of letters
// check if every letter is present in a set of allowed words
// if so - increment the accumulator
// return accumulated value



const countConsistentStrings = (allowed, words) => {
  let set = new Set(allowed)
  return words.reduce((a, w) => {
    return w.split('').every(l => set.has(l)) ? ++a : a
  }, 0)
}