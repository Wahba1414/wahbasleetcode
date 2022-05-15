/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0; 
    let longest = 0;
    
    while(i < s.length){
        
        let tracker = {};
        tracker[s[i]] = i;
        let substringLong = 1;
        
        let j = i + 1;
        while (j < s.length){
            
            if(tracker[s[j]] == undefined){    
                
                tracker[s[j]] = j;
                substringLong++;
                
            }else{
                
                longest = (longest < substringLong) ? substringLong : longest;
                i = tracker[s[i]] + 1;
                break;
            
            }
            
            j++;
        
        }
        
        if(j == s.length){
            longest = (longest < substringLong) ? substringLong : longest;
            break;
        }
        
        
    }
    
    
    return longest;
    
};