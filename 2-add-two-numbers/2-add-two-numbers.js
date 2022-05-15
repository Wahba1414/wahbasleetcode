/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let currentNode1 = l1;
    let currentNode2 = l2;
    let head = null;
    let temp = null;
    
    let remainder = 0;
    let sum = 0;
    let newAddition = 0;
    
    while(currentNode1 || currentNode2 || remainder){
        newAddition = ((currentNode1 && currentNode1.val) || 0) +
             ((currentNode2 && currentNode2.val) || 0) + remainder;
        
        if(newAddition <= 9){
            remainder = 0;
        }else{
            remainder = 1;
            newAddition = newAddition % 10;
        }
        
        
        let newNode = new ListNode(newAddition, null);
        
        if(temp == null){
            temp = newNode;
            head = newNode; //IMP: Take a reference to the head before losing it after traversing.
        }else{
            temp.next = newNode;
            temp = temp.next;
        }
        
        //Traverse
        currentNode1 = currentNode1 ? currentNode1.next : null;
        currentNode2 = currentNode2 ? currentNode2.next : null;
        
    }
    
    return head;

};