var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("nav-navigace");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.classList.remove("relative")
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("relative")
    }
}