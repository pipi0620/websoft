window.onload = function() {
    var box = document.getElementById("cat");
    // alert(window.screen.height)
    myMove(box);
}

var myTime = null;

function myMove(obj) {

    clearInterval(myTime);
    var mySpeedX = 3;
    var mySpeedY = 3;

    myTime = setInterval(function() {
        if (obj.offsetTop >= document.documentElement.clientHeight - obj.offsetHeight) {
            obj.style.top = document.documentElement.clientHeight - obj.offsetHeight + "px";
            mySpeedY *= -1;
        } else if (obj.offsetTop <= 0) {
            mySpeedY *= -1;
        }
        if (obj.offsetLeft >= document.documentElement.clientWidth - obj.offsetWidth) {
            obj.style.left = document.documentElement.clientWidth - obj.offsetWidth + "px";
            mySpeedX *= -1;
        } else if (obj.offsetLeft <= 0) {
            mySpeedX *= -1;
        }
        obj.style.left = obj.offsetLeft + mySpeedX + "px";
        obj.style.top = obj.offsetTop + mySpeedY + "px";
    }, 30)

}