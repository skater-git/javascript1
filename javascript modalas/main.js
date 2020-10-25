var tbody = document.getElementById('tbody');
var mygtukas = document.getElementById('trinti');
var forma = document.getElementById('form');
var modalas = document.querySelector('.modalo_fonas');
forma.addEventListener('submit', function(event){
    event.preventDefault();
    var data = document.getElementById('data').value;
    var numeris = document.getElementById('numeris').value;
    var atstumas = document.getElementById('atstumas').value;
    var laikas = document.getElementById('laikas').value;
    if (data <= 0 || numeris <= 0 || atstumas <= 0 || laikas <= 0){
        alert('truksta duomenu');
    } else {
            var tr = document.createElement('tr');
            var duomenys = [data, numeris, atstumas, laikas]
            for (i = 0; i < duomenys.length; i++){
                var td = document.createElement('td');
                td.innerHTML = duomenys[i];
                tr.appendChild(td);
            }
            var trintiMygtukas = document.createElement('button');
            trintiMygtukas.innerHTML('trinti');
            tristiMygtukas.classlist.add('trinti')
            var buttontd = document.createElement('td');
            buttontd.appendChild(trintiMygtukas);
            tr.appendChild(buttontd);
            tbody.appendChild(tr);
        }
});
