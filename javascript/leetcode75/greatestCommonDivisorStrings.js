/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let a = str1.length;
    let b = str2.length;

    if (str1 + str2 !== str2 + str1) {
    return "";
    }
    while(b !== 0){
        let residue = a % b;

        a = b;
        b = residue;
    }
    return str2.substring(b, a);
};