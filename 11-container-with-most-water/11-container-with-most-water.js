/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    
    let max = 0;
    
    while(start < end){
        let area = (end - start) * Math.min(height[start], height[end]);
        
        if(max < area) max = area;
        
        (height[start] >= height[end]) ? end-- : start++;
        
    }
    
    return max;
    
};