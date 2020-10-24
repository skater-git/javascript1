var auto = [
    ['2020-10-13', 'AVS243', 1246, 76],
    ['2020-12-13', 'BDS432', 6544, 23],
    ['2020-02-13', 'GSD234', 3457, 54],
    ['2020-04-13', 'GDS234', 876, 23],
]
console.log(auto);
var tbody = document.getElementById("tbody");
for (var i = 0; i < auto.length; i++) {
    console.log(auto[i]);
    var greitis = (auto[i][2] / 1000) / (auto[i][3] / 3600);
    auto[i].push(greitis);
    console.log(greitis);
    var tr = document.createElement('tr');
      for (var j = 0; j < auto[i].length; j++) {
        var td = document.createElement('td');
        console.log(auto[i][j]);
        td.innerHTML = auto[i][j];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
