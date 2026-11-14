
function showSurprise() {
    const message = document.getElementById("surpriseMessage");

    message.classList.remove("hidden");

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
