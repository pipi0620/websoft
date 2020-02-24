/**
 * a comment
 */
"use strict";

(function () {
    var element = document.getElementById("cat");

    element.addEventListener("click", function () {
        element.innerHTML = "<p>" + element.offsetLeft + "</p>";
        element.style.left = element.offsetLeft + 60 + "px";
        element.
        console.log(element.style.left);
        console.log(element.offsetLeft);
        console.log("Cat click");
    });

    console.log(element);
    console.log("Cat ready");

})();