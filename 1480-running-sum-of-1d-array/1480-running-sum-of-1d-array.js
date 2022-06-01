/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(nums.length == 0) return [];
    
    let runningSums = [];
    runningSums[0] = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        runningSums[i] = runningSums[i-1] + nums[i];
    }
    
    return runningSums;
    
};