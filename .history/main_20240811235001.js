var wellCome = function(name1) {
    alert('Xin chao ' + name1);
}


let password = window.prompt('enter the password');
while (password !== 'Anhhuy1711@') {
    alert('wrong password');
    password = window.prompt('enter the password');
}
alert('Congratulation! You are logged in!');
let name = window.prompt('enter your name');
wellCome(name);