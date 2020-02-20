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
    }
    console.log('All ready!');
})();