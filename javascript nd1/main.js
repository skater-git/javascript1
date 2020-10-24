var krastine1 = 6;
// Isvedu krastine i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>krastine1 = ' + krastine1;
var krastine2 = 7;
// Isvedu krastine i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>krastine2 = ' + krastine2;
var krastine3 = 6;
// Isvedu krastine i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>krastine3 = ' + krastine3;
// Pasitikrinu ar tai trikampis
if (krastine1 + krastine2 > krastine3 && krastine1 + krastine3 > krastine2 && krastine2 + krastine3 > krastine1) {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>trikampis</p>';
// Apskaiciuoju trikampio pusperimetri
var pusperimetris = ((krastine1 + krastine2 + krastine3) / 2);
// Apskaiciuoju trikampio plota neitraukus saknies
var plotas_neistraukus_saknies = (pusperimetris * (pusperimetris - krastine1) * (pusperimetris - krastine2) * (pusperimetris - krastine3));
// Apskaiciuoju trikampio plota
var plotas = Math.sqrt(plotas_neistraukus_saknies);
// Isvedu atsakyma i narsykle jei tai trikampis
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>trikampio plotas:' + ' ' + plotas;
}  else  {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>joks</p>';
}  // Pasitikrinu koks tai trikampis
if (krastine1 == krastine2 && krastine1 == krastine3 && krastine2 == krastine3) {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>lygiakrastis</p>';
// Jei netinka ankstesnis
} else if (krastine1 == krastine2 || krastine1 == krastine3 || krastine2 == krastine3) {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>lygiasonis</p>';
} else if (krastine1 + krastine2 > krastine3 && krastine1 + krastine3 > krastine2 && krastine2 + krastine3 > krastine1){
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>ivairiakrastis</p>';
// Pasitikrinu koks tai trikampis
} if (Math.pow(krastine3, 2) == (Math.pow(krastine1, 2) + Math.pow(krastine2, 2))) {
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>status</p>';
}
