// problem no: 21
// the following is a array solution, need to perform this solution for linked-list

const mergeTwoLists = (list1, list2) => {
  const mergedList = []
  let i = 0
  let j = 0

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      mergedList.push(list1[i])
      i++
    } else {
      mergedList.push(list2[j])
      j++
    }
  }

  console.log(mergedList)

  while (i < list1.length) {
    mergedList.push(list1[i])
    i++
  }

  while (j < list2.length) {
    mergedList.push(list2[j])
    j++
  }

  return mergedList
}

const list1 = [1, 2, 3, 5]
const list2 = [1, 3, 6, 8]

console.log(mergeTwoLists(list1, list2))
