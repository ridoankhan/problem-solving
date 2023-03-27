const icecreamParlor = (m, arr) => {
    return arr.map(el => Math.pow(el, 2));
}

let flavors = [1, 4, 5, 3, 2];
console.log(icecreamParlor(5, flavors));