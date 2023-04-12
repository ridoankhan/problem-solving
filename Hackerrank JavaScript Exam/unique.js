/*
Find out unique values in a array without using any built-in function

and without using sort
*/

let arr = [1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10];

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] == arr[i]) {

            for (let k = j; k < arr.length; k++) {
                arr[k] = arr[k + 1];
            }
            // Don't Increament the j if replacement occurs;
            j--;
            arr.pop();
        }
    }
}

console.log(arr);


// using Sort

let array = [1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10];

array = array.sort((a, b) => a - b);

for(let i=0; i<array.length;i++){
    if(array[i] == array[i+1]){
        array.splice(i, 1);
        i--;
    }
}

console.log(array);


// using set
let arrey = [1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10];
let unique = new Set(arrey);
arrey = [...unique]
console.log(arrey);