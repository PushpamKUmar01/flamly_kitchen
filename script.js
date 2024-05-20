const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});



// --------------ads-----------------


let currentAd = 0;
const ads = document.querySelectorAll('.ads-section img');
const totalAds = ads.length;

function showNextAd() {
    ads[currentAd].classList.remove('active');
    currentAd = (currentAd + 1) % totalAds;
    ads[currentAd].classList.add('active');
}

setInterval(showNextAd, 3000); // Change image every 3 seconds


//----------------ads2--------------------

let currentAd2 = 0;
const ads2 = document.querySelectorAll('.ads2-section img');
const totalAds2 = ads2.length;

function showNextAd2() {
    ads2[currentAd2].classList.remove('active');
    currentAd2 = (currentAd2 + 1) % totalAds2;
    ads2[currentAd2].classList.add('active');
}

setInterval(showNextAd2, 3000); // Change image every 3 seconds


//--------------------ads3------------------
// Function to rotate ads for ads3 section
function rotateAds3() {
    let currentAdIndex = 0;
    const ads3 = document.querySelectorAll('.ads3-section img');
    const adInterval = 3000; // Change ad every 3 seconds

    function showNextAd() {
        ads3[currentAdIndex].classList.remove('active');
        currentAdIndex = (currentAdIndex + 1) % ads3.length;
        ads3[currentAdIndex].classList.add('active');
    }

    setInterval(showNextAd, adInterval);
}

// Initialize ad rotation for ads3 section
document.addEventListener('DOMContentLoaded', () => {
    rotateAds3();
});


//buy button


// Function to handle the "Buy Now" button click
function handleBuyNowClick(event) {
    const buyNowUrl = 'http://example.com/buy-now'; // Replace with your actual URL
    window.location.href = buyNowUrl; // Navigates to the new URL
}

// Adding event listeners to all "Buy Now" buttons
document.addEventListener('DOMContentLoaded', () => {
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', handleBuyNowClick);
    });
});
