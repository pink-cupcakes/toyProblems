var selfDividingNumbers = function(left, right) {
    var result = [];
    let isModulo = (num) => {
        let mushNums = [num];
        while (num) {
            mushNums.push(num % 10);
            num = Math.floor(num/10);
        }
        return mushNums.reduce((accum, element) => {
            if (mushNums[0] % element !== 0) {
                accum = false;
            }
            return accum;
        }, true);
    };
    for (var i = left; i <= right; i ++) {
        if (i < 10 || isModulo(i)) {
            result.push(i);
        }
    };
    return result;
};