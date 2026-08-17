/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let kidBoolean = [];
    let maxScore = 0;

    for(let i = 0; i < candies.length; i++){
        if(candies[i] > maxScore){
            maxScore = candies[i];
        }
    }

    for(let i = 0; i < candies.length; i++){
       let totalCandies = candies[i] + extraCandies;

        if(totalCandies >= maxScore){
            kidBoolean[i] = true;
        }else{
            kidBoolean[i] = false;
        }
    }

    return kidBoolean;

};