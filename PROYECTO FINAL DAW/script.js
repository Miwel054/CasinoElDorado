document.addEventListener('DOMContentLoaded', (event) => {
    const playNowButton = document.getElementById('playNow');
    if (playNowButton) {
        playNowButton.addEventListener('click', function() {
            alert('¡Bienvenido a la acción del Casino Online!');
        });
    }

    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            openModal('loginModal');
        });
    }

    const registerButton = document.getElementById('registerButton');
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            openModal('registerModal');
        });
    }

    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    }

    let slideIndex = 0;
    showSlides();

    window.plusSlide = function(n) {
        showSlides(slideIndex += n);
    }

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("slide");
        if (slides.length === 0) return;

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove('active');
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 5000);
    }

    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    const modal = document.getElementById('loginModal');
    if (modal) {
        loginButton.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    const portadaPlayNowButton = document.getElementById('portadaPlayNow');
    if (portadaPlayNowButton) {
        portadaPlayNowButton.addEventListener('click', function() {
            alert('¡Bienvenido a la acción del Casino Online!');
        });
    }

    const complaintsForm = document.getElementById('complaintsForm');
    if (complaintsForm) {
        complaintsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Your request has been sent. We will get back to you soon.');
        });
    }
});

function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
}
