// problem no: 21

const mergeTwoSortedArrays = (list1, list2) => {
  for (i = 0; i < list2.length; i++) {
    list1[list1.length] = list2[i]
    let j = list1.length
    while (j >= 0) {
      if (list1[j] < list1[j - 1]) {
        let temp = list1[j]
        list1[j] = list1[j - 1]
        list1[j - 1] = temp
      }
      j--
    }
  }
  list1 = list1.sort()
  return list1
}

const mergeTwoLists = (list1, list2) => {}

const list1 = [1, 2, 3, 5]
const list2 = [1, 3, 6, 8]

console.log(mergeTwoLists(list1, list2))
