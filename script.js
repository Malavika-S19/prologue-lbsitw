// ==========================================
// PROLOGUE - JAVASCRIPT
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// ==========================================
// MEMBERSHIP FORM
// ==========================================

const membershipForm = document.getElementById("membershipForm");
const successMessage = document.getElementById("successMessage");

if (membershipForm) {

    membershipForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let isValid = true;


        // ==========================================
        // GET FORM FIELDS
        // ==========================================

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const year = document.getElementById("year");
        const branch = document.getElementById("branch");
        const genre = document.getElementById("genre");
        const message = document.getElementById("message");
        const agreement = document.getElementById("agreement");


        // ==========================================
        // GET ERROR ELEMENTS
        // ==========================================

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const yearError = document.getElementById("yearError");
        const branchError = document.getElementById("branchError");
        const genreError = document.getElementById("genreError");
        const messageError = document.getElementById("messageError");


        // ==========================================
        // CLEAR PREVIOUS ERRORS
        // ==========================================

        if (nameError) nameError.textContent = "";
        if (emailError) emailError.textContent = "";
        if (yearError) yearError.textContent = "";
        if (branchError) branchError.textContent = "";
        if (genreError) genreError.textContent = "";
        if (messageError) messageError.textContent = "";


        // ==========================================
        // NAME VALIDATION
        // ==========================================

        if (name && name.value.trim() === "") {

            if (nameError) {
                nameError.textContent = "Please enter your name.";
            }

            isValid = false;
        }


        // ==========================================
        // EMAIL VALIDATION
        // ==========================================

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email && email.value.trim() === "") {

            if (emailError) {
                emailError.textContent = "Please enter your email.";
            }

            isValid = false;

        } else if (
            email &&
            !emailPattern.test(email.value.trim())
        ) {

            if (emailError) {
                emailError.textContent =
                    "Please enter a valid email address.";
            }

            isValid = false;
        }


        // ==========================================
        // YEAR VALIDATION
        // ==========================================

        if (year && year.value === "") {

            if (yearError) {
                yearError.textContent =
                    "Please select your year.";
            }

            isValid = false;
        }


        // ==========================================
        // BRANCH VALIDATION
        // ==========================================

        if (branch && branch.value === "") {

            if (branchError) {
                branchError.textContent =
                    "Please select your branch.";
            }

            isValid = false;
        }


        // ==========================================
        // FAVOURITE GENRE VALIDATION
        // ==========================================

        if (genre && genre.value === "") {

            if (genreError) {
                genreError.textContent =
                    "Please select your favourite genre.";
            }

            isValid = false;
        }


        // ==========================================
        // MESSAGE VALIDATION
        // ==========================================

        if (message && message.value.trim() === "") {

            if (messageError) {
                messageError.textContent =
                    "Please tell us a little about yourself.";
            }

            isValid = false;
        }


        // ==========================================
        // AGREEMENT VALIDATION
        // ==========================================

        if (agreement && !agreement.checked) {

            isValid = false;

            alert(
                "Please agree to the membership terms before joining."
            );
        }


        // ==========================================
        // STOP IF FORM IS INVALID
        // ==========================================

        if (!isValid) {

            if (successMessage) {
                successMessage.classList.remove("show");
            }

            return;
        }


        // ==========================================
        // SUCCESSFUL REGISTRATION
        // ==========================================

        if (successMessage) {

            successMessage.classList.add("show");

        }


        // Reset form after successful submission
        membershipForm.reset();


        // Keep success message visible
        if (successMessage) {

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

}


// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".benefit-card, .activity-card, .event-card, .gallery-item"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });

}