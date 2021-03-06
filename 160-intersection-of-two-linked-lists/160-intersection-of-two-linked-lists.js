/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let map = new Map();
    
    let node = headA;
    
    while(node){
        map.set(node,true);
        node = node.next;
    }
    
    node = headB;
    while(node){
        if(map.has(node)){
            return node;
        }
        node = node.next;
    }
    
    return null;
    
};