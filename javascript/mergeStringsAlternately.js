/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let finalWord = "";

    for(let i = 0; i < word1.length || i < word2.length; i++){
        let actualLetter = "";
        
        if(word1[i] == undefined){
            word1[i] = actualLetter;
            finalWord += actualLetter;
            finalWord += word2[i];
        }else if(word2[i] == undefined){
            word2[i] = actualLetter
            finalWord += actualLetter;
            finalWord += word1[i];
        }else{
            finalWord += word1[i]
            finalWord += word2[i]
        }
    }
    return(finalWord)
};