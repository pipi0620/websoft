/**
 * A function to wrap it all in.
 */
"use strict";

(function () {
    var button = document.getElementById('button');
    button.addEventListener("click",function () {
        console.log("clicked");
        fetch('https://rem.dbwebb.se/api/users')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
                var table=document.getElementById("table");
                var data = myJson.data;
                for(var i=0;i<data.length;i++){
                    var row=table.insertRow(table.rows.length);
                    var c1=row.insertCell(0);
                    c1.innerHTML=data[i].id;
                   var c2=row.insertCell(1);
                    c2.innerHTML=data[i].firstName;
                    var c3=row.insertCell(2);
                    c3.innerHTML=data[i].lastName;
                }
            });

        console.log("All ready.");
    });

})();
