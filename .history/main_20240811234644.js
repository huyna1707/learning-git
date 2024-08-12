var wellCome = function(name) {
    alert('Xin chao ' + name);
}


let password = window.prompt('enter the password');
while (password !== 'Anhhuy1711@') {
    password = window.prompt('enter the password');
}

wellCome('Anh Huy');