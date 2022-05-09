/**
 * @param {number} n
 * @return {number}
 */

//O(n) - tabulization
var climbStairs = function(n) {
    if(n <= 2) return n;
    
    let list = [1,2];
    
    for(let i = 2; i < n; i++){
        list[i] = list[i-1] + list[i-2]; 
    }
    
    return list[list.length-1];
};


//Time exceeds the limit
//O(n)
// var climbStairs = function(n) {
//     let cache = {};
    
//     function memoizedClimb (n){
//         if(cache[n]){
//             return cache[n];
//         }
        
//         if(n <= 2){
//             cache[n] = n;
//             return cache[n];
//         }
        
//         cache[n] = climbStairs(n-1) + climbStairs(n-2);
//         return cache[n];
        
//     }
    
//     return memoizedClimb(n);
    
    
// };


//O(2^n)
// var climbStairs = function(n) {
//     //fibonacci
//     if(n <= 2){
//         return n;
//     }
    
//     return climbStairs(n-1) + climbStairs(n-2);
// };