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
    var subMenu = document.querySelector('div.sub-menu');
    if (nav.style.height == '40px') {
        nav.style.height = size;
        subMenu.css("display", "block");
    } else {
        nav.style.height = '40px';
    }
};

//$('#toggleBtn').click(function () {
//    if ($window).width() > 500) {
//    $
//}
//})
////https://www.w3schools.com/howto/howto_js_dropdown.asp


//FORMULARZE WALIDACJA
//var usrName = document.getElementById('Username').value;
//usrName.addEventListener('input', function (event) {
//    if (usrName.validity.typeMismatch) {
//        usrName.setCustomValidity('Name must be filled out');
//    } else {
//        usrName.setCustomValidity('');
//    }
//})
//document('div.form-group').addEventListener('submit',
//    function (event) {
//        var isFormValidate = true;
//
//    })

//Modale
var btn=document.getElementById('test');
function closeModal() {
    document.getElementById('overlay').classList.remove('show')
}
document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        closeModal()
    })
})
////Close modal when click on background 
document.querySelector('#overlay').addEventListener('click', function (e) {
    if (e.target == this) {
        closeModal()
    }
})
////Close on escape 
document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        closeModal()
    }
})

////Open selected modal. close other.
function openModal(modal){
    document.querySelectorAll('#overlay >*').forEach(function(modal){
        modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
}
