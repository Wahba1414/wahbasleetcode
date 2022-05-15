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
var deepestLeavesSum = function(root) {
    let currentLevel = [];
    
    
    function traverse(currentLevel){
        let nextLevel = [];
        
        for(let i = 0; i < currentLevel.length; i++){
            if(currentLevel[i].left) nextLevel.push(currentLevel[i].left);
            if(currentLevel[i].right) nextLevel.push(currentLevel[i].right);
        }
        
        if(nextLevel.length){
            return traverse(nextLevel)
        }else{
            return currentLevel;
        }
        
    }
    
    currentLevel = traverse([root]);
    
    let sum = 0;
    
    for(let i = 0; i < currentLevel.length; i++){
        sum += currentLevel[i].val;
    }
    
    return sum;
};