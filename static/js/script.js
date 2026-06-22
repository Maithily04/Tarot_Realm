// ==============================
// PAGE LOAD ANIMATION
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "1";
    }, 100);

});


// ==============================
// FLOATING STARS GENERATOR
// ==============================

function createStar() {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.animationDuration =
        Math.random() * 8 + 5 + "s";

    star.style.opacity =
        Math.random();

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 12000);
}

setInterval(createStar, 400);


// ==============================
// CARD HOVER EFFECT
// ==============================

const hoverCards = document.querySelectorAll(
    ".feature-card, .knowledge-card, .fortune-box, .result-card"
);

hoverCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(245,214,123,0.18),
            rgba(255,255,255,0.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,0.05)";
    });

});


// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

document.querySelectorAll(".modern-btn").forEach(button => {

    button.addEventListener("click", function(e) {

        let ripple =
            document.createElement("span");

        let rect =
            this.getBoundingClientRect();

        let size =
            Math.max(rect.width, rect.height);

        ripple.style.width =
            ripple.style.height =
            size + "px";

        ripple.style.left =
            e.clientX - rect.left - size / 2 + "px";

        ripple.style.top =
            e.clientY - rect.top - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


// ==============================
// TAROT CARD GLOW
// ==============================

const tarotImage =
    document.querySelector(".tarot-image");

if (tarotImage) {

    tarotImage.addEventListener("mouseenter", () => {

        tarotImage.style.boxShadow =
            "0 0 50px rgba(245,214,123,.8)";
    });

    tarotImage.addEventListener("mouseleave", () => {

        tarotImage.style.boxShadow =
            "0 0 25px rgba(245,214,123,.3)";
    });

}


// ==============================
// RANDOM QUOTE
// ==============================

const quotes = [

    "Trust the wisdom hidden within the cards.",
    "Every answer already exists within you.",
    "The stars reveal possibilities, not certainties.",
    "Your intuition knows the way.",
    "Destiny unfolds one choice at a time.",
    "The universe whispers to those who listen.",
    "Your journey is sacred.",
    "Growth begins where fear ends.",
    "The future belongs to the brave.",
    "Every card reveals a lesson."

];

const quoteBox =
    document.getElementById("dailyQuote");

if (quoteBox) {

    quoteBox.innerText =
        quotes[
            Math.floor(
                Math.random() * quotes.length
            )
        ];

}


// ==============================
// SMOOTH SCROLL
// ==============================

document.documentElement.style.scrollBehavior =
    "smooth";


// ==============================
// LOGIN FORM EFFECT
// ==============================

const loginInputs =
    document.querySelectorAll("input");

loginInputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.boxShadow =
            "0 0 15px rgba(245,214,123,.5)";
    });

    input.addEventListener("blur", () => {

        input.style.boxShadow =
            "none";
    });

});


// ==============================
// DASHBOARD TITLE GLOW
// ==============================

const titles =
    document.querySelectorAll("h1");

titles.forEach(title => {

    setInterval(() => {

        title.style.textShadow =
            "0 0 20px rgba(245,214,123,.9)";

        setTimeout(() => {

            title.style.textShadow =
                "0 0 10px rgba(245,214,123,.3)";

        }, 1000);

    }, 3000);

});