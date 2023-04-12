let isBalanced = (s) => {
    let result = 'YES';
    let stack = [];

    s.split('').forEach((el) => {
        if (el === '(') {
            stack.push(')');
        } else if (el === '{') {
            stack.push('}');
        } else if (el === '[') {
            stack.push(']');
        } else {
            let hold = stack.pop();
            if (el !== hold) {
                result = 'NO';
            }
        }
    });

    if (stack.length > 0) {
        result = 'NO';
    }
    return result;
}

console.log(isBalanced('{(([])[])[]}'));