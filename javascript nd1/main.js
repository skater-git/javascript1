var krastine1 = 3;
// Isvedu krastine i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>krastine1 = ' + krastine1;
var krastine2 = 4;
// Isvedu krastine i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>krastine2 = ' + krastine2;
var ilgiausiakrastine = 5;
// Isvedu krastine i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>krastine3 = ' + ilgiausiakrastine;
// Pasitikrinu ar tai trikampis
if (krastine1 + krastine2 <= ilgiausiakrastine) {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>joks</p>';
// Jei netinka ankstesnis
} else if (krastine1 + krastine2 > ilgiausiakrastine) {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>trikampis</p>';
} 
// Pasitikrinu koks tai trikampis
if (krastine1 == krastine2 && krastine1 == ilgiausiakrastine && krastine2 == ilgiausiakrastine) {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>lygiakrastis</p>';
// Jei netinka ankstesnis
} else if (krastine1 == krastine2 || krastine1 == ilgiausiakrastine || krastine2 == ilgiausiakrastine) {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>lygiasonis</p>';
} 
// Pasitikrinu ar tai trikampis, jei taip tai koks
if (krastine1 != krastine2 && krastine1 != ilgiausiakrastine && krastine2 != ilgiausiakrastine && krastine1 + krastine2 > ilgiausiakrastine) {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>ivairiakrastis</p>';
} 
// Pasitikrinu koks tai trikampis
 if (Math.pow(ilgiausiakrastine, 2) == (Math.pow(krastine1, 2) + Math.pow(krastine2, 2))) {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>status</p>';
}
// Apskaiciuoju trikampio pusperimetri
var pusperimetris = ((krastine1 + krastine2 + ilgiausiakrastine) / 2);
// Apskaiciuoju trikampio plota neitraukus saknies
var plotas_neistraukus_saknies = (pusperimetris * (pusperimetris - krastine1) * (pusperimetris - krastine2) * (pusperimetris - ilgiausiakrastine));
// Apskaiciuoju trikampio plota
var plotas = Math.sqrt(plotas_neistraukus_saknies);
// Isvedu atsakyma i narsykle jei tai trikampis
var trikampis = document.querySelector('.trikampis');
if (krastine1 + krastine2 > ilgiausiakrastine) {
trikampis.innerHTML += '<p>trikampio plotas:' + ' ' + plotas;
}