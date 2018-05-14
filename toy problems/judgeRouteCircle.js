// Initially, there is a Robot at position (0, 0). Given a sequence of its moves,
// judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character.
// The valid robot moves are R (Right), L (Left), U (Up) and D (down).
// The output should be true or false representing whether the robot makes a circle.

// Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let letters = moves.split('');
    let v = 0;
    let h = 0;
    for (let i = 0; i < letters.length; i++) {
        if (moves[i] === 'L') {
            h += 1;
        } else if (moves[i] === 'R') {
            h -= 1;
        } else if (moves[i] === 'U') {
            v += 1;
        } else if (moves[i] === 'D') {
            v -= 1;
        }
    };
    return (v === 0 && h === 0);
};