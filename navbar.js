window.onscroll = function() { myFunction(); };

var navigation = document.querySelector(".navbar");
var stickyIcon = document.getElementById("sticky-icon");
var sticky = navigation.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        navigation.classList.add("sticky");
        stickyIcon.style.display = "block";
    } else {
        navigation.classList.remove("sticky");
        stickyIcon.style.display = "none";
    }
}
