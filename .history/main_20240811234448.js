var showName = function(name) {
    alert('Xin chao ' + name);
}


let input = window.prompt('Nhap ten cua ban');
while (input === '') {
    input = window.prompt('Nhap ten cua ban');
}