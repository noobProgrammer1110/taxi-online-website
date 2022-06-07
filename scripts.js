// window.onscroll = function(){StickyNav()};

// var myNavbar = document.querySelector("nav");
// var sticky = myNavbar.offsetTop;

// function StickyNav(){
//     if(window.pageYOffset >= sticky+100){
//         myNavbar.classList.add("sticky");
//     }
//     else if(window.pageYOffset < 200){
//         myNavbar.classList.remove("sticky");
//     }
// }

function ShowBar(){
    var myBurger = document.getElementById("burger");
    var mainHeader = document.querySelector(".content-header");
    myBurger.classList.toggle("show");
    mainHeader.classList.toggle("add-margin");
}
