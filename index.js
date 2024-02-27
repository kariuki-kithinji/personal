// Get the button that opens the modal
var btn = document.getElementById("alertButton");

function show_alert(message) {
    alert(message);
    console.log(message);    
}

// When the page loads, open the modal
window.onload = function() {
    show_alert('hey there ! welcome to my website , my name is Shailaja Talluri')
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
    show_alert('hey there ! welcome to my website , my name is Shailaja Talluri')
}
