/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0;
    
    function getNodeR (node){
        len ++;
        let i = len;
        
        if(node.next){
            getNodeR(node.next);
        }
          
        if(len - n == 0 && i == 1){
            //head
            if(len == 1){
                head = null;
            }else{
                head.val = head.next && head.next.val;
                head.next = head.next && head.next.next;
            }
            
        }else if(len - n == i){          
            node.next =  node.next.next;
        }
        
    }
    
    getNodeR(head);
    
    return head;
    
};

