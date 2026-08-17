/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let isPalindrome = true;
    const numberString = x.toString();
    const numberSplit = numberString.split("");
    const reversed = numberSplit.reverse();
    const reversedJoin = reversed.join("");

    if(reversedJoin == numberString){
        return isPalindrome
    }else{
        isPalindrome = false;
        return isPalindrome
    }
};