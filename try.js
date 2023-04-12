// var userOne = {
//     email : 'tk177277@gmail.com',
//     name : 'tk',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout: function(){
//         console.log(this.email, 'has logged out');
        
//     }
// }

// console.log(userOne.login());

class Users{

    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(this.name, 'has just logged in');
        return this;   
    }

    logout(){
        console.log(this.name,'has just logged out');
        return this;   
    }

    updateScore(){
        this.score++;
        console.log(this.email, 'score is now: ', this.score);     
        return this;   
    }
}

var userOne = new Users('ridoankhan07@gmail.com','ridoan');
var userTwo = new Users('kamrul@gmail.com','kamrul Hasan');



console.log(userOne.login().updateScore().updateScore().logout());
console.log(userTwo.logout());



