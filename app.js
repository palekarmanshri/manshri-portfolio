document.addEventListener("DOMContentLoaded", function () {

    /* ================= NAV TOGGLE ================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    /* ================= TYPING EFFECT ================= */
    const typingElement = document.querySelector(".typing-text");
    if (typingElement) {
        const texts = ["Frontend Developer", "UI/UX Designer"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[textIndex];

            typingElement.textContent = isDeleting
                ? currentText.substring(0, charIndex--)
                : currentText.substring(0, charIndex++);

            let delay = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                delay = 1500;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                delay = 500;
            }

            setTimeout(type, delay);
        }

        setTimeout(type, 1000);
    }

    /* ================= SMOOTH SCROLL ================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    /* ================= PROJECT VIDEO HOVER ================= */
    document.querySelectorAll('.project-media').forEach(media => {
        const video = media.querySelector('video');
        if (!video) return;

        media.addEventListener('mouseenter', () => video.play());
        media.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

    /* ================= CONTACT FORM ================= */
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    if (form && successMsg) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            successMsg.style.display = "block";
            form.reset();

            setTimeout(() => {
                successMsg.style.display = "none";
            }, 3000);
        });
    }

    /* ================= SKILLS PROGRESS ================= */
    document.querySelectorAll(".skill-card").forEach(card => {
        const level = card.getAttribute("data-level");
        const bar = card.querySelector(".progress span");

        if (bar && level) {
            setTimeout(() => {
                bar.style.width = level + "%";
            }, 300);
        }
    });

});
