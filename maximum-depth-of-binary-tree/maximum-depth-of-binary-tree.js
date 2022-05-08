/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let levelCount = 0;
    let newLevel = [];
    let prevLevel = [];
    
    if(root) newLevel.push(root);

    while(newLevel.length){
        levelCount++;
        
        prevLevel = newLevel;
        
        newLevel = [];
        
        for(let item of prevLevel){
            if(item.right) newLevel.push(item.right);
            if(item.left) newLevel.push(item.left);
        }
    }
    
    
    return levelCount;
    
};