/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tracker = {};
        
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        
        if(tracker[num] >= 0){
            return [tracker[num], i]
        }
        
        tracker[target-num] = i;        
    }
    
    return [];
    
};