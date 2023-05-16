const strongPassword = (str) => {

    if(str.match(/.{6,12}$/)){
        return 'strong password'
    } else {
        return 'weak password'
    }

}

console.log(strongPassword('B@ng'));