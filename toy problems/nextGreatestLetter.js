var nextGreatestLetter = function(letters, target) {
    console.log(letters);
    if (letters[0] > target || target >= letters[letters.length - 1]) {
        return letters[0];
    }
    if (letters.length <= 2) {
        console.log(target, letters[0])
        return letters[0] <= target ? letters[letters.length - 1] : letters[0];
    } else {
        var split = Math.ceil(letters.length / 2) - 1;
        if (letters[split] > target) {
            letters.splice(split + 1, letters.length - split);
        } else {
            letters.splice(0, letters.length - split - 1);
        }
        return nextGreatestLetter(letters, target);
    }
};