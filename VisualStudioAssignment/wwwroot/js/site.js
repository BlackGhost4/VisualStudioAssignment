// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var myVideo;

window.onload = function () {
    myVideo = document.getElementById("myVideo");
}

var littleSize = true; //width is 560
function changeWidth() {
    let id = null;
    var increment = 30;
    clearInterval(id);
    id = setInterval(changeS, 10);
    function changeS() {
        if (increment <= 0) {
            littleSize = !littleSize;
            clearInterval(id);
        } else {
            if (littleSize) {
                myVideo.width = parseInt(myVideo.width) + 10;
                myVideo.height = parseInt(myVideo.height) + 10;
            } else {
                myVideo.width = parseInt(myVideo.width) - 10;
                myVideo.height = parseInt(myVideo.height) - 10;
            }
        }
        increment--;
    }
}