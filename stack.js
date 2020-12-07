function Node(data, next = null) {
  this.data = data
  this.next = next
}

function Stack() {
  this.head = null
}

Stack.prototype.push = function (data) {
  if (!this.head) {
    this.head = new Node(data)
    return
  }
  
  let current = this.head
  while (current.next) {
    current = current.next
  }
  current.next = new Node(data)
}

Stack.prototype.pop = function () {  
  let current = this.head
  if (!current?.next) {
    this.head = null
    return
  }
  let prev
  while (current.next) {
    prev = current
    current = current.next
  }
  prev.next = null
}

Stack.prototype.peek = function () {
  let current = this.head
  while (current.next) {
    current = current.next
  }
  return current.data
}

Stack.prototype.getStack = function () {
  let current = this.head
  while (current) {
    console.log(current.data)
    current = current.next
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.pop()
stack.getStack()
console.log(stack.peek())