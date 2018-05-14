// Given a string which consists of lowercase or uppercase letters, find the length of the
// longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let split = s.split('');
    console.log(split.length)
    let letters = {};
    let result = 0;
    let odd = false;
    split.forEach((letter) => {
        if (letters[letter] !== undefined) {
            letters[letter] += 1;
        } else {
            letters[letter] = 1;
        }
    });
    console.log(letters);
    for (var keys in letters) {
        let occurence = letters[keys];
        if (occurence % 2 === 0) {
            result += occurence;
        } else {
            odd = true;
            result += occurence - 1;
        }
    };
    return odd ? result + 1 : result;
};