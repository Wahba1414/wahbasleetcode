/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(!nums) return false;
    
    let tracker = {};
    
    for(let num of nums){
        if(tracker[num]) return true; //duplication

        tracker[num] = true;
    }

    return false;
};