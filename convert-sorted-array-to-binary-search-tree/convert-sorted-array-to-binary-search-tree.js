/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    function sortR(nums,start, end){
        if(start > end){
            return null;
        }
        
        let mid = Math.floor((end+start)/2);
        
        let node = new TreeNode(nums[mid]);
        
        node.left = sortR(nums, start, mid-1);
        
        node.right = sortR(nums, mid+1,end);
                
        return node;   
    }
    
    return sortR(nums, 0 , nums.length - 1);
};
