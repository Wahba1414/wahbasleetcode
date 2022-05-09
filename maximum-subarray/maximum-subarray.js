/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums) return 0;
    
    let maxSoFar = Number.NEGATIVE_INFINITY;
    let maxForSlidingWindow = 0;
    
    for(const num of nums){
        maxForSlidingWindow += num;
        
        if(maxSoFar < maxForSlidingWindow){
            maxSoFar = maxForSlidingWindow;
        }
        
        if(maxForSlidingWindow < 0){
           maxForSlidingWindow = 0;
        }
    }
    
    return maxSoFar;
};