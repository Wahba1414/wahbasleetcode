/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let tracker = {};    
    
    for(let num of nums){
       if(tracker[num]){
           delete tracker[num];
       }else{
           tracker[num] = true;
       }
    }
    
    return Object.keys(tracker)[0];
    
};