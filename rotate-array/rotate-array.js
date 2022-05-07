/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//O(N)
var rotate = function(nums, k) {
   k = k % nums.length;

  nums.splice(0, 0, ...nums.splice(nums.length - k, k));
};

// Trivial one O(n*K)
// var rotate = function(nums, k) {
//     while(k > 0){
//         nums.unshift(nums.pop());
//         k--;
//     }
// };