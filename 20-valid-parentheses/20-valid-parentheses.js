/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    class Node {
        constructor(value) {
            this.data = value;
            this.next = null;
        }
    }

class Stack {
  constructor() {
    this.list = [];
  }

  peek() {
    return (this.list.length) ? this.list[this.list.length - 1] : null;
  }

  push(value) {
    this.list.push(value);
    return this;
  }

  pop() {
    return this.list.pop();
  }

  max() {
    if (!this.list.length) return null;
    var max = this.list[0];
    this.list.forEach(function (item) {
      if (item > max) max = item;
    });

    return max;
  }

  sum() {
    if (!this.list.length) return 0;
    var sum = 0;

    this.list.forEach(function (item) {
      sum += item
    });

    return sum;
  }


  isEmpty() {
    return this.list.length == 0;
  }

  clear() {
    this.list = [];
  }

  print() {
    console.log(JSON.stringify(this.list));
  }

}
    
    function isPair(char1, char2) {
        switch (char1) {
            case '}':
                return ((char2 == '{') ? true : false);
            
            case ')':
                return ((char2 == '(') ? true : false);

            case ']':
                return ((char2 == '[') ? true : false);
        }
    }
    
    var stack = new Stack();

    for(let i = 0; i < s.length; i++){
        let char = s[i];
        
        if (isPair(char, stack.peek())) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.isEmpty();

    // clear stack for the next check.
    stack.clear();
    
    
};