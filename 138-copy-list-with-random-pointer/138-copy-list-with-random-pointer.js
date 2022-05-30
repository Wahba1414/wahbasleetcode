/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;
    
    let NodeMap = new Map();
    let currentNode = head;
    
    
    function getOrAddNode(node){
        if(!NodeMap.has(node)){
            NodeMap.set(node, new Node(node.val, null,null))
        }
        
         return NodeMap.get(node);
    }
    
    
    while(currentNode){        
        let currentCopy = getOrAddNode(currentNode);
        
        if(currentNode.next){
            let next = currentNode.next;
            let nextCopy = getOrAddNode(next);
            
            currentCopy.next = nextCopy;
        }
        
        if(currentNode.random){
            let random = currentNode.random;
            
            let randomCopy = getOrAddNode(random);
            
            currentCopy.random = randomCopy;
        }
        
        
        
        
        currentNode = currentNode.next;
    }
    
  
    return getOrAddNode(head);
    
    
};

