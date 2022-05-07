/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let firstStr = strs[0];
    let char;
    
    for(let j = 0; j < firstStr.length; j++){
        char = firstStr[j];
        
        
        for(let i = 1; i < strs.length; i++){
            if(strs[i][j] != char){
                return prefix;
            }
        }
        
        prefix += char;
    }
    
    return prefix;
    
};