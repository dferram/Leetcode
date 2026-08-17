/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const noSpaces = s.trim();
    const textArray = noSpaces.split(" ").filter(word => word !== "");;
    const arraySize = textArray.length - 1;
    let reversed = " ";

    
    for(let i = 0; i < textArray.length; i++){
        reversed += textArray[arraySize - i] + " ";
    }

    return reversed.trim();
};