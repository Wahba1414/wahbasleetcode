/**
 * @param {number[]} nums
 * @return {number}
 */
// O(N)
var removeDuplicates = function(nums) {
    let tracker = {};
    
    let k = 0;
    
    for(let index = 0; index < nums.length; index++){
        let num = nums[index];
        
        if(!tracker[num]){
            tracker[num] = true;
            nums[k] = nums[index];
            k++;
        }
        
    }
    
    return k;
    
};

// O(N^2)
// var removeDuplicates = function(nums) {
//     let tracker = {};
    
//     let index = 0;
//     let len = nums.length;
    
//     while(index < len){
//         let num = nums[index];
        
//         if(tracker[num]){
//             // [nums[index], nums[len-1]] = [nums[len-1], nums[index]];
//             nums.push(nums.splice(index,1)[0]);
//             len--;
//         }else{
//             tracker[num] = true;
//             index++;
//         }        
//     }
    
//     return len;
    
// };