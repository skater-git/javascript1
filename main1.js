var aukstis = 3;
var plotis = 4;
var plotas = (aukstis * plotis);
console.log(plotas);
var perimetras = (aukstis + plotis) * 2;
console.log(perimetras);
var istrizainekvadratu = (aukstis * aukstis + plotis * plotis);
// console.log(istrizainekvadratu);
var istrizaine = Math.sqrt(istrizainekvadratu);
console.log(istrizaine);
document.querySelector('.atsakymas').innerHTML += '<p>aukstis</p>' + aukstis;
document.querySelector('.atsakymas').innerHTML += '<p>plotis</p>' + plotis;
document.querySelector('.atsakymas').innerHTML += '<p>plotas</p>' + plotas;
document.querySelector('.atsakymas').innerHTML += '<p>perimetras</p>' + perimetras;
document.querySelector('.atsakymas').innerHTML += '<p>istrizaine</p>' + istrizaine;

