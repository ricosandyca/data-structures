function Node(data, next = null) {
  this.data = data
  this.next = next
}

function LinkedList() {
  this.head = null
}

LinkedList.prototype.insertFirst = function (data) {
  this.head = new Node(data, this.head)
}

LinkedList.prototype.insertLast = function (data) {
  if (!this.head) {
    this.insertFirst(data)
    return
  }
  
  let current = this.head
  while (current.next) {
    current = current.next
  }
  current.next = new Node(data)
}

LinkedList.prototype.insertAt = function (index, data) {
  let current = this.head
  let prev
  for (let i = 0; i < index; i++) {
    prev = current
    current = current?.next
  }
  if (!prev) return
  prev.next = new Node(data, current)
}

LinkedList.prototype.removeFirst = function () {
  this.head = this.head?.next
}

LinkedList.prototype.removeLast = function () {
  let current = this.head
  let prev
  while (current.next) {
    prev = current
    current = current.next
  }
  prev.next = null
}

LinkedList.prototype.removeAt = function (index) {
  let current = this.head
  let prev
  for (let i = 0; i < index; i++) {
    prev = current
    current = current?.next
  }
  if (!prev) return 
  prev.next = current?.next
}

LinkedList.prototype.getList = function () {
  let current = this.head
  while (current) {
    console.log(current.data)
    current = current.next
  }
}

LinkedList.prototype.getAt = function (index) {
  let current = this.head
  for (let i = 0; i < index; i++) {
    current = current?.next
  }
  console.log(current?.data)
}

LinkedList.prototype.search = function (data) {
  let current = this.head
  while (current) {
    if (current.data === data) return current
    current = current.next
  }
}

const ll = new LinkedList()
ll.insertFirst(1)
ll.insertFirst(2)
ll.insertFirst(3)
ll.insertLast(0)
ll.insertAt(2, 10)
ll.removeFirst()
ll.removeLast()
ll.removeAt(1)
ll.getList()
ll.search(2)


