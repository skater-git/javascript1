var tr;
var netrintiMygtukas = document.getElementById('netrinti');
var trintiMygtukas = document.getElementById('trinti');
var modalas = document.querySelector('.modalo_fonas');
var m = [inputas, inputas1, inputas2, inputas3];
tbody = document.getElementById('lentele');
function musuFunkcija() {
    var tr = document.createElement('tr');  
    var mygtukas = document.createElement('button');
    mygtukas.setAttribute('id', 'mygtukas');
    mygtukas.innerHTML = ('trinti');
            m.push(mygtukas);
            for ( i = 0;  i < 5; i++) {
                if (m[0].value <= 0 || m[1].value <= 0 || m[2].value <= 0 || m[3].value <= 0  ) {
                  alert('neuzpildytas vienas is lauku');
                  break;
              } else  { 
                  var td = document.createElement('td');
                  td.innerHTML = (m[i]).value;
                  td.appendChild(mygtukas);
                  tr.appendChild(td);
              }
          }
            tbody.addEventListener('click' , function(event) {
                if (event.target && event.target.id == ('mygtukas')) {
                tr = event.target.parentElement.parentElement;
                modalas.classList.add('modalas-aktyvus');
                }
            });
            trintiMygtukas.addEventListener('click', function(){
            modalas.classList.remove('modalas-aktyvus');
            tr.remove();  
            });
            netrintiMygtukas.addEventListener('click', function(){
            modalas.classList.remove('modalas-aktyvus');
            });
    tbody.appendChild(tr);
    document.getElementById("forma").reset();
    var tr = document.querySelectorAll('tr');
    for (var j = 0; j < tr.length; j++) {
       if (j % 2 == 1 && j > 0 ) {
          tr[j].style.backgroundColor = 'lightseagreen';
          var spalva = document.getElementById('lentele');
 spalva.addEventListener("click", function(e) {
     if (e.target.id == 'mygtukas') {
    var tr = e.target;
    tr.style.transform = 'scale(1.5)';
     }
});
      }
      }
 }
