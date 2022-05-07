/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let currentPos = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            //swap
            [nums[i], nums[currentPos]] = [nums[currentPos], nums[i]];
            currentPos++;
        }
    }
    
};