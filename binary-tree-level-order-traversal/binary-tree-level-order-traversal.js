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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let newLevel = [];
    let prevLevel = [];
    let levels = [];
    
    if(root) newLevel.push(root);

    while(newLevel.length){
        // console.log('newLevel: ' , newLevel);
        // console.log('getLevelVals(newLevel): ' , getLevelVals(newLevel));
        
        levels.push(getLevelVals(newLevel));
        
        prevLevel = newLevel;
        
        newLevel = [];
        
        for(let item of prevLevel){
            if(item.left) newLevel.push(item.left);
            if(item.right) newLevel.push(item.right);
        }
    }
    
    
    return levels;
    
};

//helper function
function getLevelVals(levelNodes){
    return levelNodes.map((node) => node.val);
}