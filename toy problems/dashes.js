// This is a reverse challenge, enjoy!

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 8.

// [output] array.string

function dashes(n) {
    let res = [];
    for (let i = n; i > 0; i--) {
        let str = [];
        for (let j = 0; j < i; j++) {
            str.push('-');
        };
        str = str.join('|');
        while (str.length < n * 2 - 1) {
            str = ' ' + str + ' ';
        };
        res.push(str);
        if (res.length !== 1) {
            res.unshift(str);
        };
    };
    return res;
}