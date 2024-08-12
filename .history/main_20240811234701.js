var wellCome = function(name1) {
    alert('Xin chao ' + name1);
}


let password = window.prompt('enter the password');
while (password !== 'Anhhuy1711@') {
    password = window.prompt('enter the password');
}
let name = window.prompt('enter your name');
wellCome(name);