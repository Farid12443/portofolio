gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
    gsap.utils.toArray(".portfolio-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: i * 0.1
        });
    });

    gsap.from(".section-title", {
        scrollTrigger: {
            trigger: "#portfolio",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 0.8
    });

    gsap.utils.toArray(".service-section").forEach((section, i) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: i * 0.1,
            ease: "back.out(1.2)"
        });
    });

    gsap.from(".animate__fadeIn", {
        scrollTrigger: {
            trigger: "#services-header",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2
    });

    
    initProgressBars();

  
    initMarquee();
}

function initProgressBars() {
    gsap.set(".progress-fill, .bg-primary-dark", { width: "0%" });

    gsap.utils.toArray(".progress-fill").forEach((bar, i) => {
        const targetWidth = bar.getAttribute("data-width") || "0%";
        gsap.to(bar, {
            width: targetWidth,
            duration: 1.8,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
                trigger: bar.closest(".group"),
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onStart: () => {
                bar.style.willChange = "width";
            },
            onComplete: () => {
                bar.style.willChange = "auto";
            }
        });
    });

    gsap.utils.toArray(".bg-primary-dark").forEach((bar, i) => {
        const targetWidth = bar.getAttribute("data-width") || "0%";
        gsap.to(bar, {
            width: targetWidth,
            duration: 1.8,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
                trigger: bar.closest(".group"),
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    gsap.utils.toArray(".progress-percent").forEach((percentEl, i) => {
        const targetPercent = percentEl.textContent;
        percentEl.textContent = "0%";
        gsap.to(percentEl, {
            innerText: targetPercent,
            duration: 1.8,
            snap: { innerText: 1 },
            delay: i * 0.15,
            scrollTrigger: {
                trigger: percentEl.closest(".group"),
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
}

function initMarquee() {
    const marqueeContent = document.querySelector(".marquee-content");
    const marqueeItems = document.querySelectorAll(".marquee-item");

    marqueeItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.classList.add("marquee-clone");
        marqueeContent.appendChild(clone);
    });

    let totalWidth = 0;
    marqueeItems.forEach(item => {
        totalWidth += item.offsetWidth + (window.innerWidth < 768 ? 20 : 40);
    });

    let marqueeAnimation = gsap.to(marqueeContent, {
        x: -totalWidth,
        duration: totalWidth / 30,
        ease: "none",
        repeat: -1
    });

    if ("ontouchstart" in window) {
        marqueeContent.style.willChange = "auto";
        marqueeAnimation.timeScale(0.8);
    }

    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            marqueeAnimation.kill();
            totalWidth = 0;
            marqueeItems.forEach(item => {
                totalWidth +=
                    item.offsetWidth + (window.innerWidth < 768 ? 20 : 40);
            });
            marqueeAnimation = gsap.to(marqueeContent, {
                x: -totalWidth,
                duration: totalWidth / 30,
                ease: "none",
                repeat: -1
            });
        }, 250);
    });
}
