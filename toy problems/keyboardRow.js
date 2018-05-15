// Given a List of words, return the words that can be typed using
// letters of alphabet on only one row's of American keyboard.


// Example 1:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
// Note:
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.

var findWords = function(words) {
    let keyboard = {
      'Q': 1,
      'W': 1,
      'E': 1,
      'R': 1,
      'T': 1,
      'Y': 1,
      'U': 1,
      'I': 1,
      'O': 1,
      'P': 1,
      'A': 2,
      'S': 2,
      'D': 2,
      'F': 2,
      'G': 2,
      'H': 2,
      'J': 2,
      'K': 2,
      'L': 2,
      'Z': 3,
      'X': 3,
      'C': 3,
      'V': 3,
      'B': 3,
      'N': 3,
      'M': 3
    };

    return words.filter((word) => {
      let letters = word.toUpperCase().split('');
      let match   = letters.reduce((bool, letter, index, arr) => {
        if (keyboard[letter] !== keyboard[arr[0]]) {
          bool = false;
        };
        return bool;
      }, true);
      if (match) {
        return word;
      };
    });
};