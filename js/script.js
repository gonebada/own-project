'use strict';

//var resizeNav = document.getElementById('menu-arrow');
//resizeNav.addEventListener('click', function () {
//    size();
//}
//function size(){
//    document.getElementById('nav-1').style.height="400px";
//}
//
//
//function myFunction() {
//  document.getElementById("myDropdown").classList.toggle("show");
//}
//
//// Close the dropdown if the user clicks outside of it
//window.onclick = function(event) {
//  if (!event.target.matches('.dropbtn')) {
//    var dropdowns = document.getElementsByClassName("dropdown-content");
//    var i;
//    for (i = 0; i < dropdowns.length; i++) {
//      var openDropdown = dropdowns[i];
//      if (openDropdown.classList.contains('show')) {
//        openDropdown.classList.remove('show');
//      }
//    }
//  }
//}


function resize(select, size) {
    var nav = document.querySelector(select);
    var subMenu=document.querySelector('div.sub-menu');
    if (nav.style.height == '40px') {
        nav.style.height = size;
        subMenu.css("display","block");
    } else {
        nav.style.height = '40px';
    }
};

$('#toggleBtn').click(function(){
    if ($window).width()>500){
        $
    }
})
//https://www.w3schools.com/howto/howto_js_dropdown.asp