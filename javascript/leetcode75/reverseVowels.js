/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const sArray = Array.from(s);
    let left = 0;
    let right = sArray.length - 1;
    let vocals = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

    while (left < right) {
        if (!vocals.includes(sArray[left])) {
            left++; 
        }else if (!vocals.includes(sArray[right])) {
            right--; 
        }else {
            let temporal = sArray[left]; 
            sArray[left] = sArray[right]; 
            sArray[right] = temporal; 
            
            left++;
            right--;
        }
    }
    
    return sArray.join("");
};