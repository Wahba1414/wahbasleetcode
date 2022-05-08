/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = null;
    let currentNode1 = list1;
    let currentNode2 = list2;
    let prev = null;
    let temp;

    while(currentNode1 || currentNode2){
        
        if( (currentNode1 && !currentNode2 ) || (currentNode1 && currentNode1.val < currentNode2.val)){
            temp = currentNode1;
            currentNode1 = currentNode1.next;
        }else{
            temp = currentNode2;
            currentNode2 = currentNode2.next;
        }
        
        if(prev){
            prev.next = temp;
        }else{
            head = temp;
        }
        
        prev = temp;
        
    }
            
    return head;
    
    
};