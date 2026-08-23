/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
   let first = Infinity;
   let second = Infinity;

   for(let i = 0; i < nums.length; i++){
      if(nums[i] <= first){
         first = nums[i];
      }else if(first < second && nums[i] <= second){
        second = nums[i];
        // console.log(first);
        // console.log(second);
      }else{
        return true;
      }
   }

   return false;
};
