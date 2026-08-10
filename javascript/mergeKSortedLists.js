/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const fusionarDosListas = function(l1, l2) {
    let dummy = new ListNode(0);
    let actual = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            actual.next = l1;
            l1 = l1.next;
        } else {
            actual.next = l2;
            l2 = l2.next;
        }
        actual = actual.next;
    }

    actual.next = (l1 !== null) ? l1 : l2;
    return dummy.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;
    let baseResult = lists[0];

    let primerIndiceValido = 0;
    while (primerIndiceValido < lists.length && lists[primerIndiceValido] === null) {
        primerIndiceValido++;
    }
    
    if (primerIndiceValido === lists.length) return null;
        baseResult = lists[primerIndiceValido];

    for (let i = primerIndiceValido + 1; i < lists.length; i++) {
        if (lists[i] === null) {
            continue;
        } else {
            baseResult = fusionarDosListas(baseResult, lists[i]);
        }
    }
    return baseResult;
};
