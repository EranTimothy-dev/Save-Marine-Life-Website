document.addEventListener("DOMContentLoaded", () => {
    const bubblesContainer = document.querySelector(".bubbles");
    const splashScreen = document.querySelector(".splash-screen");
    const fishContainer = document.querySelector(".fish-container");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.width = `${Math.random() * 10 + 5}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;

        bubblesContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 5000);
    }

    setInterval(createBubble, 300);

    function createFish() {
        const fish = document.createElement("img");
        fish.src = "https://pngimg.com/uploads/fish/fish_PNG1151.png";
        fish.classList.add("fish");
        fish.style.bottom = `${Math.random() * 10 + 2}%`; // Moves fish lower
        fish.style.animationDuration = `${Math.random() * 4 + 5}s`; // Random speeds for realism
        fishContainer.appendChild(fish);

        setTimeout(() => {
            fish.remove();
        }, 8000); // Ensures fish disappear after leaving the screen
    }

    setInterval(createFish, 2000); // Fish spawn every 2 seconds

    // FIX: Wait for the animation to fully complete before redirecting
    function fadeOutSplashScreen() {
        console.log("Adding hidden class..."); // Debugging log
        splashScreen.classList.add("hidden");

        // Wait for the animation to finish before redirecting
        splashScreen.addEventListener("animationend", () => {
            console.log("Redirecting to main page..."); // Debugging log
            window.location.href = "home.html";
        });
    }

    setTimeout(fadeOutSplashScreen, 10000);
});
