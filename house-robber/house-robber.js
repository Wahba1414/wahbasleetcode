/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    let maxMoney = [];
    
    if(nums.length == 1) return nums[0];
    if(nums.length == 2) return Math.max(nums[0], nums[1]);
    
    maxMoney.push(nums[0]);
    maxMoney.push(Math.max(nums[0], nums[1]));
    
    for(let i = 2; i < nums.length; i++){
        maxMoney[i] = Math.max(maxMoney[i-1] , nums[i] + maxMoney[i-2])
    }
    
    return maxMoney[maxMoney.length-1];
    
};


//naive and it is not correct
// var rob = function(nums) {
//     let oddHomes = 0;
//     let evenHomes = 0;
    
//     for(let i = 0; i < nums.length; i++){
//         if(i % 2){
//             oddHomes += nums[i];
//         }else{
//             evenHomes += nums[i];
//         }
//     }
    
//     return Math.max(oddHomes, evenHomes);
// };