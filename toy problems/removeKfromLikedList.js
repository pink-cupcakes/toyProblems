// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    if (l === null) {
        return [];
    };
    l = l.toJSON();
    return l.reduce((res, ele) => {
        if (ele !== k) {
            res.push(ele);
        };
        return res;
    }, [])
}
