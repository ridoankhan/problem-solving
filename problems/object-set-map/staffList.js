class StaffList {

    constructor() {
        this.staffs = [{
                name: 'Ridoan',
                age: 28
            },
            {
                name: 'Mohona',
                age: 26
            },
            {
                name: 'Nodi',
                age: 13
            },
            {
                name: 'Kamrul',
                age: 27
            },
            {
                name: 'Minul',
                age: 29
            }
        ];
    }

    add(name, age) {
        const found = s.staffs.some(el => el.name === name);

        if (!found) {

            if (age <= 20) throw new Error('Staff member age must be greater than 20');
            else if (age > 20) {
                this.staffs.push({
                    name: name,
                    age: age
                })
            }

        } else {
            throw new Error('Record Already Exists');
        }
    }

    remove(name) {
        var result = true;
        for (let i = 0; i < s.staffs.length; i++) {
            if (this.staffs[i].name === name) {
                if (i > -1) {
                    this.staffs.splice(i, 1);
                    result = true;
                }
            } else {
                result = false;
            }
        }
        return result;
    }

    getSize() {
        return this.staffs.length;
    }

}

let s = new StaffList();