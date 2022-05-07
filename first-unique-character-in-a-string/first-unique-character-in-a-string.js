/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let tracker = {};
    
    
    for(let i =0; i < s.length; i++){
        if(tracker[s[i]]){
            tracker[s[i]]['counter']++;
        }else{
            tracker[s[i]] = {
                'counter': 1,
                'index': i
            };
        }
    }
    
    
    let keys = Object.keys(tracker);
    
    for(let i = 0; i < keys.length; i++){
        if(tracker[keys[i]]['counter'] == 1) {
            return tracker[keys[i]]['index'];
        }
    }
    
    return -1;
    
};