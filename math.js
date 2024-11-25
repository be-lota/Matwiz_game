Document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".difficulty-btn");

    const title = document.querySelector(".animated-text");
    title.classList.add("intro-animation");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Prevents the link from opening immediately

            const difficulty = event.target.dataset.difficulty;

            alert(`You selected ${difficulty} mode. Get ready!`);

            event.target.classList.add("shake");

            setTimeout(() => {
                event.target.classList.remove("shake");
                
                window.location.href = event.target.href;
            }, 500);
        });
    });
});
