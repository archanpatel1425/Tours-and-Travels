window.onscroll = function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 640) {
        navbar.classList.add("navbar-d");

    } else {
        navbar.classList.remove("navbar-d");

    }
};
// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
}

// Function to show/hide the button based on scroll position
window.addEventListener('scroll', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 300) { // Adjust the scroll position threshold as needed
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0px";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}
//------------------------------------------------------------------------------------
// fligth
//  creat function by using $ sign to use document.getElememtByid
function $(selectedId) {
    return document.getElementById(selectedId);
}
// click event

$('first-class-plush-count').addEventListener('click', function () {
    SelecteAirTricket('first-count', true);
});
$('first-class-minus-count').addEventListener('click', function () {
    SelecteAirTricket('first-count', false);
});

$('economy-class-plush-count').addEventListener('click', function () {
    SelecteAirTricket('economy-count', true);
});
$('economy-class-minus-count').addEventListener('click', function () {
    SelecteAirTricket('economy-count', false);
});

// click event  to jump next page

$('bookingBtn').addEventListener('click', function () {
    if ($('sub-total-count').innerText == 0) {
        alert('Please selecete Minimum One Tricket for continue Booking ');
    } else {
        const mainSection = $('mainSection');
        mainSection.style.display = 'none';
        $('userTricket').style.display = 'block';
    }
});

// main  function  is created  for controlling tricket Quentity and other function

function SelecteAirTricket(tricketClass, quentity) {
    const tricketQuentity = ConvertStringToNumber(tricketClass);

    let newTricketQuentity = tricketQuentity;
    if (quentity == true) {
        newTricketQuentity = newTricketQuentity + 1;
    }
    if (quentity == false && newTricketQuentity >= 1) {
        newTricketQuentity = newTricketQuentity - 1;
    }

    $(tricketClass).value = newTricketQuentity;

    TotalPriceCount();
}

// this function is created  for calculate total cost vat and subtotal
function TotalPriceCount() {
    const numberOfEconomyTricket = ConvertStringToNumber('economy-count');
    const numberofFirstClassTricket = ConvertStringToNumber('first-count');
    var fromInput = document.getElementById('fly_from').value
    /* alert(fromInput) */
    var toInput = document.getElementById('fly_to').value
    var depdate = document.getElementById('dep').value
    var retdate = document.getElementById('ret').value

    // subTotal
    const subTotalCost = numberOfEconomyTricket * 100 + numberofFirstClassTricket * 150;
    $('sub-total-count').innerText = '$' + subTotalCost;
    // vat
    const vatCost = Math.round(subTotalCost / 10);
    $('vat-count').innerText = '$' + vatCost;

    // total
    const totalCost = subTotalCost + vatCost;

    $('total-cost').innerText = '$' + totalCost;

    /* ADDED */
    $('depdate').innerText = depdate;
    $('retdate').innerText = retdate;
    $('demo').innerText = fromInput;
    $('demo-to').innerText = toInput;
    /* ADIJ */


    // total cost show in next page
    $('total-tricket-cost').innerText = '   $   ' + totalCost + '    (10% vat include)';
    // number of passenger show in next page
    $('total-passenger-count').innerText = numberOfEconomyTricket + numberofFirstClassTricket;
}

// this function is created  for converting a number to a string
function ConvertStringToNumber(targetId) {
    const input = $(targetId).value;
    const convertToInt = parseInt(input);
    return convertToInt;
}