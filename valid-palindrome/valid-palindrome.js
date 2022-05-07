/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0; 
    let end = s.length -1;
    
    while(start < end){
        
        while(start < end && /[^A-Za-z0-9]/.test(s[start])) start++;
        while(start < end && /[^A-Za-z0-9]/.test(s[end])) end--;
        
        if(s[start].toLowerCase() != s[end].toLowerCase()){
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
    
    
};


// var isPalindrome = function(s) {
//     let cleanS = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     let len = cleanS.length;
    
//     for(let i = 0; i < len/2; i++){
//         if(cleanS[i] != cleanS[len-1-i]){
//             return false;
//         }
//     }
    
//     return true;
    
// };