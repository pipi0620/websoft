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

        var data = document.getElementById('table');

        schools.Skolenheter = schools.Skolenheter.filter(function (a){
            return a.Skolenhetsnamn ==="Hobyskolan";
        });
        data.innerHTML = JSON.stringify(schools.Skolenheter,0,4);
            for(var i=0;i<data.length;i++){
                var row=data.insertRow(data.rows.length);
                var c1=row.insertCell(0);
                c1.innerHTML=data[i].Skolenhetskod;
                var c2=row.insertCell(1);
                c2.innerHTML=data[i].Skolenhetsnamn;
                var c3=row.insertCell(2);
                c3.innerHTML=data[i].Kommunkod;
                var c4=row.insertCell(3);
                c4.innerHTML=data[i].PeOrgNr;
            }
        }
    console.log('All ready!');
})();