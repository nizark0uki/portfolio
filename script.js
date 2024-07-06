document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a');
    const subscribeBtn = document.querySelector('.subscribe');
    const modal = document.querySelector('#subscribe-modal');
    const closeBtn = document.querySelector('.close');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const btnClose = document.querySelector('.btn-close');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            if (window.innerWidth <= 760) {
                menu.classList.remove('show');
            }
        });
    }

    subscribeBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    hamburgerMenu.addEventListener('click', function() {
        menu.classList.toggle('show');
        btnClose.classList.toggle('show');
    });

    btnClose.addEventListener('click', function() {
        menu.classList.remove('show');
        btnClose.classList.remove('show');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create the Gmail compose link
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=koukinizar15@gmail.com&su=${subject}&body=${body}`;

    // Open the Gmail compose window
    window.open(gmailLink, '_blank');
}