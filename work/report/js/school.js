/**
 * A function to wrap it all in.
 */

(function () {
    'use strict';
    let url;
    var btn = document.getElementById("button");
    var schools;

    url = "data/1081.json";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {

            console.log(myJson);
            myJson.Skolenheter = myJson.Skolenheter.filter(function(a){
                return a.Skolenhetsnamn ==="Hobyskolan";
            });
            schools = myJson;
        });
    btn.onclick = function(){

        var table = document.getElementById('table');

        for(var i=0;i<schools.Skolenheter.length;i++){
            var row=table.insertRow(table.rows.length);
            var c1=row.insertCell(0);
            c1.innerHTML=schools.Skolenheter[i].Skolenhetskod;
            var c2=row.insertCell(1);
            c2.innerHTML=schools.Skolenheter[i].Skolenhetsnamn;
            var c3=row.insertCell(2);
            c3.innerHTML=schools.Skolenheter[i].Kommunkod;
            var c4=row.insertCell(3);
            c4.innerHTML=schools.Skolenheter[i].PeOrgNr;
        }

    }
    console.log('All ready!');
})();