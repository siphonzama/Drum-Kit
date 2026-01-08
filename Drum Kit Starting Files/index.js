// Detecting Button Press
/*var buttons = document.querySelectorAll(".drum");
buttons.forEach(function(buttons){
    buttons.addEventListener("click", function(){
        alert("i was clicked")
    });
});
*/

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0 ; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("i was clicked");
    });
}