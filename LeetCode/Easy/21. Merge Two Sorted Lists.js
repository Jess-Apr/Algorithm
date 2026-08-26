const input = require("./example");

function mergeTwoLists(list1, list2) {
  const answer = new ListNode(null, null);
  // answer가 시작점을 기억할 수 있도록 현재 노드는 current로 기록
  let current = answer;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  // 한쪽이 먼저 끝났다면, 남아있는 리스트를 그대로 뒤에 붙임
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return answer.next;
}

console.log(mergeTwoLists(input[0], input[1]));
