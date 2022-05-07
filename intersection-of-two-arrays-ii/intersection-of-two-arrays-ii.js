/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let tracker = {};
    let result = [];
        
    for (const num of nums1){
        tracker[num] = tracker[num] || {};
        tracker[num]['nums1'] = tracker[num]['nums1'] || 0;
        tracker[num]['nums1']++;
    } 
    
    
    for (const num of nums2){
        tracker[num] = tracker[num] || {};
        tracker[num]['nums2'] = tracker[num]['nums2'] || 0;
        tracker[num]['nums2']++;
    } 
    
    //console.log(tracker)
    const trackerKeys = Object.keys(tracker);
    
    for (const key of trackerKeys){
        let repeatKeys = Object.keys(tracker[key]);
        
        if(repeatKeys.length == 2){
            let repeatCount = (tracker[key]['nums2'] > tracker[key]['nums1']) ? tracker[key]['nums1'] : tracker[key]['nums2'];
            
            for(let i = 1; i <= repeatCount; i++){
                result.push(key);
            }
        }
        
    }
    
    return result;
    
};