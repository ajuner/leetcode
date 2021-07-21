// 遇到对的人，尝试走对方走过的路，最终一定能相遇

var getIntersectionNode = function (headA, headB) {
    if(headA == null || headB == null) return null;
    let A = headA
    let B = headB
    while(A != B) {
        A = A === null ? headB : A.next
        B = B === null ? headA : B.next
    }
    return A;
};
