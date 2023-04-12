class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  addAtEnd(data) {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
    } else {
      let current = this.head

      while (current.next !== null) {
        current = current.next
      }
      current.next = node
      node.next = null
    }
    this.size++
  }

  insertAtIndex(data, index) {
    if (index < 0 || index > this.size) return null

    const node = new Node(data)
    let current = this.head

    if (index === 0) {
      node.next = current
      this.head = node
    } else {
      let previous
      let i = 0

      while (i < index) {
        previous = current
        current = current.next
        i++
      }
      previous.next = node
      node.next = current
    }
    this.size++
  }
  deleteFrom(index) {
    if (index < 0 || index > this.size) return null

    let current = this.head
    if (index === 0) {
      this.head = current.next
    } else {
      let i = 0
      let previous
      while (i < index) {
        previous = current
        current = current.next
        i++
      }
      previous.next = current.next
    }
    this.size--
  }
  delete(data) {
    let current = this.head
    let previous = null

    while (current !== null) {
      if (current.data === data) {
        if (previous === null) {
          previous.next = current.next
        }
      }
      previous = current
      current = current.next
    }
  }
  getByIndex(index) {
    if (index < 0 || index >= this.size)
      throw new Error('provided index number is not correct')

    let current = this.head
    let i = 0

    while (i < index) {
      current = current.next
      i++
    }
    console.log(current.data)
  }

  getByData(data) {
    if (!this.head) return null

    let current = this.head
    let i = 0
    while (current !== null) {
      if (current.data === data) {
        return i
      }
      current = current.next
      i++
    }
    return -1
  }

  sumOfList() {
    let sum = 0
    let current = this.head

    while (current !== null) {
      sum += current.data
      current = current.next
    }
    console.log(sum)
  }

  // a -> b -> c -> d -> e
  // 5 > 10 -> 15 -> 20 -> 25
  reverseList() {
    let current = this.head
    let listSize = this.getSize()
    listSize = listSize - 1
    let i = listSize

    while (i >= 0) {
      this.getByIndex(i)
      i--
    }
  }

  printList(msg) {
    let current = this.head
    const arr = []

    while (current !== null) {
      arr.push(current.data)
      current = current.next
    }
    if (msg) {
      console.log(`${msg} ${arr}`)
    } else {
      console.log(arr)
    }
  }

  getSize() {
    return this.size
  }
}

const ll = new LinkedList()

ll.addAtEnd(5)
ll.addAtEnd(10)
ll.addAtEnd(15)
ll.addAtEnd(25)

ll.insertAtIndex(20, 3)
console.log(ll.reverseList())
ll.sumOfList()
// ll.printList('after insertion \n')

// ll.deleteFrom(3)

// ll.printList('after deletion \n')

// ll.delete(25)
// ll.printList()

// console.log(ll.getSize())

// console.log(ll.getByData(15))
