document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        startEvent: "DOMContentLoaded",
        offset: 200,
        delay: 100
    });

    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLinks = document.querySelectorAll("#nav-menu a");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu", "left-0");
            navMenu.classList.remove("left-[-100%]");
        });
    }

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu", "left-0");
            navMenu.classList.add("left-[-100%]");
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show-menu", "left-0");
            navMenu.classList.add("left-[-100%]");
        });
    });

    if (window.location.hash === "#about-full") {
        navigateToAbout();
    }

    document
        .querySelector("#certificateModal button")
        .addEventListener("click", closeCertificateModal);
    document
        .getElementById("certificateModal")
        .addEventListener("click", function (e) {
            if (e.target === this) {
                closeCertificateModal();
            }
        });

    document
        .getElementById("serviceForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                service: document.getElementById("serviceType").value,
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                details: document.getElementById("details").value
            };
            console.log("Form submitted:", formData);
            alert(
                "Thank you for your service request! We will contact you soon."
            );
            closeModal();
            this.reset();
        });

    window.addEventListener("click", function (event) {
        const modal = document.getElementById("serviceModal");
        if (event.target === modal) {
            closeModal();
        }
    });

    document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            document.getElementById("successModal").classList.remove("hidden");
            this.reset();
        });

    window.addEventListener("popstate", function () {
        if (window.location.hash === "#about-full") {
            navigateToAbout();
        } else {
            backToMain();
        }
    });

    document.getElementById("currentYear").textContent =
        new Date().getFullYear();
});

function showCertificateModal(imageUrl) {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.getElementById("modalCertificateImage").src = imageUrl;
    document.getElementById("certificateModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeCertificateModal() {
    const modal = document.getElementById("certificateModal");
    const scrollY = document.body.style.top;
    modal.classList.add("hidden");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.overflow = "auto";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
}

function openModal(serviceType) {
    document.getElementById("serviceType").value = serviceType;
    document.getElementById(
        "modalTitle"
    ).textContent = `Order ${serviceType} Service`;
    document.getElementById("serviceModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("serviceModal").classList.add("hidden");
    document.body.style.overflow = "auto";
}

function hideAllExceptAbout() {
    const elementsToHide = [
        "portfolio",
        "home",
        "contact",
        "service",
        "batas1",
        "batas2",
        "batas3",
        "batas4",
        "about"
    ];
    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = "none";
    });
    document.getElementById("full-about-page").classList.remove("hidden");
    document.body.classList.add("overflow-y-auto");
    setTimeout(() => {
        ScrollTrigger.refresh();
        initProgressBars();
    }, 300);
}

function showAllElements() {
    const elementsToShow = [
        "portfolio",
        "about",
        "home",
        "batas1",
        "batas2",
        "batas3",
        "batas4",
        "contact",
        "service"
    ];
    elementsToShow.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = "";
    });
    document.getElementById("full-about-page").classList.add("hidden");
    document.body.classList.remove("overflow-y-auto");
    ScrollTrigger.refresh();
}

function navigateToAbout() {
    hideAllExceptAbout();
    history.pushState(null, null, "#about-full");
    window.scrollTo(0, 0);
}

function backToMain() {
    showAllElements();
    history.pushState(null, null, "#");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
