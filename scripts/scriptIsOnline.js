// Check if the browser is online
function checkNetworkStatus() {
    var online = navigator.onLine;
    if (!online) {
        console.log(online);
        window.location.href = '404.html'; // Redirect to the 404 error page
    }
}

// Add an event listener to check the network status on page load
// window.addEventListener('load', checkNetworkStatus);
