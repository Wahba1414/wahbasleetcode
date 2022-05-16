/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = 1;
    let start = 0;
    
    let left, right;
    
    let len = s.length;
    
    for(let i = 0; i < len; i++){
        left = i - 1;
        right = i + 1;
        
        while(right < len && s[i] == s[right]) right++;
        
        while(left >= 0 && s[i] == s[left]) left--;
        
        while(left >= 0 && right < len && s[left] == s[right]){
            right++;
            left --;
        }
        
        let currentLong = right - left - 1;
        
        if(currentLong > longest){
            longest = currentLong;
            start = left + 1;
        }
        
    }
    
    console.log(start, longest);
    return s.slice(start, longest+start);
    
};