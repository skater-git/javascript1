var header = document.getElementById('header');
// console.log(header);
var h2 = document.querySelector('.list-element').innerHTML;
// console.log(h2);
document.querySelector('.list-element').innerHTML = '';
var main = document.getElementById('main');
console.log(header);
main.innerHTML += h2;
// console.log(main);
var footer = document.getElementById('footer');
var nuoroda = footer.innerHTML;
footer.innerHTML = '';
// console.log(footer);
var li = document.querySelector('.list-element')
li.innerHTML += nuoroda;
console.log(main);
var footerioh2 = footer.innerHTML += '<h2 class="new-h2">Naujas h2</h2>';
console.log(footer);