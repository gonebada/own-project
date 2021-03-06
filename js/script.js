'use strict';

//// Navbar menu
const menuArrow = document.getElementById('mobile');
const navMenu =  document.getElementById('nav-1')
const navSubMenu =document.querySelector('.sub-menu');
menuArrow.addEventListener('click', () => {
    navMenu.classList.toggle('resizeNav')
    navSubMenu.classList.toggle('resizeNav');
});


/// ===== > Open / close sidebar <==== ///
const showSidebar = document.getElementById('showSidebar');
const sideBar = document.querySelector('.sidebar');
const sidebarHide = document.getElementById('sidebarHide');
showSidebar.addEventListener('click', () => {
    sideBar.classList.add('show-sidebar');
})

sidebarHide.addEventListener('click', () => {
    sideBar.classList.remove('show-sidebar');
})

//Modale
var btn = document.getElementById('modalLogIn');

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
function openModal(modal) {
    document.querySelectorAll('#overlay >*').forEach(function (modal) {
        modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
}

//---> CHART <----///
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar', //column type
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
                // 4
                label: "Signups",
                // 5
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // 6
                data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
        },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
        },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
                // 7
                hidden: true,
        }]
    },
});
