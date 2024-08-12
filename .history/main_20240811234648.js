var wellCome = function(name) {
    alert('Xin chao ' + name);
}


let password = window.prompt('enter the password');
while (password !== 'Anhhuy1711@') {
    password = window.prompt('enter the password');
}
let name = window.prompt('enter your name');
wellCome('Anh Huy');