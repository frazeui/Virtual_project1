// Main File 

document.addEventListener('DOMContentLoaded', function() {

    // Check if user is already logged in 

    const token = localStorage.getItem('token');

    if (token){
        // Redirect to dashboard if already logged in 
        window.location.href = 'dashboard.html';
    }

    //Add any homepage-specific JavaScript here 
    console.log('Task Manager Homepage Loaded');
});
