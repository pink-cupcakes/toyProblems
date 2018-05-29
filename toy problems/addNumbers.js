// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// addTwoDigits(n) = 11.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive two-digit integer.

// Guaranteed constraints:
// 10 ≤ n ≤ 99.

// [output] integer

// The sum of the first and second digits of the input number.

function addTwoDigits(n) {
    let num = [];
    while (n > 1) {
        if (n === 10) {
            num.push(1);
        };
        let number = n % 10;
        n = Math.floor(n/10);
        num.push(number);
    }
    return num.reduce((total, sub) => {
        total += sub;
        return total;
    }, 0)
}