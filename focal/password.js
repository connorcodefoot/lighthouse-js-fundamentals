
let passwordInput = process.argv.slice(2);
const obfuscate = function(passwordInput) {

    let password = '';

    for (let i = 0; i < passwordInput[0].length; i++) {

        if (passwordInput[0][i] === 'a') {
            password += '4'
        } else if (passwordInput[0][i] === 'e') {
            password += '3'
        } else if (passwordInput[0][i] === 'o') {
            password += '0'
        } else if (passwordInput[0][i] === 'l') {
            password += '1'
        } else {
        password += passwordInput[0][i];
        }
    }
    return password;
};

console.log(obfuscate(passwordInput))