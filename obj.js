// var data = {};

// function addName(name, age) {

//     data[name] = age;
//     // console.log(data);
// }

// addName('mohona', 26);
// addName('anik', 28);
// addName('nodi', 13);


// function getSize() {
//     var count = 0;

//     for (var property in data) {
//         if (Object.prototype.hasOwnProperty.call(data, property)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(getSize());



// var nam = 'mohona';



// if (!data.hasOwnProperty(nam)) {
//     console.log('No Data');
// } else {
//     console.log('Data Exists');


class StaffList {
    //add your code here
    constructor() {
        this.collection = {};
    }

    add(name, age) {
        if (!this.collection.hasOwnProperty(name)) {
            if (age > 20) {
                this.collection[name] = age;
            } else if (age <= 20) {
                throw "Staff member age must be greater than 20"
            }
        }

    }

    remove(name) {
        if (this.collection.hasOwnProperty(name)) {
            delete this.collection.name;
            return true
        } else {
            return false
        }
    }

    getSize() {
        var count = 0;

        for (var property in this.collection) {
            if (Object.prototype.hasOwnProperty.call(this.collection, property)) {
                count++;
            }
        }

        return count;
    }
}


var staff = new StaffList;

staff.add('anik', 28);
staff.add('mohona', 26);
console.log(staff.getSize())
console.log(staff.remove('mohona'));
console.log(staff.getSize());