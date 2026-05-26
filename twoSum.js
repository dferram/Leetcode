/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numWatched = {};

    for(let i = 0; i < nums.length; i ++){
        let numRead = nums[i];
        let numToTarget = target - numRead;

        if (numWatched[numToTarget] !== undefined){
            console.log(numRead + " registered" + numWatched[numRead]);
            return [numWatched[numToTarget], i];
        }else{
            console.log(numRead + " not registered" + numWatched[numRead]);
            numWatched[numRead] = i;
        }
    }
};