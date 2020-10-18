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
    // console.log('joks');
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>joks</p>';
} else if (krastine1 + krastine2 > ilgiausiakrastine) {
        // console.log('trikampis');
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>trikampis</p>';
} 
// Pasitikrinu koks tai trikampis
if (krastine1 == krastine2 == ilgiausiakrastine) {
        // console.log('lygiakrastis');
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>lygiakrastis</p>';
} 
// Pasitikrinu koks tai trikampis
if (krastine1 == krastine2 || krastine1 == ilgiausiakrastine || krastine2 == ilgiausiakrastine) {
        // console.log('lygiasonis');
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>lygiasonis</p>';
} 
// Pasitikrinu koks tai trikampis
if (krastine1 != krastine2 && krastine1 != ilgiausiakrastine && krastine2 != ilgiausiakrastine) {
        // console.log('ivairiakrastis');
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>ivairiakrastis</p>';
} 
// Pasitikrinu koks tai trikampis
 if (Math.pow(ilgiausiakrastine, 2) == (Math.pow(krastine1, 2) + Math.pow(krastine2, 2))) {
    // console.log('status');
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>status</p>';
}
// Apskaiciuoju trikampio pusperimetri
var pusperimetris = ((krastine1 + krastine2 + ilgiausiakrastine) / 2);
// console.log(pusperimetris);
// Apskaiciuoju trikampio plota neitraukus saknies
var plotas_neistraukus_saknies = (pusperimetris * (pusperimetris - krastine1) * (pusperimetris - krastine2) * (pusperimetris - ilgiausiakrastine));
// console.log(plotas_neistraukus_saknies);
// Apskaiciuoju trikampio plota
var plotas = Math.sqrt(plotas_neistraukus_saknies);
// console.log(plotas);
// Isvedu atsakyma i narsykle
var trikampis = document.querySelector('.trikampis');
trikampis.innerHTML += '<p>trikampio plotas:' + ' ' + plotas;
