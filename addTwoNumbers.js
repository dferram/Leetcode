/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let pointer1 = l1
    let pointer2 = l2

    let carry = 0;
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    while(pointer1 !== null || pointer2 !== null || carry !== 0){
        let val1 = (pointer1 !== null) ? pointer1.val : 0;
        let val2 = (pointer2 !== null) ? pointer2.val : 0;
        let sum = val1 + val2 + carry;
        let digitForNode = sum % 10;

        current.next = new ListNode(digitForNode);
        current = current.next;

        carry = Math.floor(sum / 10);

        if (pointer1 !== null) pointer1 = pointer1.next;
        if (pointer2 !== null) pointer2 = pointer2.next;

    }

    return dummyHead.next;
};