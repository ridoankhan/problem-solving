const personOne = {
    name: 'mohona',
    age: 23,

    address: {
        city: 'bagerhat',
        counry: 'usa'
    }
}

const personTwo = {
    name: "anik",
    age: "25",

};

// const { name: nickName, age, favoriteFood = "spaghetti", ...rest } = personTwo;

const personThree = {
    ...personOne,
    ...personTwo
};

function printUser({
    name,
    age,
    favoriteFood: food = 'watermelon',
    address: {
        city
    }
}) {
    console.log(` Name is: ${name}\n Age is: ${age}\n Favorite food is ${food}\n City is: ${city}`);
}

printUser(personOne);

// console.log(nickName);
// console.log(age);
// console.log(favoriteFood);

// console.log(rest);