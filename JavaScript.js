document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");

    // Toggle Mobile Navigation Menu
    menuToggle.addEventListener("click", function() {
        mobileNav.classList.toggle("active");
        
        // Dynamic Icon change effect (bars to X icon)
        const icon = menuToggle.querySelector("i");
        if(mobileNav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
});

