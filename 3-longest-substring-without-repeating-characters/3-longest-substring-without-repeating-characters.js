/**
 * @param {string} s
 * @return {number}
 */
// O(n^2)
var lengthOfLongestSubstring_old = function(s) {
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

//Linear
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = start + 1;
  let max = (s.length) ? 1 : 0;
  let currentLen;

  let tracker = {
    [s[start]]: start,
  };

  while (end < s.length) {

    if (tracker[s[end]] == undefined || tracker[s[end]] < start) {
      tracker[s[end]] = end;
      currentLen = end - start + 1;
      max = (currentLen > max) ? currentLen : max;
    } else {
      start = tracker[s[end]] + 1;
      tracker[s[end]] = end;
    }

    end++;
  }

  return max;
}
