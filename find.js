var data = [
    {
        id: 123,
        name: "Ridoan Khan Anik",
        age: 29,
        profession: "Software Engineer"
    },

    {
        id: 124,
        name: "Naziha Rahman Mohona",
        age: 27,
        profession: "Technical Content Writer"
    },
    {
        id: 125,
        name: "Sarhan Hasan",
        age: 28,
        profession: "Marketing Executive"
    }
]
let found = false;
const findByName = (givenName) => {

    // for (let i = 0; i < data.length; i++) {
    //     if (givenName === data[i].profession) {
    //         found = true;
    //         console.log(data[i]);
    //     }
    // }

    const found = data.find(({ name }) => name === givenName);
    console.log(found);

    if (!found) {
        console.log(`Profession does not exist`)
    }
}



const date = new Date();

const hr = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

// Using Sort Starts

// var arr = ['K', 'l', 'o', 'v', 'e', 'r', 'C', 'l', 'o', 'u', 'd']

// var sortedArray = arr.sort();

// function findRepeatingCharacters() {
//     let i = 0;
//     do {
//         if (arr[i] == arr[i + 1]) {
//             return arr[i]
//         }
//         i++;
//     } while (i < arr.length - 1);
// }

// Using Sort Ends


// Using Set Starts
// const findRepeatingCharacters = () => {
//     let arr = ['K', 'i', 'o', 'v', 'e', 'r', 'L', 'l', 'o', 'u', 'd']

//     let mySet = new Set(arr)

//     let newArr = [...mySet]

//     let counter = 0

//     for (let i = 0; i < newArr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (newArr[i] == arr[j]) {
//                 ++counter;
//                 if (counter >= 2) {
//                     return newArr[i]
//                 }
//             }
//         }
//         counter = 0;
//     }
// }

// console.log(findRepeatingCharacters());

// Using Set Ends


// Using Simple Approach Starts

// const findRepeatingCharacters = () => {
//     let arr = ['K', 'l', 'o', 'v', 'e', 'r', 'L', 'l', 'o', 'u', 'd'];

//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length - 1; j++) {
//             if (arr[i] == arr[j]) {
//                 return arr[i];
//             }
//         }
//     }
// }

// console.log(findRepeatingCharacters())

// Using Simple Approach Ends

// Using Map starts

const findRepeatingCharacters = () => {
    let arr = ['K', 'l', 'o', 'v', 'e', 'r', 'L', 'l', 'o', 'u', 'd']

    let myMap = new Map(arr)

    console.log(myMap)
}

findRepeatingCharacters();
// Using Map Ends

const list = new 