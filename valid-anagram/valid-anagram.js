/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let tracker = {};
    
    for(let i = 0; i < s.length; i++){
        tracker[s[i]] = (tracker[s[i]]+1) || 1;
    }
    
    for(let i = 0; i < t.length; i++){
        if(tracker[t[i]]){
            tracker[t[i]]--;
        }else{
            return false;
        }
    }
    
    for(let key in tracker){
        if (tracker[key] != 0) return false;
    }
    
    return true;
    
};